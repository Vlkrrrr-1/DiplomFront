import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CPUCard from "./resource/CPUCard";
import DiskCard from "./resource/DiskCard";
import RamCard from "./resource/RamCard";
import TemparatureCard from "./resource/TemperatureCard";
import NetworkCard from "./resource/NetworkCard";
import { CompInfo } from "../../models/Types";
import { Box } from "@mui/material";
import CustomTypography from "../UI/text/CustomTypography";
import CustomButton from "../UI/buttons/CustomButton";

interface AllCardsProps {
  compInfo: CompInfo | undefined;
  setIsShowCards: React.Dispatch<React.SetStateAction<boolean>>;
}

const Item = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(145deg, #2c2c3e, #1e1e2f)",
  color: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  width: "100%",
  maxWidth: 360,
}));

const AllCards: React.FC<AllCardsProps> = ({ compInfo, setIsShowCards }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const cardData = [
    <CPUCard cpuLoad={compInfo?.cpuLoad} />,
    <DiskCard disk={compInfo?.disk} />,
    <RamCard ramLoad={compInfo?.ramLoad} />,
    <NetworkCard />,
    <TemparatureCard cpuTemperature={compInfo?.cpuTemperature} />,
  ];

  return isLoading ? (
    <Box
      component="img"
      src="/images/logo/1.png"
      alt="Logo"
      sx={{
        height: "150px",
        animation: "spin 1s linear 3",
        "@keyframes spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      }}
    />
  ) : (
    <Box sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          mb: 6,
          px: 2,
        }}
      >
        <CustomTypography>
          Latest data:
          <CustomTypography>
            {compInfo?.date
              ? new Date(compInfo.date).toLocaleString("ua-UA", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "no data"}
          </CustomTypography>
          {!compInfo?.date && (
            <>
              <br />
              <CustomTypography>
                If your data is not displayed, it means that the program did not
                have time to read your PC data, or you incorrectly specified the
                Email in the application and it differs from the Email during
                registration or login.
              </CustomTypography>
            </>
          )}
        </CustomTypography>
        <CustomButton onClick={() => setIsShowCards(false)}>Back</CustomButton>
        <CustomTypography sx={{ mt: 5 }}>
          Card network displays the current internet speed of your computer.
        </CustomTypography>
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Item>{card}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllCards;
