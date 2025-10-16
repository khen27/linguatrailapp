import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path, Rect, Circle } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <View style={styles.buttonIcon}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7.5 15L2.5 10L7.5 5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M2.5 10H17.5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Create New Learning</Text>

        {/* Close Button */}
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <View style={styles.buttonIcon}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M15 5L5 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M5 5L15 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        </TouchableOpacity>

        {/* Main content placeholder */}
        <View style={styles.mainContent}>
          <Text style={styles.placeholderText}>Create New Learning Screen</Text>
          <Text style={styles.placeholderSubtext}>Coming soon...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
    width: 375,
    height: 812,
    position: 'relative',
  },
  // Back Button
  backButton: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 24,
    top: 52,
    borderRadius: 1036.36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 11,
    zIndex: 10,
  },
  // Close Button
  closeButton: {
    position: 'absolute',
    width: 42,
    height: 42,
    right: 0,
    top: 52,
    borderRadius: 1036.36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 11,
    zIndex: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'absolute',
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02 * 16,
    color: '#263574',
    textAlign: 'center',
    width: 227,
    height: 24,
    top: 61,
    left: 74, // Back button (42px) + gap (8px) + margin (24px)
    right: 74, // X button (42px) + gap (8px) + margin (24px)
    zIndex: 5, // Lower than buttons to avoid overlap
  },
  mainContent: {
    marginTop: 115,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  placeholderText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 18,
    color: '#263574',
    textAlign: 'left',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  placeholderSubtext: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    color: '#5C5C5C',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});