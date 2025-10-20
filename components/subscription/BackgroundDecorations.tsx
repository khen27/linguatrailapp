import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

export function BackgroundDecorations() {
  return (
    <View style={styles.container}>
      {/* Large blurred ellipse - top left */}
      <View style={[styles.blurredEllipse, styles.ellipse1]} />
      
      {/* Medium blurred ellipse - top right */}
      <View style={[styles.blurredEllipse, styles.ellipse2]} />
      
      {/* Small blurred ellipse - center */}
      <View style={[styles.blurredEllipse, styles.ellipse3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  blurredEllipse: {
    position: 'absolute',
    borderRadius: 1000,
  },
  ellipse1: {
    width: 235.6,
    height: 381.6,
    left: -72.7,
    top: -25.62,
    backgroundColor: '#EBF8F7',
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  ellipse2: {
    width: 130.23,
    height: 210.94,
    right: -40.13,
    top: -64.83,
    backgroundColor: '#BFC4DD',
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  ellipse3: {
    width: 116.02,
    height: 187.92,
    right: -36.17,
    top: -71,
    backgroundColor: '#E0E3EF',
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
});
