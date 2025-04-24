import api from "../http";
import {
  DiskResponse,
  RamResponse,
} from "../models/response/ResourcesResponse";
import { CompInfo } from "../models/Types";

export default class ResourcesService {
  static async getLastCompInfo(): Promise<
    ReturnType<typeof api.get<CompInfo[]>>
  > {
    return api.get<CompInfo[]>("/resources/getLastCompInfo", {
      withCredentials: true,
    });
  }

  static async getLast10MinutesCpu(deviceName: string): Promise<number[]> {
    const response = await api.post<number[]>(
      "/resources/getLast10MinutesCpu",
      { device: deviceName },
      { withCredentials: true }
    );
    return response.data;
  }

  static async getLastHourCpu(deviceName: string): Promise<number[]> {
    const response = await api.post<number[]>(
      "/resources/getLastHourCpu",
      { device: deviceName },
      { withCredentials: true }
    );
    return response.data;
  }

  static async getLast24HoursCpu(deviceName: string): Promise<number[]> {
    const response = await api.post<number[]>(
      "/resources/getLast24HoursCpu",
      { device: deviceName },
      { withCredentials: true }
    );
    return response.data;
  }

  static async getLastHourTemperature(deviceName: string): Promise<number[]> {
    const response = await api.post<number[]>(
      "/resources/getLastHourTemperature",
      { device: deviceName },
      { withCredentials: true }
    );
    return response.data;
  }

  static async getDiskInfo(deviceName: string): Promise<DiskResponse[]> {
    const response = await api.post<DiskResponse[]>(
      "/resources/getDiskInfo",
      { device: deviceName },
      { withCredentials: true }
    );
    return response.data;
  }

  static async getRamInfo(deviceName: string): Promise<RamResponse> {
    const response = await api.post<RamResponse>(
      "/resources/getRamInfo",
      { device: deviceName },
      { withCredentials: true }
    );
    return response.data;
  }
}
