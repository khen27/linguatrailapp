import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ColorSchemeContext, type ColorScheme } from '@/hooks/use-color-scheme';
import { FeatureFlagProvider } from '@/contexts/FeatureFlagContext';
import { ToastProvider } from '@/contexts/ToastProvider';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const systemColorScheme = (useRNColorScheme() ?? 'light') as ColorScheme;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(systemColorScheme);

  // Keep in sync with system theme unless user overrides via context setter.
  useEffect(() => {
    setColorScheme(systemColorScheme);
  }, [systemColorScheme]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
        <FeatureFlagProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ToastProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
                <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
                <Stack.Screen name="add" options={{ headerShown: false }} />
                <Stack.Screen name="add-step2" options={{ headerShown: false }} />
                <Stack.Screen name="add-step3" options={{ headerShown: false }} />
                <Stack.Screen name="summary" options={{ headerShown: false }} />
                <Stack.Screen name="subscription" options={{ headerShown: false }} />
                <Stack.Screen name="privacy-policy" options={{ headerShown: false }} />
                <Stack.Screen name="terms-and-conditions" options={{ headerShown: false }} />
              </Stack>
              <StatusBar style="auto" />
            </ToastProvider>
          </ThemeProvider>
        </FeatureFlagProvider>
      </ColorSchemeContext.Provider>
    </GestureHandlerRootView>
  );
}
