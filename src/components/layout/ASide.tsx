import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import { Context } from "../..";
import SideBox from "../UI/boxes/SideBox";
import CustomBox from "../UI/boxes/CustomBox";
import CustomListItemButton from "../UI/lists/CustomListItemButton";

interface ASideProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  isOpen: boolean;
}

const ASide: React.FC<ASideProps> = ({ toggleDrawer, isOpen }) => {
  const { store } = React.useContext(Context);
  const items = [
    { text: "Main", icon: <InboxIcon />, link: "/cards" },
    { text: "History", icon: <HistoryIcon />, link: "/history" },
    {
      text: "Notification control panel",
      icon: <SettingsIcon />,
      link: "/settings",
    },
  ];

  const list = (
    <SideBox toggleDrawer={toggleDrawer}>
      <CustomBox>🖥️ NodeSysMon</CustomBox>
      <Divider sx={{ backgroundColor: "#444" }} />
      <CustomBox
        sx={{
          fontSize: { xs: "1rem" },
          padding: "20px",
        }}
      >
        Selected PC: {store.selectedPC}
      </CustomBox>
      <Divider sx={{ backgroundColor: "#444" }} />
      <List>
        {items.map(({ text, icon, link }) => (
          <ListItem key={text} disablePadding>
            <CustomListItemButton to={link}>
              <ListItemIcon sx={{ color: "#bbb", minWidth: 40 }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  sx: { fontWeight: 500, fontSize: "0.95rem" },
                }}
              />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>

      <CustomBox
        sx={{
          padding: 2,
          fontSize: "0.75rem",
          color: "#bbb",
        }}
      >
        © 2025 NodeSysMon
      </CustomBox>
    </SideBox>
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      {list}
    </Drawer>
  );
};

export default ASide;
