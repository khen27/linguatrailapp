import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { Svg, Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
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

          {/* User Response Text */}
          <View style={styles.responseSection}>
            <Text style={styles.responseText}>
              I wake up at seven o'clock.
            </Text>
          </View>
        </View>

        {/* AI Charm Image - Absolutely Positioned */}
        <View style={styles.aiCharmContainer}>
          <Image 
            source={require('@/assets/icons/ai-charm.png')}
            style={styles.aiCharmImage}
            resizeMode="contain"
          />
        </View>

        {/* Speaking Icon - Absolutely Positioned */}
        <View style={styles.speakingIconContainer}>
          <SpeakingIcon size={248.91} isAnimating={false} />
        </View>

        {/* Bottom White Curved Overlay */}
        <View style={styles.bottomOverlay}>
          <Svg 
            width={screenWidth} 
            height="300" 
            viewBox={`0 0 ${screenWidth} 300`}
            style={styles.curvedTop}
          >
            <Path
              d={`M 0 120 Q ${screenWidth / 2} 10 ${screenWidth} 120 L ${screenWidth} 300 L 0 300 Z`}
              fill="white"
            />
          </Svg>
          {/* Soft gradient to blend overlay top */}
          <Svg
            width={screenWidth}
            height="60"
            viewBox={`0 0 ${screenWidth} 60`}
            style={{ position: 'absolute', top: 0 }}
          >
            <Defs>
              <LinearGradient id="fadeDown" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
                <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width={screenWidth} height="60" fill="url(#fadeDown)" />
          </Svg>
          
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
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  aiCharmImage: {
    width: 300,
    height: 300,
  },
  speakingIconContainer: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  responseSection: {
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 272,
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
    position: 'absolute',
    bottom: 64,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 56,
    gap: 28,
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
    width: 51,
    height: 51,
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
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    zIndex: 1,
  },
  curvedTop: {
    position: 'absolute',
    bottom: 0,
  },
});
