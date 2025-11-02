import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Modal } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';
import { BackgroundDecorations } from '@/components/subscription/BackgroundDecorations';

export default function YourGoalScreen() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string | null>('school-studies');
  const [showGameModal, setShowGameModal] = useState(false);

  const goals = [
    { 
      id: 'daily-communication', 
      name: 'Daily Communication',
      icon: require('../../assets/icons/goal1.png'),
    },
    { 
      id: 'school-studies', 
      name: 'School studies',
      icon: require('../../assets/icons/goal2.png'),
    },
    { 
      id: 'career-growth', 
      name: 'Career & Professional Growth',
      icon: require('../../assets/icons/goal3.png'),
    },
    { 
      id: 'cultural-connection', 
      name: 'Cultural Connection',
      icon: require('../../assets/icons/goal4.png'),
    },
    { 
      id: 'education-access', 
      name: 'Education & Knowledge Access',
      icon: require('../../assets/icons/goal5.png'),
    },
    { 
      id: 'cognitive-growth', 
      name: 'Cognitive Growth',
      icon: require('../../assets/icons/goal6.png'),
    },
    { 
      id: 'travel-exploration', 
      name: 'Travel & Exploration',
      icon: require('../../assets/icons/goal7.png'),
    },
  ];

  const handleContinue = () => {
    if (selectedGoal) {
      // TODO: Save selected goal to user preferences/state
      setShowGameModal(true);
    }
  };

  const handleTryGame = () => {
    setShowGameModal(false);
    // Navigate to the onboarding gameplay screen
    router.push('/onboarding/gameplay');
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
            <Text style={styles.mainTitle}>Your Goal</Text>
            <Text style={styles.subtitle}>Why are you learning?</Text>
          </View>

          {/* Goal List */}
          <View style={styles.goalList}>
            {goals.map((goal) => {
              const isSelected = goal.id === selectedGoal;
              return (
                <TouchableOpacity
                  key={goal.id}
                  style={[
                    styles.goalItem,
                    isSelected && styles.goalItemSelected,
                  ]}
                  onPress={() => setSelectedGoal(goal.id)}
                  activeOpacity={0.8}
                >
                  {/* Icon */}
                  <Image 
                    source={goal.icon} 
                    style={styles.icon}
                    resizeMode="contain"
                  />

                  {/* Goal Name */}
                  <Text style={[
                    styles.goalName,
                    isSelected && styles.goalNameSelected,
                  ]}>
                    {goal.name}
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
              !selectedGoal && styles.continueButtonDisabled
            ]} 
            activeOpacity={0.8}
            onPress={handleContinue}
            disabled={!selectedGoal}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Game Modal */}
      <Modal
        visible={showGameModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          {/* Semi-transparent overlay */}
          <View style={styles.modalOverlay} />
          
          {/* Modal/Popup Card */}
          <View style={styles.modalCard}>
            <View style={styles.modalContent}>
              {/* Game Controller Icon */}
              <Image 
                source={require('../../assets/icons/game-controller.png')} 
                style={styles.gameIcon}
                resizeMode="contain"
              />

              {/* Title */}
              <Text style={styles.modalTitle}>You are all set!</Text>

              {/* Subtitle */}
              <Text style={styles.modalSubtitle}>
                Try out games to understand how easy is to learn languages!
              </Text>

              {/* Try the Game Button */}
              <TouchableOpacity 
                style={styles.tryButton}
                onPress={handleTryGame}
                activeOpacity={0.8}
              >
                <Text style={styles.tryButtonText}>Try the Game</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    width: '100%', // 100% progress (final step)
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
  // Goal List
  goalList: {
    gap: 8,
  },
  goalItem: {
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
  goalItemSelected: {
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
  icon: {
    width: 26,
    height: 26,
  },
  goalName: {
    flex: 1,
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.primary,
  },
  goalNameSelected: {
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
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 541,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    width: 327,
    height: 425,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    paddingHorizontal: 24,
  },
  gameIcon: {
    width: 85,
    height: 85,
  },
  modalTitle: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.02,
    color: '#263574',
    textAlign: 'center',
    width: 279,
  },
  modalSubtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#5C5C5C',
    opacity: 0.7,
    textAlign: 'center',
    width: 279,
  },
  tryButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  tryButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#2F4291',
    textAlign: 'center',
  },
});

