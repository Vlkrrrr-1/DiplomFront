import { create } from "zustand";

type UIState = {
  selectedPC: string;
  regInfo: string;
  logInfo: string;
  setRegInfo: (message: string) => void;
  setLogInfo: (message: string) => void;
  setSelectedPC: (device: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  regInfo: "",
  logInfo: "Don't have an account? Register",
  selectedPC: "You have not selected device for analysis.",
  setRegInfo: (message: string) => {
    set({ regInfo: message });
  },
  setLogInfo: (message: string) => {
    set({ logInfo: message });
  },
  setSelectedPC: (device: string) => {
    set({ selectedPC: device });
  },
}));
