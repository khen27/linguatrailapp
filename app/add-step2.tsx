import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddStep2Screen() {
  const router = useRouter();
  const [textInput, setTextInput] = useState('');

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Header Navigation */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7.5 15L2.5 10L7.5 5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M2.5 10H17.5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.headerTitle}>Create New Learning</Text>

          {/* Close Button */}
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M15 5L5 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M5 5L15 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Main Content Card */}
      <View style={styles.contentCard}>
        {/* Bottom Gradient Overlay */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
          style={styles.gradientOverlay}
          pointerEvents="none"
        />

        {/* Content Container (keyboard-aware) */}
        <KeyboardAvoidingView
          style={styles.contentContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={0}
        >
          {/* Progress Bar Section */}
          <View style={styles.progressSection}>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Title and Subtitle */}
          <View style={styles.titleSection}>
            <Text style={styles.mainTitle}>Give Insights</Text>
            <Text style={styles.subtitle}>Upload the document, take photo or paste text of the language task you want to get help with.</Text>
          </View>

          {/* Text Input Area */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Relevant Text</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Paste the text here..."
              placeholderTextColor="#5C5C5C"
              multiline={true}
              value={textInput}
              onChangeText={setTextInput}
            />
          </View>

          {/* Skip Button */}
          <TouchableOpacity 
            style={styles.skipButton} 
            activeOpacity={0.8}
            onPress={() => router.push('/add-step3')}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  safeArea: {
    zIndex: 10,
  },
  // Header Navigation
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    gap: 8,
    width: '100%',
    height: 42,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 1036.36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
    textAlign: 'center',
  },
  // Main Content Card
  contentCard: {
    position: 'absolute',
    top: 122, // 52px (back button top) + 42px (back button height) + 28px gap (14px + 14px more)
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    paddingBottom: 32,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 109,
    pointerEvents: 'none',
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 24,
    zIndex: 2,
    paddingHorizontal: 0,
  },
  // Progress Bar
  progressSection: {
    paddingHorizontal: 24,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    width: 218,
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  // Title Section
  titleSection: {
    paddingHorizontal: 24,
    gap: 8,
  },
  mainTitle: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.44,
    color: '#263574',
    textAlign: 'left',
    width: '100%',
  },
  subtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#5C5C5C',
    textAlign: 'left',
    opacity: 0.7,
    width: '100%',
  },
  // Text Input Section
  inputSection: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 12,
  },
  inputLabel: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E3EF',
    borderRadius: 16,
    padding: 16,
    fontFamily: 'Urbanist',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
    textAlignVertical: 'top',
  },
  // Skip Button
  skipButton: {
    marginHorizontal: 24,
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    zIndex: 3,
  },
  skipButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#2F4291',
    textAlign: 'center',
  },
});
