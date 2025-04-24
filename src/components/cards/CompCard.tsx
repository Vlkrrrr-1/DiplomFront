import { Card } from "@mui/material";
import React from "react";
import { CompInfo } from "../../models/Types";
import CardButton from "../UI/buttons/CardButton";
import CustomTypography from "../UI/text/CustomTypography";
import CustomCompCard from "../UI/cards/CustomCompCard";
import CardMediaChartTable from "../UI/cards/СardMediaChartTable";
import CustomCardContent from "../UI/cards/CustomCardContent";

interface CompCardProps {
  el: CompInfo;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CompCard: React.FC<CompCardProps> = ({ el, handleClick }) => {
  return (
    <CustomCompCard>
      <Card sx={{ background: "transparent", boxShadow: "none" }}>
        <CardMediaChartTable
          component="img"
          height="100"
          src="/images/resourceLogo/CompLogo.png"
          alt="Comp icon"
          sx={{
            mt: "10px",
            borderRadius: "12px",
            padding: "8px",
            width: 80,
            height: 80,
            mx: "auto",
            backgroundColor: "#2b2b3b",
          }}
        />
        <CustomCardContent
          sx={{
            padding: "16px 8px 8px 8px",
          }}
        >
          <CustomTypography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#e0e0e0" }}
          >
            {el.deviceName}
          </CustomTypography>
        </CustomCardContent>
      </Card>
      <CardButton
        variant="contained"
        value={el.deviceName}
        onClick={handleClick}
      >
        View information
      </CardButton>
    </CustomCompCard>
  );
};

export default CompCard;
