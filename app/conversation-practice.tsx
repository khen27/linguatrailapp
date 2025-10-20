import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScreenHeader } from '@/components/ui/screen-header';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function ConversationPracticeScreen() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<number | null>(2); // Pre-select "Hello" option

  const handleBackPress = () => {
    router.back();
  };

  const handleMenuPress = () => {
    // TODO: Implement menu functionality
    console.log('Menu pressed');
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextPress = () => {
    if (selectedOption !== null) {
      // TODO: Navigate to next question or complete session
      console.log('Next pressed with selected option:', selectedOption);
    }
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
          {/* Header */}
          <View style={styles.headerContainer}>
            <ScreenHeader
              title="English Speaking Session"
              onBackPress={handleBackPress}
              onMenuPress={handleMenuPress}
            />

            {/* Progress Bar */}
            <View style={styles.progressSection}>
              <ProgressBar
                progress={0.33} // 33% progress for demo
                height={10}
                backgroundColor="#F6F7FA"
                fillColor="#27EDB7"
              />
            </View>
          </View>

          {/* White Overlay Container */}
          <View style={styles.whiteOverlay}>
            {/* Question Card */}
            <View style={styles.questionCard}>
              {/* Background decorative shapes */}
              <View style={styles.backgroundShapes}>
                <View style={styles.yellowBase} />
                <View style={styles.greenOverlay1} />
                <View style={styles.greenOverlay2} />
              </View>

              {/* Decorative image */}
              <View style={styles.decorativeImageContainer}>
                {/* Placeholder for decorative image */}
                <View style={styles.decorativeImagePlaceholder} />
              </View>

              {/* Question text */}
              <Text style={styles.questionText}>
                What Does "Hola" Mean?
              </Text>
            </View>

            {/* Answer Options Grid */}
            <View style={styles.optionsGrid}>
              <TouchableOpacity 
                style={[styles.optionButton, selectedOption === 0 && styles.selectedOption]}
                onPress={() => handleOptionSelect(0)}
              >
                <Text style={[styles.optionText, selectedOption === 0 && styles.selectedOptionText]}>
                  👋 Bye
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.optionButton, selectedOption === 1 && styles.selectedOption]}
                onPress={() => handleOptionSelect(1)}
              >
                <Text style={[styles.optionText, selectedOption === 1 && styles.selectedOptionText]}>
                  🙏 Thank you
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.optionButton, selectedOption === 2 && styles.selectedOption]}
                onPress={() => handleOptionSelect(2)}
              >
                <Text style={[styles.optionText, selectedOption === 2 && styles.selectedOptionText]}>
                  😊 Hello
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.optionButton, selectedOption === 3 && styles.selectedOption]}
                onPress={() => handleOptionSelect(3)}
              >
                <Text style={[styles.optionText, selectedOption === 3 && styles.selectedOptionText]}>
                  🤲 Please
                </Text>
              </TouchableOpacity>
            </View>

            {/* Next Button */}
            <TouchableOpacity 
              style={[styles.nextButton, selectedOption === null && styles.nextButtonDisabled]}
              onPress={handleNextPress}
              disabled={selectedOption === null}
            >
              <Text style={[styles.nextButtonText, selectedOption === null && styles.nextButtonTextDisabled]}>
                Next
              </Text>
            </TouchableOpacity>

            {/* Bottom Gradient Overlay */}
            <View style={styles.bottomGradient} />
          </View>

          {/* iOS Home Indicator */}
          <View style={styles.homeIndicatorContainer}>
            <View style={styles.homeIndicator} />
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
  headerContainer: {
    paddingHorizontal: 24,
  },
  progressSection: {
    marginTop: 24,
    marginBottom: 24,
  },
  whiteOverlay: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },
  questionCard: {
    height: 271,
    backgroundColor: '#DFFCF4',
    borderRadius: 12,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundShapes: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  yellowBase: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFE49C',
  },
  greenOverlay1: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#27EDB7',
    opacity: 0.3,
  },
  greenOverlay2: {
    position: 'absolute',
    width: '76%',
    height: '45%',
    left: 0,
    bottom: 0,
    backgroundColor: '#27EDB7',
    opacity: 0.3,
  },
  decorativeImageContainer: {
    position: 'absolute',
    width: 252,
    height: 298,
    right: -75,
    top: 12,
    zIndex: 1,
  },
  decorativeImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
  },
  questionText: {
    position: 'absolute',
    left: 22,
    top: 21,
    width: 283,
    height: 58,
    fontSize: 22,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 29,
    letterSpacing: -0.44,
    fontFamily: 'Urbanist',
    textTransform: 'capitalize',
    zIndex: 2,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  optionButton: {
    width: 158.5,
    height: 120,
    backgroundColor: 'rgba(246, 247, 250, 0.5)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  selectedOption: {
    backgroundColor: '#E9FDF8',
    borderWidth: 1.25,
    borderColor: '#1FBE92',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#263574',
    lineHeight: 24,
    letterSpacing: -0.32,
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  selectedOptionText: {
    fontWeight: '600',
    color: '#1FBE92',
  },
  nextButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F4291',
    lineHeight: 24,
    letterSpacing: -0.32,
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#E0E0E0',
    opacity: 0.6,
  },
  nextButtonTextDisabled: {
    color: '#9E9E9E',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 109,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    // Note: Linear gradient would require react-native-linear-gradient or similar library
  },
  homeIndicatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#263574',
    borderRadius: 100,
  },
});
