import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Platform, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScreenHeader } from '@/components/ui/screen-header';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

const { width: screenWidth } = Dimensions.get('window');

export default function ConversationPracticeScreen() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<number | null>(2); // Pre-select "Hello" option
  const insets = useSafeAreaInsets();
  const progressBarBg = useThemeColor({ light: '#F6F7FA', dark: '#1C2124' }, 'text');

  const bottomSpacing = Platform.OS === 'ios' ? 16 : Math.max(insets.bottom, 16);

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
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
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
                progress={0.33}
                height={10}
                backgroundColor={progressBarBg}
                fillColor="#27EDB7"
              />
            </View>
          </View>

          {/* Content overlay */}
          <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.whiteOverlay}>
            <ScrollView
              style={styles.quizScroll}
              contentContainerStyle={[styles.quizContent, { paddingBottom: bottomSpacing + 80 }]} // button height + spacing
              showsVerticalScrollIndicator={false}
            >
              {/* Question Card */}
              <View style={styles.questionCard}>
                <Image 
                  source={require('@/assets/icons/game-background.png')}
                  style={styles.questionBackgroundImage}
                  resizeMode="cover"
                />
                <ThemedText style={styles.questionTextOverlay}>
                  What Does "Hola" Mean?
                </ThemedText>
              </View>

              {/* Answer Options Grid */}
              <View style={styles.optionsGrid}>
                <TouchableOpacity onPress={() => handleOptionSelect(0)}>
                  <ThemedView lightColor="rgba(246, 247, 250, 0.5)" darkColor="#1C2124" style={[styles.optionButton, selectedOption === 0 && styles.selectedOption]}>
                    <ThemedText lightColor={selectedOption === 0 ? '#1FBE92' : undefined} darkColor={selectedOption === 0 ? '#27EDB7' : undefined} style={[styles.optionText, selectedOption === 0 && styles.selectedOptionText]}>
                      👋 Bye
                    </ThemedText>
                  </ThemedView>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOptionSelect(1)}>
                  <ThemedView lightColor="rgba(246, 247, 250, 0.5)" darkColor="#1C2124" style={[styles.optionButton, selectedOption === 1 && styles.selectedOption]}>
                    <ThemedText lightColor={selectedOption === 1 ? '#1FBE92' : undefined} darkColor={selectedOption === 1 ? '#27EDB7' : undefined} style={[styles.optionText, selectedOption === 1 && styles.selectedOptionText]}>
                      🙏 Thank you
                    </ThemedText>
                  </ThemedView>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOptionSelect(2)}>
                  <ThemedView lightColor="rgba(246, 247, 250, 0.5)" darkColor="#1C2124" style={[styles.optionButton, selectedOption === 2 && styles.selectedOption]}>
                    <ThemedText lightColor={selectedOption === 2 ? '#1FBE92' : undefined} darkColor={selectedOption === 2 ? '#27EDB7' : undefined} style={[styles.optionText, selectedOption === 2 && styles.selectedOptionText]}>
                      😊 Hello
                    </ThemedText>
                  </ThemedView>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOptionSelect(3)}>
                  <ThemedView lightColor="rgba(246, 247, 250, 0.5)" darkColor="#1C2124" style={[styles.optionButton, selectedOption === 3 && styles.selectedOption]}>
                    <ThemedText lightColor={selectedOption === 3 ? '#1FBE92' : undefined} darkColor={selectedOption === 3 ? '#27EDB7' : undefined} style={[styles.optionText, selectedOption === 3 && styles.selectedOptionText]}>
                      🤲 Please
                    </ThemedText>
                  </ThemedView>
                </TouchableOpacity>
              </View>

              {/* Next Button */}
              <View style={[styles.nextButtonContainer, { marginBottom: bottomSpacing, marginTop: 24 }]}>
                <TouchableOpacity 
                  style={[styles.nextButton, selectedOption === null && styles.nextButtonDisabled]}
                  onPress={handleNextPress}
                  disabled={selectedOption === null}
                >
                  <ThemedText style={[styles.nextButtonText, selectedOption === null && styles.nextButtonTextDisabled]}>
                    Next
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.bottomGradient} pointerEvents="none" />
          </ThemedView>
        </SafeAreaView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: 'hidden',
  },
  quizScroll: {
    flex: 1,
  },
  quizContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 24,
  },
  questionCard: {
    height: 271,
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  questionBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  questionTextOverlay: {
    position: 'absolute',
    left: 22,
    top: 21,
    right: 22,
    fontSize: 22,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 29,
    letterSpacing: -0.32,
    fontFamily: 'Urbanist',
    textTransform: 'capitalize',
    zIndex: 2,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    columnGap: 12,
  },
  optionButton: {
    width: (screenWidth - 24 * 2 - 12) / 2,
    minHeight: 120,
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
    lineHeight: 24,
    letterSpacing: -0.32,
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  selectedOptionText: {
    fontWeight: '600',
  },
  nextButtonContainer: {
    width: '100%',
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
  },
});
