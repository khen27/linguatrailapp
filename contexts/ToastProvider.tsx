import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ToastBanner, ToastPreset } from '@/components/toast/ToastBanner';

interface ToastRequest {
  id: number;
  message: string;
  preset?: ToastPreset;
  duration?: number;
}

interface ToastContextValue {
  show: (opts: { message: string; preset?: ToastPreset; duration?: number }) => void;
  dismiss: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const [current, setCurrent] = useState<ToastRequest | null>(null);
  const queue = useRef<ToastRequest[]>([]);
  const idRef = useRef(0);
  const lastShownRef = useRef<{ message: string; ts: number } | null>(null);

  const processQueue = useCallback(() => {
    if (current || queue.current.length === 0) return;
    const next = queue.current.shift()!;
    setCurrent(next);
  }, [current]);

  const show: ToastContextValue['show'] = useCallback(({ message, preset = 'comingSoon', duration = 5000 }) => {
    const now = Date.now();
    if (lastShownRef.current && lastShownRef.current.message === message && now - lastShownRef.current.ts < 1000) {
      return; // dedupe rapid duplicates
    }
    lastShownRef.current = { message, ts: now };

    const req: ToastRequest = { id: ++idRef.current, message, preset, duration };
    queue.current.push(req);
    processQueue();
  }, [processQueue]);

  const dismiss = useCallback(() => {
    setCurrent(null);
    requestAnimationFrame(processQueue);
  }, [processQueue]);

  const ctx = useMemo(() => ({ show, dismiss }), [show, dismiss]);

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        {current && (
          <ToastBanner
            message={current.message}
            preset={current.preset}
            duration={current.duration}
            topOffset={insets.top + 100}
            onHide={dismiss}
          />
        )}
      </View>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToastContext must be used within ToastProvider');
  return ctx;
};
