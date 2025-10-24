// contexts/FeatureFlagContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getItem, setItem } from '../utils/storage';

type Flags = Record<string, boolean>;

type Ctx = {
  flags: Flags;
  setFlag: (k: string, v: boolean) => void;
  isOn: (k: string) => boolean;
};

const FeatureFlagContext = createContext<Ctx | null>(null);
const KEY = 'feature_flags_v1';

export const FeatureFlagProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [flags, setFlags] = useState<Flags>({
    extendedFirstRun: true, // Default to true as specified
    onboardingScreens: true, // Default to true as specified
  });

  useEffect(() => {
    (async () => {
      const raw = await getItem(KEY);
      if (raw) {
        try { 
          setFlags(JSON.parse(raw)); 
        } catch {
          // Ignore parse errors, use defaults
        }
      }
    })();
  }, []);

  const setFlag = (k: string, v: boolean) => {
    setFlags((prev) => {
      const next = { ...prev, [k]: v };
      // fire-and-forget; no need to await
      setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  const value = useMemo<Ctx>(() => ({
    flags,
    setFlag,
    isOn: (k) => !!flags[k],
  }), [flags]);

  return (
    <FeatureFlagContext.Provider value={value}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export function useFeatureFlags() {
  const ctx = useContext(FeatureFlagContext);
  if (!ctx) throw new Error('useFeatureFlags must be used within FeatureFlagProvider');
  return ctx;
}