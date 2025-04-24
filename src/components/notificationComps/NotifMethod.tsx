import React, { useContext, useState } from "react";
import {
  Box,
  Checkbox,
  Typography,
  Collapse,
  FormGroup,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { observer } from "mobx-react-lite";
import NotifPanelBox from "../UI/boxes/NotifPanelBox";
import { useNotificationStore } from "@/store/useNotificationsStore";
import { useUserStore } from "@/store/useUserStore";

const NotifMethod = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const notificationStore = useNotificationStore();
  const user = useUserStore((state) => state.user);

  const confirmTelegram = async () => {
    if (!user) {
      console.warn("User is not authorized!");
      return;
    }
    notificationStore.setTelegramOn(!notificationStore.telegramOn);
    if (notificationStore.telegramOn) {
      window.open(`https://t.me/NodeSysMon_bot`);
    }
  };

  return (
    <NotifPanelBox sx={{ borderLeft: "6px solid #4A90E2" }}>
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
          Selecting a notification method
        </Typography>
        <IconButton
          onClick={() => setIsVisible((prev) => !prev)}
          sx={{
            transform: isVisible ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            color: "#4A90E2",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      <Collapse in={isVisible}>
        <FormGroup sx={{ gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1E1E1E",
              padding: "8px 12px",
              borderRadius: "10px",
              border: "1px solid #3A3A3A",
            }}
          >
            <Checkbox
              checked={notificationStore.telegramOn}
              onChange={() => confirmTelegram()}
              sx={{
                color: "#4A90E2",
                "&.Mui-checked": {
                  color: "#4A90E2",
                },
              }}
            />
            <Typography sx={{ fontSize: "15px", color: "#CCCCCC" }}>
              Telegram
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1E1E1E",
              padding: "8px 12px",
              borderRadius: "10px",
              border: "1px solid #3A3A3A",
            }}
          >
            <Checkbox
              checked={notificationStore.emailOn}
              onChange={() =>
                notificationStore.setEmailOn(!notificationStore.emailOn)
              }
              sx={{
                color: "#4A90E2",
                "&.Mui-checked": {
                  color: "#4A90E2",
                },
              }}
            />
            <Typography sx={{ fontSize: "15px", color: "#CCCCCC" }}>
              Email
            </Typography>
          </Box>
        </FormGroup>
      </Collapse>
    </NotifPanelBox>
  );
};

export default observer(NotifMethod);
