import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import CustomButton from "../UI/buttons/CustomButton";
import PageBox from "../UI/boxes/PageBox";
import CustomContainer from "../UI/containers/CustomContainer";
import CustomTypography from "../UI/text/CustomTypography";

const MainComp = () => {
  const navigate = useNavigate();

  const paragraphs = [
    "With our program you can track your computer data, record it in history and much more.",
    "To see information about your PC, you must have a data tracking program running",
  ];

  return (
    <Box sx={{ position: "relative", height: "93vh", overflow: "hidden" }}>
      <PageBox>
        <CustomContainer>
          <Box sx={{ textAlign: "center", marginBottom: 3, flex: 1 }}>
            <CustomTypography
              variant="h3"
              component="h1"
              sx={{
                marginBottom: 2,
                fontSize: { md: "4rem", xs: "2rem" },
                lineHeight: 1.2,
              }}
            >
              Welcome to Node System Monitoring!
            </CustomTypography>
            {paragraphs.map((text, i) => (
              <CustomTypography
                key={i}
                variant="body1"
                sx={{
                  color: "#d3d3d3",
                  fontSize: { md: "1.5rem", xs: "0.8rem" },
                  lineHeight: 1.6,
                }}
              >
                {text}
              </CustomTypography>
            ))}
          </Box>

          <CustomButton onClick={() => navigate("/cards")} />
        </CustomContainer>
      </PageBox>
    </Box>
  );
};

export default observer(MainComp);
