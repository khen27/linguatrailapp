import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Svg, Path, Rect, Circle } from 'react-native-svg';
import { useRouter } from 'expo-router';

export default function AddScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header Navigation */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity 
            style={styles.headerButton}
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
            style={styles.headerButton}
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
        </View>

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
  // Header Navigation
  header: {
    position: 'absolute',
    width: 327,
    height: 42,
    left: 24,
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 10,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 1036.36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 11,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02 * 16,
    color: '#263574',
    textAlign: 'center',
    width: 227,
    height: 24,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  placeholderText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 18,
    color: '#263574',
    textAlign: 'center',
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    color: '#5C5C5C',
    textAlign: 'center',
  },
});