import React, { useContext, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import NotifMethod from "../notificationComps/NotifMethod";
import TrigConditions from "../notificationComps/TrigConditions";
import NotifFrequency from "../notificationComps/NotifFrequency";
import NotifActiveTime from "../notificationComps/NotifActiveTime";
import { Context } from "../..";
import NotificationService from "../../services/NotificationService";

const NotificationComp = () => {
  const { store } = useContext(Context);
  const { notificationStore } = useContext(Context);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNotifications = async () => {
    const response = await NotificationService.getNotifToUser();
    if (response?.data) notificationStore.setStoreFromSettings(response.data);
    setIsLoading(false);
  };
  fetchNotifications();
  const sendNotifications = () => {
    const notificationOptions = {
      emailContact: store.user.email,
      activeTime: notificationStore.activeTime,
      startTime: notificationStore.startTime,
      endTime: notificationStore.endTime,
      freqOption: notificationStore.freqOption,
      freqOptionTimer: notificationStore.freqOptionTimer,
      emailOn: notificationStore.emailOn,
      telegramOn: notificationStore.telegramOn,
      tempCond: notificationStore.tempCond,
      isTempCondOn: notificationStore.isTempCondOn,
      cpuLoadCond: notificationStore.cpuLoadCond,
      isCpuLoadCondOn: notificationStore.isCpuLoadCondOn,
      ramLoadCond: notificationStore.ramLoadCond,
      isRamLoadCondOn: notificationStore.isRamLoadCondOn,
      diskSpaceCond: notificationStore.diskSpaceCond,
      isDiskSpaceCondOn: notificationStore.isDiskSpaceCondOn,
    };
    NotificationService.sendNotifToUser(notificationOptions);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, rgb(21, 21, 33) 100%, rgb(74, 74, 110) 0%)",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            width: { md: "80%", xs: "90%" },
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "#1E1E1E",
            borderRadius: "16px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "white",
              fontSize: { xs: "1rem" },
            }}
          >
            Notifications for device: {store.selectedPC}
          </Typography>
          <NotifMethod />
          <TrigConditions />
          <NotifFrequency />
          <NotifActiveTime />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { md: "100px", xs: "20px" },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(74, 74, 110)",
                color: "#fff",
                fontWeight: 600,
                width: { xs: "180px", md: "300px" },
                fontSize: { xs: "0.75rem", md: "1rem" },
                textTransform: "none",
                padding: { xs: "6px 12px", md: "10px 20px" },
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgb(62, 62, 126)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={() => {
                sendNotifications();
              }}
            >
              Save settings
            </Button>
            <Button
              variant="contained"
              onClick={() => notificationStore.resetStore()}
              sx={{
                backgroundColor: "rgb(74, 74, 110)",
                color: "#fff",
                fontWeight: 600,
                width: { xs: "180px", md: "300px" },
                fontSize: { xs: "0.75rem", md: "1rem" },
                textTransform: "none",
                padding: { xs: "6px 12px", md: "10px 20px" },
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgb(62, 62, 126)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Reset to default
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NotificationComp;
