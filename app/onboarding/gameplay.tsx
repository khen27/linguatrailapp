import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackgroundDecorations } from '@/components/subscription/BackgroundDecorations';

const { width: screenWidth } = Dimensions.get('window');

export default function OnboardingGameplayScreen() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const insets = useSafeAreaInsets();
  
  // Responsive card width with constraints
  const cardWidth = Math.min(Math.max(screenWidth - 32, 320), 359);
  
  // On iOS, use original 25px bottom spacing. On Android, add safe area inset to avoid nav bar overlap
  const bottomSpacing = Platform.OS === 'ios' ? 25 : 25 + insets.bottom;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    // Brief pause to show the green selection state, then navigate
    setTimeout(() => {
      router.replace('/onboarding/gameplay-chat');
    }, 400);
  };

  return (
    <View style={styles.container}>
      {/* Background Decorations */}
      <BackgroundDecorations />
      
      {/* Semi-transparent overlay */}
      <View style={styles.overlay} />
      
      {/* Main Content Card */}
      <View style={[styles.contentCard, { width: cardWidth, marginLeft: -(cardWidth / 2), bottom: bottomSpacing }]}>
        <View style={styles.contentContainer}>
          {/* Progress Bar */}
          <View style={styles.progressSection}>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Title and Subtitle */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Learn by Vocabulary Card</Text>
            <Text style={styles.subtitle}>Its so easy to chat with your learning assistant.</Text>
          </View>

          {/* Question Card */}
          <View style={styles.questionCard}>
            <Image 
              source={require('../../assets/icons/game-background.png')}
              style={styles.questionBackgroundImage}
              resizeMode="cover"
            />
            <Text style={styles.questionTextOverlay}>
              What Does "Hola" Mean?
            </Text>
          </View>

          {/* Answer Options Grid */}
          <View style={styles.optionsGrid}>
            <TouchableOpacity 
              style={[styles.optionButton, selectedOption === 0 && styles.selectedOption]}
              onPress={() => handleOptionSelect(0)}
              activeOpacity={0.8}
            >
              <Text style={[styles.optionText, selectedOption === 0 && styles.selectedOptionText]}>
                👋 Bye
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.optionButton, selectedOption === 1 && styles.selectedOption]}
              onPress={() => handleOptionSelect(1)}
              activeOpacity={0.8}
            >
              <Text style={[styles.optionText, selectedOption === 1 && styles.selectedOptionText]}>
                🙏 Thank you
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.optionButton, selectedOption === 2 && styles.selectedOption]}
              onPress={() => handleOptionSelect(2)}
              activeOpacity={0.8}
            >
              <Text style={[styles.optionText, selectedOption === 2 && styles.selectedOptionText]}>
                😊 Hello
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.optionButton, selectedOption === 3 && styles.selectedOption]}
              onPress={() => handleOptionSelect(3)}
              activeOpacity={0.8}
            >
              <Text style={[styles.optionText, selectedOption === 3 && styles.selectedOptionText]}>
                🤲 Please
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263574',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  contentCard: {
    position: 'absolute',
    // width, marginLeft, and bottom are now set dynamically in component for responsiveness and safe area
    height: 742,
    left: '50%',
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
    zIndex: 10,
  },
  contentContainer: {
    width: '100%',
    gap: 20,
  },
  progressSection: {
    gap: 20,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    width: '33%', // 33% progress for demo
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  titleSection: {
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: -0.02,
    color: '#263574',
    textAlign: 'center',
    fontFamily: 'Urbanist',
    // Removed fixed width for responsiveness
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#5C5C5C',
    opacity: 0.7,
    textAlign: 'center',
    fontFamily: 'Urbanist',
    // Removed fixed width for responsiveness
  },
  questionCard: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#DFFCF4',
  },
  questionBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    textTransform: 'capitalize',
    zIndex: 2,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionButton: {
    width: '48%',
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
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  selectedOptionText: {
    fontWeight: '600',
    color: '#1FBE92',
  },
});

