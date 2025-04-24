import { makeAutoObservable } from "mobx";
import { UserNotifications } from "../models/Types";

export default class NotificationStore {
  constructor() {
    makeAutoObservable(this);
  }

  activeTime: string = "always-on";
  startTime: string = "08:00";
  endTime: string = "20:00";
  freqOption: string = "every-time";
  freqOptionTimer: number = 0;
  emailOn: boolean = false;
  telegramOn: boolean = false;
  tempCond: number = 80;
  isTempCondOn: boolean = true;
  cpuLoadCond: number = 80;
  isCpuLoadCondOn: boolean = true;
  ramLoadCond: number = 80;
  isRamLoadCondOn: boolean = true;
  diskSpaceCond: number = 80;
  isDiskSpaceCondOn: boolean = true;

  setActiveTime(activeTime: string) {
    this.activeTime = activeTime;
  }

  setStartTime(startTime: string) {
    this.startTime = startTime;
  }

  setEndTime(endTime: string) {
    this.endTime = endTime;
  }

  setFreqOption(freqOption: string) {
    this.freqOption = freqOption;
  }

  setFreqOptionTimer(freqOptionTimer: number) {
    this.freqOptionTimer = freqOptionTimer;
  }

  setEmailOn(emailOn: boolean) {
    this.emailOn = emailOn;
  }

  setTelegramOn(telegramOn: boolean) {
    this.telegramOn = telegramOn;
  }

  setTempCond(tempCond: number) {
    this.tempCond = tempCond;
  }

  setIsTempCondOn(isTempCondOn: boolean) {
    this.isTempCondOn = isTempCondOn;
  }

  setCpuLoadCond(cpuLoadCond: number) {
    this.cpuLoadCond = cpuLoadCond;
  }

  setIsCpuLoadCondOn(isCpuLoadCondOn: boolean) {
    this.isCpuLoadCondOn = isCpuLoadCondOn;
  }

  setRamLoadCond(ramLoadCond: number) {
    this.ramLoadCond = ramLoadCond;
  }

  setIsRamLoadCondOn(isRamLoadCondOn: boolean) {
    this.isRamLoadCondOn = isRamLoadCondOn;
  }

  setDiskSpaceCond(diskSpaceCond: number) {
    this.diskSpaceCond = diskSpaceCond;
  }

  setIsDiskSpaceCondOn(isDiskSpaceCondOn: boolean) {
    this.isDiskSpaceCondOn = isDiskSpaceCondOn;
  }

  resetStore() {
    this.activeTime = "always-on";
    this.startTime = "08:00";
    this.endTime = "20:00";
    this.freqOption = "every-time";
    this.freqOptionTimer = 0;
    this.emailOn = false;
    this.telegramOn = false;
    this.tempCond = 80;
    this.isTempCondOn = true;
    this.cpuLoadCond = 80;
    this.isCpuLoadCondOn = true;
    this.ramLoadCond = 80;
    this.isRamLoadCondOn = true;
    this.diskSpaceCond = 80;
    this.isDiskSpaceCondOn = true;
  }

  setStoreFromSettings(notifications: UserNotifications) {
    this.activeTime = notifications.activeTime ?? "always-on";
    this.startTime = notifications.startTime ?? "08:00";
    this.endTime = notifications.endTime ?? "20:00";
    this.freqOption = notifications.freqOption ?? "every-time";
    this.freqOptionTimer = notifications.freqOptionTimer ?? 0;
    this.emailOn = notifications.emailOn ?? false;
    this.telegramOn = notifications.telegramOn ?? false;
    this.tempCond = notifications.tempCond ?? 80;
    this.isTempCondOn = notifications.isTempCondOn ?? true;
    this.cpuLoadCond = notifications.cpuLoadCond ?? 80;
    this.isCpuLoadCondOn = notifications.isCpuLoadCondOn ?? true;
    this.ramLoadCond = notifications.ramLoadCond ?? 80;
    this.isRamLoadCondOn = notifications.isRamLoadCondOn ?? true;
    this.diskSpaceCond = notifications.diskSpaceCond ?? 80;
    this.isDiskSpaceCondOn = notifications.isDiskSpaceCondOn ?? true;
  }
}
