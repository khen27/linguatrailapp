import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DesignTokens as T } from '../constants/design-tokens';

interface SummaryRowProps {
  title: string;
  subtitle: string;
  duration: string;
  emoji: string;
  backgroundColor: string;
  progressPercentage?: number;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
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
}: SummaryRowProps) {
  return (
    <View style={styles.container}>
      {/* Colored Icon Container */}
      <View style={[styles.iconContainer, { backgroundColor }]}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Title and Duration Row */}
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>

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

      {/* Sort Controls */}
      <View style={styles.sortContainer}>
        <TouchableOpacity 
          style={styles.sortButton}
          onPress={onMoveUp}
          activeOpacity={0.7}
        >
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path 
              d="M6.67 13.33L10 10L13.33 13.33" 
              stroke="#202020" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.sortButton}
          onPress={onMoveDown}
          activeOpacity={0.7}
        >
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path 
              d="M6.67 6.67L10 10L13.33 6.67" 
              stroke="#202020" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
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
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.28,
    color: T.colors.blueNormal,
  },
  duration: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.24,
    color: T.colors.greyNormal,
    textAlign: 'right',
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 4,
    width: 28,
    height: 51,
    backgroundColor: T.colors.white,
    borderRadius: 16,
  },
  sortButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
