import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback, Platform, Image, UIManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { Svg, Rect, Path, G, ClipPath, Defs, Mask } from 'react-native-svg';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScreenHeader } from '@/components/ui/screen-header';
import { SpeakingIcon } from '@/components/ui/speaking-icon';
import LottieView from 'lottie-react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const LOTTIE_VIEW_NAME = 'LottieAnimationView';
const isLottieSupported = Platform.OS !== 'web' && (
  UIManager.getViewManagerConfig?.(LOTTIE_VIEW_NAME) != null ||
  UIManager.hasViewManagerConfig?.(LOTTIE_VIEW_NAME) === true
);

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
              What happened yesterday morning?
            </Text>
          </View>

        </View>

        {/* User Response Text - Absolutely Positioned */}
        <View style={styles.responseSection}>
          <Text style={styles.responseText}>
            Yesterday morning I woke up at 7am. I had a lot of homework, so I decided to start my day earlier than usual.
          </Text>
        </View>

        {/* Spacing handled via bottom offset; no background overlay */}

        {/* AI Charm Animation - Absolutely Positioned */}
        <View style={styles.aiCharmContainer}>
          {isLottieSupported ? (
            <LottieView
              source={require('@/assets/animations/wave-animation.json')}
              autoPlay
              loop
              style={styles.aiCharmImage}
            />
          ) : (
            <Image 
              source={require('@/assets/icons/ai-charm.png')}
              style={styles.aiCharmImage}
              resizeMode="contain"
            />
          )}
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
          <TouchableOpacity>
            <Svg width="102" height="102" viewBox="0 0 102 102" fill="none">
              <Defs>
                <ClipPath id="clip0_6429_3901">
                  <Rect width="32" height="32" fill="white" transform="translate(35.0005 35)"/>
                </ClipPath>
                <Mask id="mask0_6429_3901" maskUnits="userSpaceOnUse" x="35" y="35" width="33" height="32">
                  <Path d="M67.0005 35H35.0005V67H67.0005V35Z" fill="white"/>
                </Mask>
              </Defs>
              <Rect width="102" height="102" rx="51" fill="#E9FDF8"/>
              <Rect x="9.27295" y="9.27272" width="83.4545" height="83.4545" rx="41.7273" fill="#BCF9E9"/>
              <Rect x="18.5459" y="18.5455" width="64.9091" height="64.9091" rx="32.4545" fill="#68C0A5"/>
              <G clipPath="url(#clip0_6429_3901)">
                <G mask="url(#mask0_6429_3901)">
                  <Path d="M51.0008 64.2403C44.2808 64.2403 38.8008 58.7736 38.8008 52.0403V49.5336C38.8008 49.0136 39.2274 48.6003 39.7341 48.6003C40.2408 48.6003 40.6674 49.0269 40.6674 49.5336V52.0403C40.6674 57.7336 45.2941 62.3603 50.9874 62.3603C56.6808 62.3603 61.3074 57.7336 61.3074 52.0403V49.5336C61.3074 49.0136 61.7341 48.6003 62.2408 48.6003C62.7474 48.6003 63.1741 49.0269 63.1741 49.5336V52.0403C63.2008 58.7736 57.7208 64.2403 51.0008 64.2403Z" fill="#EBF8F7"/>
                  <Path d="M51.0005 37.6667C46.5205 37.6667 42.8672 41.32 42.8672 45.8V52.0534C42.8672 56.5334 46.5205 60.1867 51.0005 60.1867C55.4805 60.1867 59.1339 56.5334 59.1339 52.0534V45.8C59.1339 41.32 55.4805 37.6667 51.0005 37.6667ZM53.9072 49.12C53.8139 49.48 53.4805 49.72 53.1205 49.72C53.0539 49.72 52.9739 49.7067 52.9072 49.6934C51.5472 49.32 50.1072 49.32 48.7472 49.6934C48.3072 49.8134 47.8672 49.56 47.7472 49.12C47.6272 48.6934 47.8805 48.24 48.3205 48.12C49.9605 47.6667 51.6939 47.6667 53.3339 48.12C53.7739 48.24 54.0272 48.68 53.9072 49.12ZM55.0405 45.4267C54.9205 45.76 54.6139 45.96 54.2805 45.96C54.1872 45.96 54.0939 45.9467 54.0005 45.9067C51.9605 45.16 49.7205 45.16 47.6805 45.9067C47.2539 46.0667 46.7872 45.8534 46.6272 45.4267C46.4805 45.0134 46.6939 44.5467 47.1205 44.3867C49.5205 43.52 52.1605 43.52 54.5472 44.3867C54.9739 44.5467 55.1872 45.0134 55.0405 45.4267Z" fill="#EBF8F7"/>
                </G>
              </G>
            </Svg>
          </TouchableOpacity>
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
    color: '#000000',
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
    bottom: 220, // Moved up to be between animation and button
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
    zIndex: 10,
  },
  responseText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 26.4, // 120% of 22
    textAlign: 'left',
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
