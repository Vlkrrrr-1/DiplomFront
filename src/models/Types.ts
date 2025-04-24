import { AxiosError } from "axios";

export interface IUser {
  email: string;
  isActivated: boolean;
  id: number;
}

export interface ErrorResponse extends AxiosError {
  message: string;
}

export interface CompInfo {
  deviceName: string;
  cpuLoad: number;
  cpuTemperature: number;
  battery: number;
  ramLoad: {
    totalMemory: number;
    usedMemory: number;
    remainingMemory: number;
  };
  disk: {
    totalMemory: number;
    usedMemory: number;
    remainingMemory: number;
  }[];
  date: Date;
}

export interface CompInfoDisk {
  totalMemory: number;
  usedMemory: number;
  remainingMemory: number;
}

export interface UserNotifications {
  _id?: string;
  user?: string;
  activeTime: string;
  startTime: string;
  endTime: string;
  freqOption: string;
  freqOptionTimer: number;
  emailOn: boolean;
  telegramOn: boolean;
  tempCond: number;
  isTempCondOn: boolean;
  cpuLoadCond: number;
  isCpuLoadCondOn: boolean;
  ramLoadCond: number;
  isRamLoadCondOn: boolean;
  diskSpaceCond: number;
  isDiskSpaceCondOn: boolean;
}

export interface NotificationState {
  activeTime: string;
  startTime: string;
  endTime: string;
  freqOption: string;
  freqOptionTimer: number;
  emailOn: boolean;
  telegramOn: boolean;
  tempCond: number;
  isTempCondOn: boolean;
  cpuLoadCond: number;
  isCpuLoadCondOn: boolean;
  ramLoadCond: number;
  isRamLoadCondOn: boolean;
  diskSpaceCond: number;
  isDiskSpaceCondOn: boolean;

  setActiveTime: (activeTime: string) => void;
  setStartTime: (startTime: string) => void;
  setEndTime: (endTime: string) => void;
  setFreqOption: (freqOption: string) => void;
  setFreqOptionTimer: (freqOptionTimer: number) => void;
  setEmailOn: (emailOn: boolean) => void;
  setTelegramOn: (telegramOn: boolean) => void;
  setTempCond: (tempCond: number) => void;
  setIsTempCondOn: (isTempCondOn: boolean) => void;
  setCpuLoadCond: (cpuLoadCond: number) => void;
  setIsCpuLoadCondOn: (isCpuLoadCondOn: boolean) => void;
  setRamLoadCond: (ramLoadCond: number) => void;
  setIsRamLoadCondOn: (isRamLoadCondOn: boolean) => void;
  setDiskSpaceCond: (diskSpaceCond: number) => void;
  setIsDiskSpaceCondOn: (isDiskSpaceCondOn: boolean) => void;
  resetStore: () => void;
  setStoreFromSettings: (notifications: UserNotifications) => void;
}
