import { makeAutoObservable } from "mobx";
import { IUser } from "../models/Types";
import AuthService from "../services/AuthService";
import { API_URL } from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "../models/Types";

export default class Store {
  constructor() {
    makeAutoObservable(this);
    this.loadAuthState();
  }

  user = {} as IUser;
  isAuth: boolean = false;
  regInfo: string = "";
  logInfo: string = "Don't have an account? Register";
  selectedPC: string = "You have not selected device for analysis.";

  setSelectedPC(selectedPC: string) {
    this.selectedPC = selectedPC;
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }

  setUser(user: IUser) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  setRegInfo(message: string) {
    this.regInfo = message;
  }

  setLogInfo(message: string) {
    this.logInfo = message;
  }

  loadAuthState() {
    const savedAuth = localStorage.getItem("isAuth");
    const savedUser = localStorage.getItem("user");

    if (savedAuth) this.isAuth = JSON.parse(savedAuth);
    if (savedUser) this.user = JSON.parse(savedUser);
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setUser(response.data.user);
      this.setAuth(true);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        this.setLogInfo(axiosError.response?.data?.message as string);
      } else {
        console.log("An error has occurred");
      }
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setUser(response.data.user);
      this.setAuth(true);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        this.setRegInfo(axiosError.response?.data?.message as string);
      } else {
        console.log("An error has occurred");
      }
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  }

  async getUserInfo() {
    try {
      const response = await axios.get<IUser>(`${API_URL}/auth/userInfo`, {
        withCredentials: true,
      });
      this.user = response.data;
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  }
}
