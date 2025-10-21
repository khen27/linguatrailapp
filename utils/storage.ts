// utils/storage.ts
import { Platform } from 'react-native';

type Store = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

const memory = new Map<string, string>();

const MemoryStore: Store = {
  async getItem(key) { return memory.has(key) ? memory.get(key)! : null; },
  async setItem(key, value) { memory.set(key, value); },
  async removeItem(key) { memory.delete(key); },
};

function resolveStore(): Store {
  try {
    // Web/dev fallback
    if (Platform.OS === 'web') return MemoryStore;

    // Try native AsyncStorage
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require('@react-native-async-storage/async-storage');
    const AsyncStorage = mod?.default ?? mod;

    if (AsyncStorage && typeof AsyncStorage.getItem === 'function') {
      return {
        getItem: (k) => AsyncStorage.getItem(k),
        setItem: (k, v) => AsyncStorage.setItem(k, v),
        removeItem: (k) => AsyncStorage.removeItem(k),
      } as Store;
    }

    // If module exists but method not there, fall back
    return MemoryStore;
  } catch {
    // If require fails (e.g., dev client not rebuilt), fall back
    return MemoryStore;
  }
}

const store = resolveStore();

export async function getItem(key: string) {
  return store.getItem(key);
}
export async function setItem(key: string, value: string) {
  return store.setItem(key, value);
}
export async function removeItem(key: string) {
  return store.removeItem(key);
}