import { UserNotifications } from "../models/Types";
import api from "../http";

export default class NotificationService {
  static async sendNotifToUser(
    notifications: UserNotifications
  ): Promise<ReturnType<typeof api.post<UserNotifications>>> {
    return api.post<UserNotifications>(
      "/notifications/setNotifToUser",
      notifications,
      { withCredentials: true }
    );
  }

  static async getNotifToUser(): Promise<
    ReturnType<typeof api.post<UserNotifications>>
  > {
    return api.get<UserNotifications>("/notifications/getNotifToUser", {
      withCredentials: true,
    });
  }
}
