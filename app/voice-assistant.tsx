import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScreenHeader } from '@/components/ui/screen-header';
import { SpeakingIcon } from '@/components/ui/speaking-icon';

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
    <>
      <Stack.Screen 
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
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

          {/* Speaking Icon */}
          <View style={styles.speakingIconContainer}>
            <SpeakingIcon size={248} isAnimating={true} />
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
    </>
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
