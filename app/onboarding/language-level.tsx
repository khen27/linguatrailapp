import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

export default function LanguageLevelScreen() {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState<string | null>('no-prior');

  const levels = [
    { 
      id: 'no-prior', 
      name: 'No prior knowledge',
      icon: 'all-grey-bar',
    },
    { 
      id: 'beginner', 
      name: 'Beginner (Spanish 1–2)',
      icon: 'red-bar',
    },
    { 
      id: 'intermediate', 
      name: 'Intermediate (Spanish 3)',
      icon: 'yellow-bar',
    },
    { 
      id: 'advanced', 
      name: 'Advanced (Spanish 4)',
      icon: 'green-full-bar',
    },
    { 
      id: 'fluent', 
      name: 'Fluent / Prep for Certification',
      icon: 'lightning',
    },
  ];

  const handleContinue = () => {
    if (selectedLevel) {
      // TODO: Save selected level to user preferences/state
      router.push('/onboarding/your-goal');
    }
  };

  const renderIcon = (iconType: string) => {
    if (iconType === 'lightning') {
      // Lightning bolt icon
      return (
        <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <Path 
            d="M19.4024 11.6133H16.0549V3.81332C16.0549 1.99332 15.0691 1.62499 13.8666 2.98999L12.9999 3.97582L5.66572 12.3175C4.65822 13.455 5.08072 14.3867 6.59739 14.3867H9.94489V22.1867C9.94489 24.0067 10.9307 24.375 12.1332 23.01L12.9999 22.0242L20.3341 13.6825C21.3416 12.545 20.9191 11.6133 19.4024 11.6133Z" 
            fill="#2F4291"
          />
        </Svg>
      );
    } else {
      // Bar chart icon with different colors based on level
      // Note: SVG order is third, second, first (shortest to tallest bars)
      const barColors = {
        'all-grey-bar': { first: '#E0E3EF', second: '#E0E3EF', third: '#E0E3EF' },
        'red-bar': { first: '#E0E3EF', second: '#E0E3EF', third: '#F84E5B' },
        'yellow-bar': { first: '#E0E3EF', second: '#F5C63B', third: '#F5C63B' },
        'green-full-bar': { first: '#1FBE92', second: '#1FBE92', third: '#1FBE92' },
      };
      
      const colors = barColors[iconType as keyof typeof barColors] || barColors['all-grey-bar'];
      
      return (
        <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <Path d="M22.75 24.6458H3.25C2.80583 24.6458 2.4375 24.2775 2.4375 23.8333C2.4375 23.3892 2.80583 23.0208 3.25 23.0208H22.75C23.1942 23.0208 23.5625 23.3892 23.5625 23.8333C23.5625 24.2775 23.1942 24.6458 22.75 24.6458Z" fill="#5C5C5C"/>
          <Path d="M6.06667 9.07833H4.33333C3.7375 9.07833 3.25 9.56583 3.25 10.1617V19.5C3.25 20.0958 3.7375 20.5833 4.33333 20.5833H6.06667C6.6625 20.5833 7.15 20.0958 7.15 19.5V10.1617C7.15 9.555 6.6625 9.07833 6.06667 9.07833Z" fill={colors.third}/>
          <Path d="M13.8665 5.6225H12.1331C11.5373 5.6225 11.0498 6.11 11.0498 6.70583V19.5C11.0498 20.0958 11.5373 20.5833 12.1331 20.5833H13.8665C14.4623 20.5833 14.9498 20.0958 14.9498 19.5V6.70583C14.9498 6.11 14.4623 5.6225 13.8665 5.6225Z" fill={colors.second}/>
          <Path d="M21.6668 2.16667H19.9334C19.3376 2.16667 18.8501 2.65417 18.8501 3.25V19.5C18.8501 20.0958 19.3376 20.5833 19.9334 20.5833H21.6668C22.2626 20.5833 22.7501 20.0958 22.7501 19.5V3.25C22.7501 2.65417 22.2626 2.16667 21.6668 2.16667Z" fill={colors.first}/>
        </Svg>
      );
    }
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#091729" />

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
        activeOpacity={0.8}
      >
        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <Path 
            d="M18.9748 15.9417L13.9165 21L18.9748 26.0583" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M28.0831 21L14.0581 21" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      {/* Main Content Card */}
      <View style={styles.contentCard}>
        <View style={styles.contentContainer}>
          {/* Progress Bar Section */}
          <View style={styles.progressSection}>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Title and Subtitle */}
          <View style={styles.titleSection}>
            <Text style={styles.mainTitle}>Language Level</Text>
            <Text style={styles.subtitle}>What's your current level?</Text>
          </View>

          {/* Level List */}
          <View style={styles.levelList}>
            {levels.map((level) => {
              const isSelected = level.id === selectedLevel;
              return (
                <TouchableOpacity
                  key={level.id}
                  style={[
                    styles.levelItem,
                    isSelected && styles.levelItemSelected,
                  ]}
                  onPress={() => setSelectedLevel(level.id)}
                  activeOpacity={0.8}
                >
                  {/* Icon */}
                  <View style={styles.iconContainer}>
                    {renderIcon(level.icon)}
                  </View>

                  {/* Level Name */}
                  <Text style={[
                    styles.levelName,
                    isSelected && styles.levelNameSelected,
                  ]}>
                    {level.name}
                  </Text>

                  {/* Radio Button */}
                  <View style={[
                    styles.radioButton,
                    isSelected && styles.radioButtonSelected,
                  ]} />
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Continue Button */}
          <TouchableOpacity 
            style={[
              styles.continueButton,
              !selectedLevel && styles.continueButtonDisabled
            ]} 
            activeOpacity={0.8}
            onPress={handleContinue}
            disabled={!selectedLevel}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#091729',
  },
  // Back Button
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 10,
  },
  // Main Content Card
  contentCard: {
    position: 'absolute',
    top: 122, // Positioned to start below back button
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingBottom: 32,
  },
  contentContainer: {
    flex: 1,
    gap: 24,
    paddingHorizontal: 16,
  },
  // Progress Bar
  progressSection: {
    gap: 8,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    width: '67%', // Approximate 67% progress (step 2 of 3)
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  // Title Section
  titleSection: {
    gap: 8,
  },
  mainTitle: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.h2,
    lineHeight: 26,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.primary,
    textAlign: 'center',
    width: '100%',
  },
  subtitle: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    color: Colors.text.secondary,
    textAlign: 'center',
    opacity: 0.7,
    width: '100%',
  },
  // Level List
  levelList: {
    gap: 8,
  },
  levelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    gap: Spacing.sm,
    width: '100%',
    height: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.25,
    borderColor: 'transparent',
  },
  levelItemSelected: {
    backgroundColor: '#E9FDF8',
    borderColor: '#1FBE92',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },
  iconContainer: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelName: {
    flex: 1,
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.primary,
  },
  levelNameSelected: {
    fontWeight: Typography.weights.semibold as '600',
    color: '#1FBE92',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.25,
    borderColor: '#E0E3EF',
    backgroundColor: '#FFFFFF',
  },
  radioButtonSelected: {
    borderWidth: 4,
    borderColor: '#1FBE92',
  },
  // Continue Button
  continueButton: {
    marginTop: 'auto',
    width: '100%',
    height: 52,
    backgroundColor: Colors.brand.primary,
    borderRadius: BorderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.accent,
    textAlign: 'center',
  },
});

