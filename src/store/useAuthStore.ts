import { API_URL } from "@/http";
import { AuthResponse } from "@/models/response/AuthResponse";
import { ErrorResponse, IUser } from "@/models/Types";
import AuthService from "@/services/AuthService";
import axios, { AxiosError } from "axios";
import { create } from "zustand";
import { useUserStore } from "./useUserStore";
import { useUIStore } from "./useUIStore";

type AuthState = {
  isAuth: boolean;
  setAuth: (auth: boolean) => void;
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
  logout: () => void;
  checkAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  setAuth: (auth) => {
    set({ isAuth: auth });
    localStorage.setItem("isAuth", JSON.stringify(auth));
  },
  login: async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      useAuthStore.getState().setAuth(true);
      useUserStore.getState().setUser(response.data.user);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        useUIStore
          .getState()
          .setLogInfo(axiosError.response?.data?.message as string);
      } else {
        console.log("An error has occurred");
      }
    }
  },
  registration: async (email: string, password: string) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      useAuthStore.getState().setAuth(true);
      useUserStore.getState().setUser(response.data.user);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        useUIStore
          .getState()
          .setLogInfo(axiosError.response?.data?.message as string);
      } else {
        console.log("An error has occurred");
      }
    }
  },
  logout: async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      useAuthStore.getState().setAuth(false);
      useUserStore.getState().setUser({} as IUser);
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  },
  checkAuth: async () => {
    try {
      const response = await axios.get<AuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", response.data.accessToken);
      useAuthStore.getState().setAuth(true);
      useUserStore.getState().setUser(response.data.user);
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  },
}));
