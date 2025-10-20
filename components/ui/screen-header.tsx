import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

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
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M12.5 10C12.5 10.6904 12.1904 11.25 11.75 11.25C11.3096 11.25 11 10.6904 11 10C11 9.30964 11.3096 8.75 11.75 8.75C12.1904 8.75 12.5 9.30964 12.5 10Z" fill="#5C5C5C"/>
            <Path d="M8.25 10C8.25 10.6904 7.94036 11.25 7.5 11.25C7.05964 11.25 6.75 10.6904 6.75 10C6.75 9.30964 7.05964 8.75 7.5 8.75C7.94036 8.75 8.25 9.30964 8.25 10Z" fill="#5C5C5C"/>
            <Path d="M4 10C4 10.6904 3.69036 11.25 3.25 11.25C2.80964 11.25 2.5 10.6904 2.5 10C2.5 9.30964 2.80964 8.75 3.25 8.75C3.69036 8.75 4 9.30964 4 10Z" fill="#5C5C5C"/>
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
