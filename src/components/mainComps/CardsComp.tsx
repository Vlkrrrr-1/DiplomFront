import React, { useContext, useEffect, useState } from "react";
import AllCards from "../cards/AllCards";
import { CompInfo } from "../../models/Types";
import { Box } from "@mui/material";
import ResourcesService from "../../services/ResourcesService";
import { Context } from "../..";
import CompCard from "../cards/CompCard";
import { toast } from "react-toastify";
import PageBox from "../UI/boxes/PageBox";
import CustomTypography from "../UI/text/CustomTypography";
import CustomGrid from "../UI/grid/CustomGrid";

const CardsComp = () => {
  const { store } = useContext(Context);
  const [compInfo, setCompInfo] = useState<CompInfo[] | undefined>([]);
  const [cardInfo, setCardInfo] = useState<CompInfo | undefined>();
  const [isShowCards, setIsShowCards] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCardInfo(
      compInfo?.filter((el) => el.deviceName === e.currentTarget.value)[0]
    );
    setIsShowCards(true);
    store.setSelectedPC(e.currentTarget.value);
    toast(`You selected device ${store.selectedPC}`);
  };

  const getInfo = async () => {
    try {
      const response = await ResourcesService.getLastCompInfo();
      const data = response?.data;
      if (!data) return;
      setCompInfo(data);
    } catch (error) {
      console.error("Error while downloading data", error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <PageBox>
      {isShowCards ? (
        <AllCards compInfo={cardInfo} setIsShowCards={setIsShowCards} />
      ) : (
        <>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            <CustomTypography
              variant="h3"
              component="h1"
              sx={{
                marginBottom: 1,
                fontSize: { md: "2.2rem", xs: "1.5rem" },
                lineHeight: 1.3,
              }}
            >
              Select a computer to view its specifications.
            </CustomTypography>
            <CustomTypography
              variant="subtitle1"
              sx={{
                marginBottom: 1,
                fontSize: { md: "1.6rem", xs: "1rem" },
                color: "gray",
                lineHeight: 1.3,
              }}
            >
              Below are the devices with the latest available data. Just click
              on the desired card to see the details.
            </CustomTypography>
          </Box>
          <CustomGrid>
            {compInfo?.map((el) => (
              <CompCard el={el} handleClick={handleClick} />
            ))}
            {!!compInfo?.length && compInfo.length % 2 !== 0 && (
              <Box sx={{ visibility: "hidden" }} />
            )}
          </CustomGrid>
        </>
      )}
    </PageBox>
  );
};

export default CardsComp;
