import { useToastContext } from '@/contexts/ToastProvider';

export function useToast() {
  const ctx = useToastContext();
  return ctx;
}
