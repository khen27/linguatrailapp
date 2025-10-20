import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

interface ScreenHeaderProps {
  title: string;
  onBackPress: () => void;
  onMenuPress?: () => void;
  showMenuButton?: boolean;
}

export function ScreenHeader({
  title,
  onBackPress,
  onMenuPress,
  showMenuButton = true,
}: ScreenHeaderProps) {
  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.headerButton}
        onPress={onBackPress}
        activeOpacity={0.8}
      >
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path d="M7.5 15L2.5 10L7.5 5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M2.5 10H17.5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Menu Button */}
      {showMenuButton ? (
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={onMenuPress || onBackPress}
          activeOpacity={0.8}
        >
          <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <Rect x="42" y="42" width="42" height="42" rx="21" transform="rotate(180 42 42)" fill="white"/>
            <Path d="M15.1667 19.3334C14.25 19.3334 13.5 20.0834 13.5 21C13.5 21.9167 14.25 22.6667 15.1667 22.6667C16.0833 22.6667 16.8333 21.9167 16.8333 21C16.8333 20.0834 16.0833 19.3334 15.1667 19.3334Z" fill="#5C5C5C"/>
            <Path d="M26.8337 19.3334C25.917 19.3334 25.167 20.0834 25.167 21C25.167 21.9167 25.917 22.6667 26.8337 22.6667C27.7503 22.6667 28.5003 21.9167 28.5003 21C28.5003 20.0834 27.7503 19.3334 26.8337 19.3334Z" fill="#5C5C5C"/>
            <Path d="M20.9997 19.3334C20.083 19.3334 19.333 20.0834 19.333 21C19.333 21.9167 20.083 22.6667 20.9997 22.6667C21.9163 22.6667 22.6663 21.9167 22.6663 21C22.6663 20.0834 21.9163 19.3334 20.9997 19.3334Z" fill="#5C5C5C"/>
          </Svg>
        </TouchableOpacity>
      ) : (
        <View style={styles.headerButton} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 8,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.32, // -2% of 16
    lineHeight: 24, // 150% of 16
    fontFamily: 'Urbanist',
  },
});
