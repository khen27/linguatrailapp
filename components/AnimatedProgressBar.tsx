import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';

interface AnimatedProgressBarProps {
  progress: number; // 0 to 1
  delay?: number; // milliseconds
}

export default function AnimatedProgressBar({ progress, delay = 300 }: AnimatedProgressBarProps) {
  const animatedWidth = useSharedValue(0);

  useEffect(() => {
    // Animate to target progress after delay
    animatedWidth.value = withDelay(
      delay,
      withSpring(progress, {
        damping: 20,
        stiffness: 90,
        mass: 1,
      })
    );
  }, [progress, delay]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedWidth.value * 100}%`,
    };
  });

  return (
    <View style={styles.progressSection}>
      <View style={styles.progressTrack}>
        <Animated.View style={[styles.progressFill, animatedStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressSection: {
    paddingHorizontal: 24,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
});

