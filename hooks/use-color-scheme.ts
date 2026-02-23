 import { createContext, useContext } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

export type ColorScheme = 'light' | 'dark';

export type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (value: ColorScheme) => void;
};

export const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export function useColorScheme(): ColorScheme {
  const ctx = useContext(ColorSchemeContext);
  if (ctx) return ctx.colorScheme;

  return (useRNColorScheme() ?? 'light') as ColorScheme;
}

export function useSetColorScheme() {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    throw new Error('useSetColorScheme must be used within a ColorSchemeContext.Provider');
  }
  return ctx.setColorScheme;
}
