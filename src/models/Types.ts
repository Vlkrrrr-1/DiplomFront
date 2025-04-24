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
