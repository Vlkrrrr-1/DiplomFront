import { API_URL } from "@/http";
import { IUser } from "@/models/Types";
import axios from "axios";
import { create } from "zustand";

type UserState = {
  user: IUser;
  setUser: (user: IUser) => void;
  getUserInfo: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: {} as IUser,
  setUser: (user) => {
    set({ user: user });
  },
  getUserInfo: async () => {
    try {
      const response = await axios.get<IUser>(`${API_URL}/auth/userInfo`, {
        withCredentials: true,
      });
      useUserStore.getState().setUser(response.data);
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  },
}));
