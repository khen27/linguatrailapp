import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { Svg, Rect, Path, G, ClipPath, Defs } from 'react-native-svg';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScreenHeader } from '@/components/ui/screen-header';
import { SpeakingIcon } from '@/components/ui/speaking-icon';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function VoiceAssistantScreen() {
  const router = useRouter();
  const hiddenInputRef = React.useRef<TextInput>(null);

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
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); hiddenInputRef.current?.blur(); }}>
        <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Header */}
          <ScreenHeader
            title="English Speaking Session"
            onBackPress={handleBackPress}
            showMenuButton={true}
            onMenuPress={handleMenuPress}
          />

          {/* Progress Bar */}
          {/* <View style={styles.progressSection}>
            <ProgressBar
              progress={0.25} // 25% progress for demo
              height={10}
              backgroundColor="#FFFFFF"
              fillColor="#27EDB7"
            />
          </View> */}

          {/* Instruction Text */}
          <View style={styles.instructionSection}>
            <Text style={styles.instructionText}>
              Go ahead, I'm listening
            </Text>
          </View>

        </View>

        {/* User Response Text - Absolutely Positioned */}
        <View style={styles.responseSection}>
          <Text style={styles.responseText}>
            I wake up at seven o'clock.
          </Text>
        </View>

        {/* Spacing handled via bottom offset; no background overlay */}

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
        {/* <View style={styles.bottomOverlay}>
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
            
            {/* Action Buttons */}
          {/* <View style={styles.actionButtonsContainer}>
            {/* Left Button - Keyboard */}
            {/* <TouchableOpacity style={styles.actionButton} onPress={() => hiddenInputRef.current?.focus()}>
              <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <Rect x="52" y="52" width="52" height="52" rx="26" transform="rotate(180 52 52)" fill="#F6F7FA"/>
                <Path d="M21.5 18H30.5C31.12 18 31.67 18.02 32.16 18.09C34.79 18.38 35.5 19.62 35.5 23V29C35.5 32.38 34.79 33.62 32.16 33.91C31.67 33.98 31.12 34 30.5 34H21.5C20.88 34 20.33 33.98 19.84 33.91C17.21 33.62 16.5 32.38 16.5 29V23C16.5 19.62 17.21 18.38 19.84 18.09C20.33 18.02 20.88 18 21.5 18Z" stroke="#2F4291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M27.5 24H31" stroke="#2F4291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21 29.5H21.02H31" stroke="#2F4291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M24.0946 24H24.1036" stroke="#2F4291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21.0946 24H21.1036" stroke="#2F4291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>

            {/* Center Button - Main Action with Nested Layers */}
            {/* <View style={styles.mainActionButtonOuter}>
              <View style={styles.mainActionButtonMiddle}>
                <TouchableOpacity style={styles.mainActionButton}>
                  <Image 
                    source={require('@/assets/icons/ai-center-bottom-button.png')}
                    style={styles.mainActionButtonImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Right Button - Close */}
            {/* <TouchableOpacity style={styles.actionButton}>
              <Image 
                source={require('@/assets/icons/ai-right-bottom-button.png')}
                style={styles.actionButtonImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View> */}
          {/* Hidden Text Input to invoke keyboard (kept off-screen) */}
          {/* <TextInput ref={hiddenInputRef} style={styles.hiddenInput} /> */}
        {/* </View> */}
        
        {/* Center Button - Standalone */}
        <View style={styles.standaloneCenterButtonContainer}>
          <View style={styles.mainActionButtonOuter}>
            <View style={styles.mainActionButtonMiddle}>
              <TouchableOpacity style={styles.mainActionButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Defs>
                    <ClipPath id="clip0_4418_8041">
                      <Rect width="24" height="24" fill="white"/>
                    </ClipPath>
                  </Defs>
                  <G clipPath="url(#clip0_4418_8041)">
                    <Path d="M12.0001 21.9302C6.9601 21.9302 2.8501 17.8302 2.8501 12.7802V10.9002C2.8501 10.5102 3.1701 10.2002 3.5501 10.2002C3.9301 10.2002 4.2501 10.5202 4.2501 10.9002V12.7802C4.2501 17.0502 7.7201 20.5202 11.9901 20.5202C16.2601 20.5202 19.7301 17.0502 19.7301 12.7802V10.9002C19.7301 10.5102 20.0501 10.2002 20.4301 10.2002C20.8101 10.2002 21.1301 10.5202 21.1301 10.9002V12.7802C21.1501 17.8302 17.0401 21.9302 12.0001 21.9302Z" fill="white"/>
                    <Path d="M11.9999 2C8.6399 2 5.8999 4.74 5.8999 8.1V12.79C5.8999 16.15 8.6399 18.89 11.9999 18.89C15.3599 18.89 18.0999 16.15 18.0999 12.79V8.1C18.0999 4.74 15.3599 2 11.9999 2ZM14.1799 10.59C14.1099 10.86 13.8599 11.04 13.5899 11.04C13.5399 11.04 13.4799 11.03 13.4299 11.02C12.4099 10.74 11.3299 10.74 10.3099 11.02C9.9799 11.11 9.6499 10.92 9.5599 10.59C9.4699 10.27 9.6599 9.93 9.9899 9.84C11.2199 9.5 12.5199 9.5 13.7499 9.84C14.0799 9.93 14.2699 10.26 14.1799 10.59ZM15.0299 7.82C14.9399 8.07 14.7099 8.22 14.4599 8.22C14.3899 8.22 14.3199 8.21 14.2499 8.18C12.7199 7.62 11.0399 7.62 9.5099 8.18C9.1899 8.3 8.8399 8.14 8.7199 7.82C8.6099 7.51 8.7699 7.16 9.0899 7.04C10.8899 6.39 12.8699 6.39 14.6599 7.04C14.9799 7.16 15.1399 7.51 15.0299 7.82Z" fill="white"/>
                  </G>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </SafeAreaView>
      </View>
      </TouchableWithoutFeedback>
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
    fontSize: 14,
    fontWeight: '600',
    color: '#5C5C5C',
    lineHeight: 21, // 150% of 14
    textAlign: 'center',
    letterSpacing: -0.28, // -2% of 14
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
    width: 250, // Reduced from 300
    height: 250, // Reduced from 300
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
    position: 'absolute',
    bottom: 150, // Fixed position, doesn't move
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    alignItems: 'center',
    zIndex: 10,
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
  mainActionButtonOuter: {
    width: 102,
    height: 102,
    backgroundColor: '#E9FDF8',
    borderRadius: 92.7273,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainActionButtonMiddle: {
    width: 83.45,
    height: 83.45,
    backgroundColor: '#DFFCF4',
    borderRadius: 92.7273,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainActionButton: {
    width: 64.91,
    height: 64.91,
    backgroundColor: '#27EDB7',
    borderRadius: 46.3636,
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
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
    left: -1000,
  },
  standaloneCenterButtonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
