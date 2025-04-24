import * as React from "react";
import Card from "@mui/material/Card";
import CardButton from "../../UI/buttons/CardButton";
import CustomCard from "../../UI/cards/CustomCard";
import LinearProgressForCard from "../../UI/progressBar/LinearProgressForCard";
import CustomTypography from "../../UI/text/CustomTypography";
import СardMediaChartTable from "../../UI/cards/СardMediaChartTable";
import CustomCardContent from "../../UI/cards/CustomCardContent";

interface ResCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  usageValue: number | undefined;
  usageLabel: string;
  buttonText: string;
  getColor: (value: number | undefined) => string;
  buttonAction?: () => void;
}

const ResCard: React.FC<ResCardProps> = (props) => {
  const cardColor = props.getColor(props.usageValue);

  return (
    <CustomCard
      sx={{
        background: cardColor,
      }}
    >
      <Card sx={{ background: cardColor }}>
        <СardMediaChartTable
          component="img"
          height="120"
          src={props.imageSrc}
          alt={props.imageAlt}
          sx={{
            mt: "20px",
            display: "block",
            margin: "0 auto",
          }}
        />
        <CustomCardContent>
          <CustomTypography gutterBottom variant="h5" component="div">
            {props.title}
          </CustomTypography>
          <CustomTypography>{props.usageLabel}</CustomTypography>
          <CustomTypography>{props.usageValue ?? "—"}%</CustomTypography>
          <LinearProgressForCard
            variant="determinate"
            value={props.usageValue ?? 0}
          />
        </CustomCardContent>
      </Card>
      <CardButton variant="contained" onClick={props.buttonAction}>
        {props.buttonText}
      </CardButton>
    </CustomCard>
  );
};

export default ResCard;
