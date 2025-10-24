import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { WarningBadge } from './icons/WarningBadge';
import { Colors, Typography } from '@/constants/design-tokens';

export type ToastPreset = 'comingSoon' | 'success' | 'error';

export interface ToastBannerProps {
  message: string;
  preset?: ToastPreset;
  onHide?: () => void;
  duration?: number; // ms
  bottomOffset?: number; // px from bottom safe area
  topOffset?: number; // px from top safe area
}

export const ToastBanner: React.FC<ToastBannerProps> = ({
  message,
  preset = 'comingSoon',
  onHide,
  duration = 5000,
  bottomOffset,
  topOffset = 12,
}) => {
  const translateY = useRef(new Animated.Value(-24)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, { toValue: 0, duration: 300, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 300, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      ]),
      Animated.delay(duration),
      Animated.parallel([
        Animated.timing(translateY, { toValue: -24, duration: 300, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0, duration: 300, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
      ]),
    ]).start(() => onHide && onHide());
  }, [duration, onHide, opacity, translateY]);

  const stylePosition = topOffset != null
    ? { top: topOffset }
    : { bottom: bottomOffset ?? 110 };

  const presetStyles = useMemo(() => {
    switch (preset) {
      case 'success':
        return {
          borderColor: '#27EDB7',
          backgroundColor: 'rgba(39, 237, 183, 0.07)',
          textColor: '#000000',
        };
      case 'error':
        return {
          borderColor: '#FF6B6B',
          backgroundColor: 'rgba(255, 107, 107, 0.07)',
          textColor: '#000000',
        };
      case 'comingSoon':
      default:
        return {
          borderColor: '#F5C63B',
          backgroundColor: 'rgba(245, 198, 59, 0.07)',
          textColor: '#000000',
        };
    }
  }, [preset]);

  const content = useMemo(() => (
    <View style={styles.row}>
      <WarningBadge />
      <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, { color: presetStyles.textColor }]}>{message}</Text>
    </View>
  ), [message, presetStyles.textColor]);

  return (
    <Animated.View style={[styles.container, stylePosition, { transform: [{ translateY }], opacity }]}
      pointerEvents="none"
    >
      {/* base */}
      <View style={[styles.overlay, { borderColor: presetStyles.borderColor }]} />
      {/* subtle tint */}
      <View style={[styles.tint, { backgroundColor: presetStyles.backgroundColor }]} />
      {content}
    </Animated.View>
  );
};

const WIDTH = 151;
const HEIGHT = 40;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    width: WIDTH,
    height: HEIGHT,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#4694FD',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 3,
  },
  tint: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 14,
    paddingLeft: 10,
    gap: 6,
    height: HEIGHT,
    width: WIDTH,
  },
  text: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: 20,
    letterSpacing: Typography.letterSpacing,
    color: '#000000',
    flexShrink: 1,
  },
});
