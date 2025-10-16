import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddScreen() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { id: 'English', name: 'English', flag: require('../assets/icons/english-flag.png') },
    { id: 'French', name: 'French', flag: require('../assets/icons/french-flag.png') },
    { id: 'German', name: 'German', flag: require('../assets/icons/german-flag.png') },
    { id: 'Italian', name: 'Italian', flag: require('../assets/icons/italian-flag.png') },
    { id: 'Czech', name: 'Czech', flag: require('../assets/icons/czech-flag.png') },
    { id: 'Spanish', name: 'Spanish', flag: require('../assets/icons/spanish-flag.png') },
  ];

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Header Navigation */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7.5 15L2.5 10L7.5 5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M2.5 10H17.5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.headerTitle}>Create New Learning</Text>

          {/* Close Button */}
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M15 5L5 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M5 5L15 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Main Content Card */}
      <View style={styles.contentCard}>
        {/* Bottom Gradient Overlay */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
          style={styles.gradientOverlay}
          pointerEvents="none"
        />

        {/* Content Container */}
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
            <Text style={styles.subtitle}>What language are you down to tackle?</Text>
          </View>

          {/* Language List */}
          <ScrollView 
            style={styles.languageList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.languageListContent}
          >
            {languages.map((language, index) => {
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
          </ScrollView>

          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton} activeOpacity={0.8}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicatorContainer}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  safeArea: {
    zIndex: 10,
  },
  // Header Navigation
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    gap: 8,
    width: '100%',
    height: 42,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 1036.36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
    textAlign: 'center',
  },
  // Main Content Card
  contentCard: {
    position: 'absolute',
    top: 122, // 52px (back button top) + 42px (back button height) + 28px gap (14px + 14px more)
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    paddingBottom: 32,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 109,
    pointerEvents: 'none',
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 24,
    zIndex: 2,
    paddingHorizontal: 0,
  },
  // Progress Bar
  progressSection: {
    paddingHorizontal: 24,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    width: 109,
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  // Title Section
  titleSection: {
    paddingHorizontal: 24,
    gap: 8,
  },
  mainTitle: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.44,
    color: '#263574',
    textAlign: 'left',
    width: '100%',
  },
  subtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#5C5C5C',
    textAlign: 'left',
    opacity: 0.7,
    width: '100%',
  },
  // Language List
  languageList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  languageListContent: {
    gap: 8,
    paddingBottom: 20,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
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
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
  },
  languageNameSelected: {
    fontWeight: '600',
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
  // Next Button
  nextButton: {
    marginHorizontal: 24,
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    zIndex: 3,
  },
  nextButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#2F4291',
    textAlign: 'center',
  },
  // Home Indicator
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
