import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { Svg, Rect, Path } from 'react-native-svg';
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

          {/* AI Charm Image */}
          <View style={styles.aiCharmContainer}>
            <Image 
              source={require('@/assets/icons/ai-charm.png')}
              style={styles.aiCharmImage}
              resizeMode="contain"
            />
          </View>

          {/* Speaking Icon */}
          <View style={styles.speakingIconContainer}>
            <SpeakingIcon size={248.91} isAnimating={false} />
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
              <Image 
                source={require('@/assets/icons/ai-left-bottom-button.png')}
                style={styles.actionButtonImage}
                resizeMode="contain"
              />
            </TouchableOpacity>

            {/* Center Button - Main Action */}
            <TouchableOpacity style={styles.mainActionButton}>
              <Image 
                source={require('@/assets/icons/ai-center-bottom-button.png')}
                style={styles.mainActionButtonImage}
                resizeMode="contain"
              />
            </TouchableOpacity>

            {/* Right Button - Close */}
            <TouchableOpacity style={styles.actionButton}>
              <Image 
                source={require('@/assets/icons/ai-right-bottom-button.png')}
                style={styles.actionButtonImage}
                resizeMode="contain"
              />
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
    marginBottom: 24,
  },
  instructionText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 33, // 150% of 22
    textAlign: 'center',
    letterSpacing: -0.44, // -2% of 22
    fontFamily: 'Manrope',
  },
  aiCharmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    marginVertical: 0,
    marginTop: 180,
  },
  aiCharmImage: {
    width: 300,
    height: 300,
  },
  speakingIconContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  responseSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
    marginTop: 0,
  },
  responseText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 26.4, // 120% of 22
    textAlign: 'center',
    letterSpacing: -0.44, // -2% of 22
    fontFamily: 'Manrope',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 20,
    gap: 24,
    marginTop: -20,
  },
  actionButton: {
    width: 51,
    height: 51,
    borderRadius: 25.5,
    backgroundColor: '#F6F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonImage: {
    width: 40,
    height: 40,
  },
  mainActionButton: {
    width: 102,
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainActionButtonImage: {
    width: 102,
    height: 102,
  },
});
