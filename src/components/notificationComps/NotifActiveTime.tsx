import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import NotifPanelBox from "../UI/boxes/NotifPanelBox";

const NotifActiveTime = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { notificationStore } = useContext(Context);

  return (
    <NotifPanelBox sx={{ borderLeft: "6px solid #BD10E0" }}>
      <Box sx={headerStyles}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { md: "17px", xs: "12px" },
            color: "#FFFFFF",
          }}
        >
          Notification activity time
        </Typography>
        <IconButton
          onClick={() => setIsVisible((prev) => !prev)}
          sx={{
            ...iconStyles,
            transform: isVisible ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      <Collapse in={isVisible}>
        <RadioGroup
          sx={{ gap: 1 }}
          value={notificationStore.activeTime}
          onChange={(e) => notificationStore.setActiveTime(e.target.value)}
        >
          <Box sx={radioBoxStyles}>
            <FormControlLabel
              value="always-on"
              control={<Radio sx={radioStyles} />}
              label={<Typography sx={labelTextStyles}>Always On</Typography>}
            />
          </Box>

          <Box sx={workingHoursBoxStyles}>
            <FormControlLabel
              value="working-hours"
              control={<Radio sx={radioStyles} />}
              label={
                <Typography sx={labelTextStyles}>
                  Only during working hours
                </Typography>
              }
            />
            <TextField
              label="Start"
              type="time"
              value={notificationStore.startTime}
              onChange={(e) => notificationStore.setStartTime(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={timeFieldStyles}
            />
            <TextField
              label="End"
              type="time"
              value={notificationStore.endTime}
              onChange={(e) => notificationStore.setEndTime(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={timeFieldStyles}
            />
          </Box>
        </RadioGroup>
      </Collapse>
    </NotifPanelBox>
  );
};

const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 1,
};

const titleStyles = {
  fontWeight: 600,
  fontSize: "17px",
  color: "#FFFFFF",
};

const iconStyles = {
  transition: "transform 0.3s ease",
  color: "#BD10E0",
};

const radioBoxStyles = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#1E1E1E",
  padding: "8px 12px",
  borderRadius: "10px",
  border: "1px solid #3A3A3A",
};

const workingHoursBoxStyles = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: { xs: "flex-start", md: "center" },
  gap: 2,
  backgroundColor: "#1E1E1E",
  padding: "8px 12px",
  borderRadius: "10px",
  border: "1px solid #3A3A3A",
  width: "100%",
};

const radioStyles = {
  color: "#BD10E0",
  "&.Mui-checked": {
    color: "#BD10E0",
  },
};

const labelTextStyles = {
  fontSize: "15px",
  color: "#CCCCCC",
};

const timeFieldStyles = {
  width: "120px",
  input: {
    color: "#E0E0E0",
    backgroundColor: "#2B2B2B",
    borderRadius: "6px",
  },
  label: { color: "#CCCCCC" },
};

export default observer(NotifActiveTime);
