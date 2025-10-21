import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DesignTokens as T } from '../constants/design-tokens';
import { LongPressGestureHandler, PanGestureHandler, State } from 'react-native-gesture-handler';

interface SummaryRowProps {
  title: string;
  subtitle: string;
  duration: string;
  emoji: string;
  backgroundColor: string;
  progressPercentage?: number;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onStartDrag?: () => void;
  onPanMove?: (translationY: number) => void;
  onPanRelease?: () => void;
  index?: number;
  isDragging?: boolean;
  isAnyDragging?: boolean;
}

export default function SummaryRow({
  title,
  subtitle,
  duration,
  emoji,
  backgroundColor,
  progressPercentage = 0,
  onMoveUp,
  onMoveDown,
  onStartDrag,
  onPanMove,
  onPanRelease,
  index,
  isDragging = false,
  isAnyDragging = false,
}: SummaryRowProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const longRef = useRef<any>(null);
  const panRef = useRef<any>(null);

  useEffect(() => {
    if (isDragging) {
      Animated.spring(scale, {
        toValue: 1.02,
        useNativeDriver: true,
        stiffness: 220,
        damping: 24,
        mass: 0.6,
      }).start();
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }).start();
    }
  }, [isDragging]);
  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ scale }], opacity: isAnyDragging && !isDragging ? 0.98 : 1 },
        isDragging && styles.dragShadow,
      ]}
    >
      {/* Colored Icon Container */}
      <View style={[styles.iconContainer, { backgroundColor }]}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
          {subtitle}
        </Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View 
              style={[
                styles.progressFill, 
                { 
                  width: `${progressPercentage}%`,
                  backgroundColor: backgroundColor 
                }
              ]} 
            />
          </View>
        </View>
      </View>

      {/* Sort Control - Single Hamburger */}
      <LongPressGestureHandler
        ref={longRef}
        minDurationMs={200}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            onStartDrag && onStartDrag();
          }
        }}
      >
        <PanGestureHandler
          ref={panRef}
          simultaneousHandlers={longRef}
          activeOffsetY={[-2, 2]}
          onGestureEvent={({ nativeEvent }) => {
            if (onPanMove) onPanMove(nativeEvent.translationY);
          }}
          onHandlerStateChange={({ nativeEvent }) => {
            if (
              nativeEvent.state === State.END ||
              nativeEvent.state === State.CANCELLED ||
              nativeEvent.state === State.FAILED
            ) {
              onPanRelease && onPanRelease();
            }
          }}
        >
          <View style={styles.sortContainer} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Svg width="20" height="20" viewBox="0 0 24 24">
              <Path 
                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" 
                fill="#5C5C5C"
              />
              <Path 
                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" 
                fill="#5C5C5C"
              />
              <Path 
                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" 
                fill="#5C5C5C"
              />
            </Svg>
          </View>
        </PanGestureHandler>
      </LongPressGestureHandler>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7.2%', // 24px out of 375px screen width
    gap: 10,
    height: 51,
    marginBottom: '6.4%', // 24px out of 375px screen width
  },
  dragShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: T.radii.chip,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  emoji: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 26,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.28,
    color: T.colors.blueNormal,
  },
  subtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.24,
    color: T.colors.greyNormal,
  },
  progressContainer: {
    marginTop: 4,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    backgroundColor: T.colors.white,
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 1000,
  },
  sortContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 4,
    width: 28,
    height: 51,
    backgroundColor: T.colors.white,
    borderRadius: 16,
  },
});
