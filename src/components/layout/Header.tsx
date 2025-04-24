import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { Context } from "../..";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";
import HeaderButton from "../UI/buttons/HeaderButton";

interface HeaderProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgb(30, 30, 47)",
        color: "rgb(255, 255, 255)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Toolbar sx={{ position: "relative" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                color: "rgb(166, 166, 246)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: "bold",
            letterSpacing: "1px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
            fontSize: { md: "1.5rem", xs: "1rem" },
          }}
        >
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              marginRight: { md: 0, xs: "150px" },
              fontWeight: "bold",
              fontSize: { md: "1.3rem" },
            }}
          >
            NodeSysMon
          </Typography>
        </Typography>

        <Box sx={{ display: "flex", gap: 1, marginLeft: "auto" }}>
          {store.user.isActivated ? (
            <>
              <Typography variant="body1" sx={{ alignSelf: "center" }}>
                Welcome!
              </Typography>
              <HeaderButton
                variant="contained"
                onClick={() => store.logout()}
                sx={{
                  backgroundColor: "rgb(211, 47, 47)",
                  "&:hover": {
                    backgroundColor: "rgb(183, 28, 28)",
                  },
                }}
              >
                Log Out
              </HeaderButton>
            </>
          ) : (
            <>
              <HeaderButton
                onClick={() => navigate("/login")}
                sx={{
                  backgroundColor: "rgb(41, 121, 255)",
                  "&:hover": {
                    backgroundColor: "rgb(21, 101, 192)",
                  },
                }}
              >
                Login
              </HeaderButton>
              <HeaderButton onClick={() => navigate("/registration")}>
                Register
              </HeaderButton>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default observer(Header);
