import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScreenHeader } from '@/components/ui/screen-header';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function VoiceAssistantScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleMenuPress = () => {
    // TODO: Implement menu functionality
    console.log('Menu pressed');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Background Gradient Overlays */}
        <View style={styles.backgroundContainer}>
          {/* Top Gradient Group */}
          <View style={styles.topGradientGroup}>
            <View style={styles.topEllipse1} />
            <View style={styles.topEllipse2} />
            <View style={styles.topEllipse3} />
          </View>

          {/* Bottom Gradient Group */}
          <View style={styles.bottomGradientGroup}>
            <View style={styles.bottomEllipse1} />
            <View style={styles.bottomEllipse2} />
            <View style={styles.bottomEllipse3} />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Header */}
          <ScreenHeader
            title="English Speaking Session"
            onBackPress={handleBackPress}
            onMenuPress={handleMenuPress}
          />

          {/* Progress Bar */}
          <View style={styles.progressSection}>
            <ProgressBar
              progress={0.25} // 25% progress for demo
              height={10}
              backgroundColor="#FFFFFF"
              fillColor="#27EDB7"
            />
          </View>

          {/* Instruction Text */}
          <View style={styles.instructionSection}>
            <Text style={styles.instructionText}>
              Repeat after me → "I wake up at 7 o'clock ⏰."
            </Text>
          </View>

          {/* Speaking Icon Placeholder */}
          <View style={styles.speakingIconContainer}>
            <View style={styles.speakingIconPlaceholder}>
              <Text style={styles.placeholderText}>Speaking Icon</Text>
            </View>
          </View>

          {/* User Response Text */}
          <View style={styles.responseSection}>
            <Text style={styles.responseText}>
              I wake up at seven o'clock.
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            {/* Left Button - Keyboard */}
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>⌨️</Text>
            </TouchableOpacity>

            {/* Center Button - Main Action */}
            <TouchableOpacity style={styles.mainActionButton}>
              <Text style={styles.mainButtonText}>✕</Text>
            </TouchableOpacity>

            {/* Right Button - Close */}
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  safeArea: {
    flex: 1,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  // Top Gradient Group
  topGradientGroup: {
    position: 'absolute',
    width: 794.7,
    height: 586,
    left: (screenWidth - 794.7) / 2,
    top: -448,
    opacity: 0.7,
  },
  topEllipse1: {
    position: 'absolute',
    width: 490.65,
    height: 794.7,
    left: (490.65 - 490.65) / 2 - 151.17,
    top: -353.49,
    backgroundColor: '#EAECF4',
    borderRadius: 1000,
    transform: [{ rotate: '90deg' }],
  },
  topEllipse2: {
    position: 'absolute',
    width: 271.22,
    height: 439.29,
    left: (271.22 - 271.22) / 2 - 83.35,
    top: -435.15,
    backgroundColor: '#BFC4DD',
    borderRadius: 1000,
    transform: [{ rotate: '90deg' }],
  },
  topEllipse3: {
    position: 'absolute',
    width: 241.62,
    height: 391.35,
    left: (241.62 - 241.62) / 2 - 75.11,
    top: -448,
    backgroundColor: '#E0E3EF',
    borderRadius: 1000,
    transform: [{ rotate: '90deg' }],
  },
  // Bottom Gradient Group
  bottomGradientGroup: {
    position: 'absolute',
    width: 794.7,
    height: 586,
    left: (screenWidth - 794.7) / 2,
    top: screenHeight - 393,
    opacity: 0.7,
    transform: [{ rotate: '180deg' }],
  },
  bottomEllipse1: {
    position: 'absolute',
    width: 490.65,
    height: 794.7,
    left: (490.65 - 490.65) / 2 - 151.18,
    top: 393,
    backgroundColor: '#EAECF4',
    borderRadius: 1000,
    transform: [{ rotate: '-90deg' }],
  },
  bottomEllipse2: {
    position: 'absolute',
    width: 271.22,
    height: 439.29,
    left: (271.22 - 271.22) / 2 - 83.02,
    top: 694.46,
    backgroundColor: '#BFC4DD',
    borderRadius: 1000,
    transform: [{ rotate: '-90deg' }],
  },
  bottomEllipse3: {
    position: 'absolute',
    width: 241.62,
    height: 391.35,
    left: (241.62 - 241.62) / 2 - 72.92,
    top: 736.94,
    backgroundColor: '#E0E3EF',
    borderRadius: 1000,
    transform: [{ rotate: '-90deg' }],
  },
  // Content
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  progressSection: {
    marginTop: 24,
    marginBottom: 24,
  },
  instructionSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  instructionText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 33,
    textAlign: 'center',
    letterSpacing: -0.44,
    fontFamily: 'Manrope',
  },
  speakingIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  speakingIconPlaceholder: {
    width: 248.91,
    height: 234.85,
    backgroundColor: '#E9FDF8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#27EDB7',
    fontWeight: '600',
  },
  responseSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  responseText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 26,
    textAlign: 'center',
    letterSpacing: -0.44,
    fontFamily: 'Manrope',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 24,
  },
  actionButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F6F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainActionButton: {
    width: 102,
    height: 102,
    borderRadius: 51,
    backgroundColor: '#E9FDF8',
    justifyContent: 'center',
    alignItems: 'center',
    // Add inner circles for the layered effect
    shadowColor: '#27EDB7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 20,
    color: '#5C5C5C',
  },
  mainButtonText: {
    fontSize: 32,
    color: '#2F4291',
    fontWeight: 'bold',
  },
});
