import * as React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardChartTable from "../UI/cards/CardChartTable";
import ChartTableBox from "../UI/boxes/ChartTableBox";
import СardMediaChartTable from "../UI/cards/СardMediaChartTable";
import CardButton from "../UI/buttons/CardButton";
import CustomTypography from "../UI/text/CustomTypography";
import CustomCardContent from "../UI/cards/CustomCardContent";

interface ChartTableProps {
  title: string;
  imgPath: string;
  imgAlt: string;
  label: string;
  buttonAction?: () => void;
  buttonLabel: string;
  bgColor: string;
  bgColorOpacity: string;
}

const ChartTable: React.FC<ChartTableProps> = (props) => {
  return (
    <ChartTableBox>
      <CustomTypography
        variant="h4"
        sx={{
          color: "#333",
          marginBottom: "30px",
        }}
      >
        {props.title}
      </CustomTypography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardChartTable sx={{ background: props.bgColor }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
              marginTop: { xs: 4 },
              width: "100%",
              background: props.bgColorOpacity,
            }}
          >
            <СardMediaChartTable
              component="img"
              sx={{ width: { md: "25%", xs: "30%" } }}
              src={props.imgPath}
              alt={props.imgAlt}
            />
            <CustomCardContent
              sx={{
                color: "#fff",
                justifyItems: "center",
                width: "100%",
              }}
            >
              <CustomTypography
                variant="h5"
                sx={{
                  marginBottom: "16px",
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              >
                {props.label}
              </CustomTypography>
              <CardButton variant="contained" onClick={props.buttonAction}>
                {props.buttonLabel}
              </CardButton>
            </CustomCardContent>
          </Card>
        </CardChartTable>
      </Box>
    </ChartTableBox>
  );
};

export default ChartTable;
