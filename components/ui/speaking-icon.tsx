import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import { Svg, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

interface SpeakingIconProps {
  size?: number;
  isAnimating?: boolean;
}

export function SpeakingIcon({ size = 255, isAnimating = true }: SpeakingIconProps) {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    if (isAnimating) {
      animationValue.value = withRepeat(
        withTiming(1, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
    }
  }, [isAnimating]);

  const bottomEllipseStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [1, 1.05]);
    const opacity = interpolate(animationValue.value, [0, 1], [0.7, 0.9]);
    
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  const middleEllipseStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [1, 1.08]);
    const opacity = interpolate(animationValue.value, [0, 1], [1, 0.95]);
    
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  const topEllipseStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [1, 1.03]);
    const opacity = interpolate(animationValue.value, [0, 1], [0.8, 1]);
    
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 255 251" fill="none">
        <Defs>
          {/* Gradients */}
          <LinearGradient id="paint0_linear" x1="70.0962" y1="0" x2="70.0962" y2="140.192" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#DDDDDD" stopOpacity="0.51"/>
            <Stop offset="1" stopColor="#B3B3B3" stopOpacity="0"/>
          </LinearGradient>
          
          <LinearGradient id="paint2_linear" x1="70.0962" y1="0" x2="70.0962" y2="140.192" gradientUnits="userSpaceOnUse">
            <Stop stopColor="white" stopOpacity="0.51"/>
            <Stop offset="1" stopColor="white" stopOpacity="0"/>
          </LinearGradient>
        </Defs>

        {/* Bottom Ellipse */}
        <Animated.View style={[styles.ellipseContainer, bottomEllipseStyle]}>
          <Circle 
            cx="70.0962" 
            cy="70.0962" 
            r="70.0962" 
            transform="matrix(0.983736 0.179619 0.336313 0.94175 0.152344 77.6465)" 
            fill="url(#paint0_linear)"
          />
        </Animated.View>

        {/* Middle Ellipse (green) */}
        <Animated.View style={[styles.ellipseContainer, middleEllipseStyle]}>
          <Circle 
            cx="70.0962" 
            cy="70.0962" 
            r="70.0962" 
            transform="matrix(0.983736 0.179619 0.336313 0.94175 29.0225 43.3516)" 
            fill="#27EDB7"
          />
        </Animated.View>

        {/* Top Ellipse */}
        <Animated.View style={[styles.ellipseContainer, topEllipseStyle]}>
          <Circle 
            cx="70.0962" 
            cy="70.0962" 
            r="70.0962" 
            transform="matrix(0.983736 0.179619 0.336313 0.94175 64 0)" 
            fill="url(#paint2_linear)"
          />
        </Animated.View>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipseContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
