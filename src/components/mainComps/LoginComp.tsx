import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import LoginButton from "../UI/buttons/LoginButton";
import PageBox from "../UI/boxes/PageBox";
import CustomInput from "../UI/input/CustomInput";
import { useAuthStore } from "@/store/useAuthStore";
import { useUIStore } from "@/store/useUIStore";
import { useUserStore } from "@/store/useUserStore";

const LoginComp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const uiStore = useUIStore();
  const userStore = useUserStore();

  const handleLogin = async () => {
    await authStore.login(email, password);
    if (!authStore.isAuth) {
      uiStore.setLogInfo("Check your login and password");
      setEmail("");
      setPassword("");
    } else {
      await authStore.login(email, password);
      if (!userStore.user.isActivated) {
        uiStore.setLogInfo("Firstly you must confirm your email.");
        setEmail("");
        setPassword("");
      } else {
        uiStore.setLogInfo("You have successfully logged in!");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
          uiStore.setLogInfo("Don't have an account? Register");
        }, 2000);
      }
    }
  };

  return (
    <Box sx={{ position: "relative", height: "93vh", overflow: "hidden" }}>
      <PageBox>
        <Box sx={formContainerStyles}>
          <Box sx={titleStyles}>Authorization</Box>
          <form style={formStyles}>
            <Box sx={{ width: "100%" }}>
              <CustomInput
                type="text"
                placeholder="Email"
                autoComplete="current-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <CustomInput
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <LoginButton onClick={handleLogin}>Login</LoginButton>
            </Box>
          </form>
          <Box sx={linkBoxStyles}>
            <Link style={linkStyles} to={"/registration"}>
              {uiStore.logInfo}
            </Link>
          </Box>
        </Box>
      </PageBox>
    </Box>
  );
};

const formContainerStyles = {
  background: "#1E1E2F",
  padding: "30px",
  width: { md: "100%", xs: "90%" },
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

const titleStyles = {
  fontWeight: "bold",
  color: "#ffffff",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.04)",
  fontSize: "34px",
  padding: "10px",
};

const formStyles: React.CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const linkBoxStyles = {
  fontSize: "24px",
  color: "#ffffff",
  cursor: "pointer",
  textDecoration: "underline",
  textAlign: "center",
};

const linkStyles = {
  color: "white",
  textDecoration: "none",
};

export default observer(LoginComp);
