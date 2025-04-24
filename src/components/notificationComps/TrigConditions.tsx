import React, { useContext, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import TrigConditionsForm from "./TrigConditionsForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { observer } from "mobx-react-lite";
import NotifPanelBox from "../UI/boxes/NotifPanelBox";
import { useNotificationStore } from "@/store/useNotificationsStore";

const TrigConditions = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const notificationStore = useNotificationStore();

  return (
    <NotifPanelBox sx={{ borderLeft: "6px solid rgb(155, 226, 74)" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { md: "17px", xs: "12px" },
            color: "#FFFFFF",
          }}
        >
          Triggering conditions (setting thresholds)
        </Typography>
        <ExpandMoreIcon
          sx={{
            cursor: "pointer",
            transform: isVisible ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          onClick={() => setIsVisible((prev) => !prev)}
        />
      </Box>
      <Collapse in={isVisible}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <TrigConditionsForm
            name="CPU temperature"
            value={notificationStore.tempCond}
            isValueOn={notificationStore.isTempCondOn}
            setValue={(val) => notificationStore.setTempCond(val)}
            setIsValueOn={(val) => notificationStore.setIsTempCondOn(val)}
          />
          <TrigConditionsForm
            name="CPU load"
            value={notificationStore.cpuLoadCond}
            isValueOn={notificationStore.isCpuLoadCondOn}
            setValue={(val) => notificationStore.setCpuLoadCond(val)}
            setIsValueOn={(val) => notificationStore.setIsCpuLoadCondOn(val)}
          />
          <TrigConditionsForm
            name="RAM load"
            value={notificationStore.ramLoadCond}
            isValueOn={notificationStore.isRamLoadCondOn}
            setValue={(val) => notificationStore.setRamLoadCond(val)}
            setIsValueOn={(val) => notificationStore.setIsRamLoadCondOn(val)}
          />
          <TrigConditionsForm
            name="Disk space"
            value={notificationStore.diskSpaceCond}
            isValueOn={notificationStore.isDiskSpaceCondOn}
            setValue={(val) => notificationStore.setDiskSpaceCond(val)}
            setIsValueOn={(val) => notificationStore.setIsDiskSpaceCondOn(val)}
          />
        </Box>
      </Collapse>
    </NotifPanelBox>
  );
};

export default observer(TrigConditions);
