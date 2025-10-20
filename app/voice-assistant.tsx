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
              <Svg width="40" height="40" viewBox="0 0 52 52" fill="none">
                <Rect x="52" y="52" width="52" height="52" rx="26" transform="rotate(180 52 52)" fill="#F6F7FA"/>
                <Path d="M21.5 18H30.5C31.12 18 31.67 18.02 32.16 18.09C34.79 18.38 35.5 19.62 35.5 23V29C35.5 32.38 34.79 33.62 32.16 33.91C31.67 33.98 31.12 34 30.5 34H21.5C20.88 34 20.33 33.98 19.84 33.91C17.21 33.62 16.5 32.38 16.5 29V23C16.5 19.62 17.21 18.38 19.84 18.09C20.33 18.02 20.88 18 21.5 18Z" stroke="#F84E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M27.5 24H31" stroke="#F84E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21 29.5H21.02H31" stroke="#F84E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M24.0941 24H24.1031" stroke="#F84E5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21.0941 24H21.1031" stroke="#F84E5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>

            {/* Center Button - Main Action */}
            <TouchableOpacity style={styles.mainActionButton}>
              <Svg width="102" height="102" viewBox="0 0 103 102" fill="none">
                <Rect x="0.5" width="102" height="102" rx="51" fill="#E9FDF8"/>
                <Rect x="9.77246" y="9.27274" width="83.4545" height="83.4545" rx="41.7273" fill="#DFFCF4"/>
                <Rect x="19.0449" y="18.5455" width="64.9091" height="64.9091" rx="32.4545" fill="#27EDB7"/>
                <Path d="M42.0342 41.5341L60.9647 60.4647" stroke="#2F4291" strokeWidth="1.29239" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M42.0343 60.4647L60.9648 41.5341" stroke="#2F4291" strokeWidth="1.29239" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>

            {/* Right Button - Close */}
            <TouchableOpacity style={styles.actionButton}>
              <Svg width="40" height="40" viewBox="0 0 52 52" fill="none">
                <Rect x="52" y="52" width="52" height="52" rx="26" transform="rotate(180 52 52)" fill="#F6F7FA"/>
                <Path d="M21.7568 30.2426L30.2421 21.7574" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M30.2421 30.2426L21.7568 21.7574" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
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
    marginTop: 140,
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
    marginTop: 80,
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
  mainActionButton: {
    width: 102,
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
