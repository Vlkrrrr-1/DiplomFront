import React from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import PageBox from "../UI/boxes/PageBox";
import ChartTable from "../charts/ChartTable";
import { useNavigate } from "react-router";

const HistoryComp = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ position: "relative", height: { md: "93vh" }, overflow: "hidden" }}
    >
      <PageBox>
        <Grid container rowSpacing={10} sx={{ mt: "20px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ChartTable
              title="CPU Performance Analytics"
              imgPath="/images/resourceLogo/CpuLogo.png"
              imgAlt="CPU Icon"
              label="General CPU analytics"
              buttonAction={() => {
                navigate("/chartCPU");
              }}
              buttonLabel="Get analytics"
              bgColor="rgb(140, 0, 255)"
              bgColorOpacity="rgba(140, 0, 255, 0.5)"
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ChartTable
              title="Disk Performance Analytics"
              imgPath="/images/resourceLogo/DiskLogo.png"
              imgAlt="Disk icon"
              label="General Disk analytics"
              buttonAction={() => {
                navigate("/chartDisk");
              }}
              buttonLabel="Get analytics"
              bgColor="rgb(0, 255, 30)"
              bgColorOpacity="rgb(0, 255, 30, 0.5)"
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ChartTable
              title="Temperature Performance Analytics"
              imgPath="/images/resourceLogo/TempLogo.png"
              imgAlt="Temperature icon"
              label="General Temperature analytics"
              buttonAction={() => {
                navigate("/chartTemperature");
              }}
              buttonLabel="Get analytics"
              bgColor="rgb(255, 0, 0)"
              bgColorOpacity="rgb(255, 0, 0, 0.5)"
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ChartTable
              title="Temperature Performance Analytics"
              imgPath="/images/resourceLogo/RamLogo.png"
              imgAlt="Ram icon"
              label="General Ram analytics"
              buttonAction={() => {
                navigate("/chartRam");
              }}
              buttonLabel="Get analytics"
              bgColor="rgb(255, 196, 0)"
              bgColorOpacity="rgb(255, 196, 0, 0.5)"
            />
          </Grid>
        </Grid>
      </PageBox>
    </Box>
  );
};

export default HistoryComp;
