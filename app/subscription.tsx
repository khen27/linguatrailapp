import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import Svg, { Path, Rect } from 'react-native-svg';
import { PlanToggle, PlanCard, BackgroundDecorations } from '@/components/subscription';

export default function SubscriptionScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const fadeAnim = new Animated.Value(1);

  // Plan data structure
  const plans = {
    monthly: {
      basic: {
        title: 'Basic Plan (Starter)',
        price: '$2.99',
        period: 'Month',
        features: [
          { text: '2 Learning style mode' },
          { text: 'Upload up to 5 pages/notes per month' },
          { text: 'Basic progress tracking' }
        ],
        buttonText: 'Start your 7 days free trial',
        buttonSubtext: 'Cancel anytime. No hidden fees.'
      },
      pro: {
        title: 'Pro Plan',
        price: '$6.99',
        period: 'Month',
        features: [
          { text: 'Unlimited uploads (books, notes, screenshots)' },
          { text: 'Access to all learning styles (Gamified + Chat + AI + Voice)' },
          { text: 'Detailed progress & analytics' },
          { text: 'Daily challenges & streak rewards' }
        ],
        buttonText: 'Subscribe',
        buttonSubtext: undefined
      }
    },
    yearly: {
      basic: {
        title: 'Basic Plan (Starter)',
        price: '$2.39', // 20% discount
        period: 'Month',
        features: [
          { text: '2 Learning style mode' },
          { text: 'Upload up to 5 pages/notes per month' },
          { text: 'Basic progress tracking' }
        ],
        buttonText: 'Start your 7 days free trial',
        buttonSubtext: 'Cancel anytime. No hidden fees.'
      },
      pro: {
        title: 'Pro Plan',
        price: '$5.59', // 20% discount
        period: 'Month',
        features: [
          { text: 'Unlimited uploads (books, notes, screenshots)' },
          { text: 'Access to all learning styles (Gamified + Chat + AI + Voice)' },
          { text: 'Detailed progress & analytics' },
          { text: 'Daily challenges & streak rewards' }
        ],
        buttonText: 'Subscribe',
        buttonSubtext: undefined
      }
    }
  };

  const handleBasicPlanPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // TODO: Implement subscription logic
    console.log('Basic plan selected:', selectedPeriod);
  };

  const handleProPlanPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // TODO: Implement subscription logic
    console.log('Pro plan selected:', selectedPeriod);
  };

  const handlePeriodChange = (period: 'monthly' | 'yearly') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    // Subtle fade animation when switching periods
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    
    setSelectedPeriod(period);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Decorations */}
      <BackgroundDecorations />
      
      {/* Header with back button */}
      <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.back();
          }}
        >
          <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
            <Rect 
              x={42} 
              y={42} 
              width={42} 
              height={42} 
              rx={21} 
              transform="rotate(180 42 42)" 
              fill="white"
            />
            <Path 
              d="M18.9753 15.9417L13.917 21L18.9753 26.0583" 
              stroke="#263574" 
              strokeWidth="1.5" 
              strokeMiterlimit="10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <Path 
              d="M28.0836 21L14.0586 21" 
              stroke="#263574" 
              strokeWidth="1.5" 
              strokeMiterlimit="10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* Static Header Content */}
      <View style={styles.staticContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Choose Your Plan</Text>
          <Text style={styles.subtitle}>Start free or unlock more features with premium</Text>
        </View>

        {/* Monthly/Yearly Toggle */}
        <PlanToggle 
          selectedPeriod={selectedPeriod}
          onPeriodChange={handlePeriodChange}
        />
      </View>

      {/* Scrollable Plan Cards */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.plansSection, { opacity: fadeAnim }]}>
          {/* Basic Plan */}
          <PlanCard
            title={plans[selectedPeriod].basic.title}
            price={plans[selectedPeriod].basic.price}
            period={plans[selectedPeriod].basic.period}
            features={plans[selectedPeriod].basic.features}
            buttonText={plans[selectedPeriod].basic.buttonText}
            buttonSubtext={plans[selectedPeriod].basic.buttonSubtext}
            isPro={false}
            onButtonPress={handleBasicPlanPress}
          />

          {/* Pro Plan */}
          <PlanCard
            title={plans[selectedPeriod].pro.title}
            price={plans[selectedPeriod].pro.price}
            period={plans[selectedPeriod].pro.period}
            features={plans[selectedPeriod].pro.features}
            buttonText={plans[selectedPeriod].pro.buttonText}
            buttonSubtext={plans[selectedPeriod].pro.buttonSubtext}
            isPro={true}
            onButtonPress={handleProPlanPress}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263574', // Primary blue background
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  backButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  staticContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.44,
    lineHeight: 26,
    fontFamily: 'Manrope',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.7,
    letterSpacing: -0.32,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  plansSection: {
    paddingBottom: 20,
  },
});
