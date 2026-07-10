// MMKV müvəqqəti deaktiv - memory storage istifadə edirik
// Sonra MMKV rebuild ediləndə geri qaytaracağıq

export const storage = {
  set: (key: string, value: any) => {},
  getNumber: (key: string): number | undefined => undefined,
  getString: (key: string): string | undefined => undefined,
  delete: (key: string) => {},
  clearAll: () => {},
};