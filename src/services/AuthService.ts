import { AuthResponse } from "../models/response/AuthResponse";
import api from "../http";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<ReturnType<typeof api.post<AuthResponse>>> {
    return api.post<AuthResponse>("/auth/login", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<ReturnType<typeof api.post<AuthResponse>>> {
    return api.post<AuthResponse>("/auth/registration", { email, password });
  }

  static async logout(): Promise<void> {
    api.post("/auth/logout");
  }
}
