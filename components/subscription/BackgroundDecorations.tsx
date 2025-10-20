import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

export function BackgroundDecorations() {
  return (
    <View style={styles.container}>
      {/* Large blurred ellipse - top left */}
      <BlurView intensity={57} style={[styles.blurredEllipse, styles.ellipse1]}>
        <View style={styles.ellipseContent1} />
      </BlurView>
      
      {/* Medium blurred ellipse - top right */}
      <BlurView intensity={72} style={[styles.blurredEllipse, styles.ellipse2]}>
        <View style={styles.ellipseContent2} />
      </BlurView>
      
      {/* Small blurred ellipse - center */}
      <BlurView intensity={22} style={[styles.blurredEllipse, styles.ellipse3]}>
        <View style={styles.ellipseContent3} />
      </BlurView>
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
    overflow: 'hidden',
  },
  ellipse1: {
    width: 235.6,
    height: 381.6,
    left: -72.7,
    top: -25.62,
    transform: [{ rotate: '90deg' }],
  },
  ellipse2: {
    width: 130.23,
    height: 210.94,
    right: -40.13,
    top: -64.83,
    transform: [{ rotate: '90deg' }],
  },
  ellipse3: {
    width: 116.02,
    height: 187.92,
    right: -36.17,
    top: -71,
    transform: [{ rotate: '90deg' }],
  },
  ellipseContent1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EBF8F7',
    opacity: 0.3,
  },
  ellipseContent2: {
    width: '100%',
    height: '100%',
    backgroundColor: '#BFC4DD',
    opacity: 0.3,
  },
  ellipseContent3: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E3EF',
    opacity: 0.3,
  },
});
