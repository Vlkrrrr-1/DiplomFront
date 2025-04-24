import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import LoginButton from "../UI/buttons/LoginButton";
import PageBox from "../UI/boxes/PageBox";
import CustomInput from "../UI/input/CustomInput";
import { useAuthStore } from "@/store/useAuthStore";
import { useUIStore } from "@/store/useUIStore";
import { useUserStore } from "@/store/useUserStore";

const RegComp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const uiStore = useUIStore();
  const userStore = useUserStore();

  useEffect(() => {
    const fetchUserInfo = async () => {
      await userStore.getUserInfo();
      if (userStore.user.isActivated) {
        authStore.setAuth(true);
        uiStore.setRegInfo("You have successfully activated your email!");
        setTimeout(() => {
          uiStore.setRegInfo("");
        }, 5000);
      }
    };
    fetchUserInfo();
  }, [navigate, authStore]);

  const handleRegistration = async () => {
    await authStore.registration(email, password);
    setPassword("");
    if (localStorage.getItem("token") && !userStore.user.isActivated)
      uiStore.setRegInfo("You need to confirm your email!");
  };

  return (
    <Box sx={{ position: "relative", height: "93vh", overflow: "hidden" }}>
      <PageBox>
        <Box sx={formContainerStyles}>
          <Box sx={titleStyles}>Registration</Box>
          <Box component="form" sx={formStyles}>
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
              <LoginButton onClick={handleRegistration}>Register</LoginButton>
              <Box sx={linkWrapperStyles}>
                <a href="https://mail.google.com" style={linkStyles}>
                  {uiStore.regInfo}
                </a>
              </Box>
            </Box>
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

const formStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const linkWrapperStyles = {
  fontSize: "20px",
  color: "#007BFF",
  cursor: "pointer",
  textDecoration: "underline",
  mt: "15px",
  textAlign: "center",
};

const linkStyles: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
};

export default observer(RegComp);
