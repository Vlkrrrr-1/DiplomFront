import api from "../http";
import { IUser } from "../models/Types";

export default class UserService {
  static async getUsers(): Promise<ReturnType<typeof api.get<IUser[]>>> {
    return api.get<IUser[]>("/users");
  }
}
