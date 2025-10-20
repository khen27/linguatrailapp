import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number; // 0 to 1
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  borderRadius?: number;
  style?: any;
}

export function ProgressBar({
  progress,
  height = 10,
  backgroundColor = '#FFFFFF',
  fillColor = '#27EDB7',
  borderRadius = 1000,
  style,
}: ProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  return (
    <View style={[
      styles.container,
      {
        height,
        backgroundColor,
        borderRadius,
      },
      style,
    ]}>
      <View style={[
        styles.fill,
        {
          width: `${clampedProgress * 100}%`,
          height,
          backgroundColor: fillColor,
          borderRadius,
        },
      ]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    // Dynamic styles applied via props
  },
});
