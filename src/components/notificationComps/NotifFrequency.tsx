import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { observer } from "mobx-react-lite";
import NotifPanelBox from "../UI/boxes/NotifPanelBox";
import { useNotificationStore } from "@/store/useNotificationsStore";

const NotifFrequency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const notificationStore = useNotificationStore();

  return (
    <NotifPanelBox sx={{ borderLeft: "6px solid #50E3C2" }}>
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
          Notification Frequency
        </Typography>
        <IconButton
          onClick={() => setIsVisible((prev) => !prev)}
          sx={{
            transform: isVisible ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            color: "#50E3C2",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      <Collapse in={isVisible}>
        <RadioGroup
          sx={{ gap: 1 }}
          value={notificationStore.freqOption}
          onChange={(e) => notificationStore.setFreqOption(e.target.value)}
        >
          {[
            { value: "every-time", label: "Every time" },
            { value: "once-per-hour", label: "Not more than once per hour" },
            { value: "once-per-day", label: "Only once per day" },
          ].map((option) => (
            <Box
              key={option.value}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1E1E1E",
                padding: "8px 12px",
                borderRadius: "10px",
                border: "1px solid #3A3A3A",
              }}
            >
              <FormControlLabel
                value={option.value}
                control={
                  <Radio
                    sx={{
                      color: "#50E3C2",
                      "&.Mui-checked": {
                        color: "#50E3C2",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "15px", color: "#CCCCCC" }}>
                    {option.label}
                  </Typography>
                }
              />
            </Box>
          ))}
        </RadioGroup>
      </Collapse>
    </NotifPanelBox>
  );
};

export default observer(NotifFrequency);
