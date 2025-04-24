export interface RamResponse {
  totalMemory: number;
  usedMemory: number;
  remainingMemory: number;
}

export interface DiskResponse {
  fs: string;
  totalMemory: number;
  usedMemory: number;
  remainingMemory: number;
}
