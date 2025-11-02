import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

export default function ChooseLanguageScreen() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = [
    { id: 'English', name: 'English', flag: require('../../assets/icons/english-flag.png') },
    { id: 'French', name: 'French', flag: require('../../assets/icons/french-flag.png') },
    { id: 'German', name: 'German', flag: require('../../assets/icons/german-flag.png') },
    { id: 'Italian', name: 'Italian', flag: require('../../assets/icons/italian-flag.png') },
    { id: 'Czech', name: 'Czech', flag: require('../../assets/icons/czech-flag.png') },
    { id: 'Spanish', name: 'Spanish', flag: require('../../assets/icons/spanish-flag.png') },
  ];

  const handleContinue = () => {
    if (selectedLanguage) {
      // TODO: Save selected language to user preferences/state
      // router.push('/onboarding/next-step');
      router.replace('/(tabs)'); // Temporary navigation to main app
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
            <Text style={styles.mainTitle}>Choose Language</Text>
            <Text style={styles.subtitle}>What language are you down to tackle first?</Text>
          </View>

          {/* Language List */}
          <View style={styles.languageList}>
            {languages.map((language) => {
              const isSelected = language.id === selectedLanguage;
              return (
                <TouchableOpacity
                  key={language.id}
                  style={[
                    styles.languageItem,
                    isSelected && styles.languageItemSelected,
                  ]}
                  onPress={() => setSelectedLanguage(language.id)}
                  activeOpacity={0.8}
                >
                  {/* Flag Image */}
                  <Image 
                    source={language.flag} 
                    style={styles.flagImage}
                    resizeMode="cover"
                  />

                  {/* Language Name */}
                  <Text style={[
                    styles.languageName,
                    isSelected && styles.languageNameSelected,
                  ]}>
                    {language.name}
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
              !selectedLanguage && styles.continueButtonDisabled
            ]} 
            activeOpacity={0.8}
            onPress={handleContinue}
            disabled={!selectedLanguage}
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
    width: '25%', // Approximate 25% progress
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
  // Language List
  languageList: {
    gap: 8,
  },
  languageItem: {
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
  languageItemSelected: {
    backgroundColor: '#E9FDF8',
    borderColor: '#1FBE92',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },
  flagImage: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  languageName: {
    flex: 1,
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.primary,
  },
  languageNameSelected: {
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
