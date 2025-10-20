import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PlanToggle, PlanCard, BackgroundDecorations } from '@/components/subscription';

export default function SubscriptionScreen() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly');

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
    // TODO: Implement subscription logic
    console.log('Basic plan selected:', selectedPeriod);
  };

  const handleProPlanPress = () => {
    // TODO: Implement subscription logic
    console.log('Pro plan selected:', selectedPeriod);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Decorations */}
      <BackgroundDecorations />
      
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Choose Your Plan</Text>
          <Text style={styles.subtitle}>Start free or unlock more features with premium</Text>
        </View>

        {/* Monthly/Yearly Toggle */}
        <PlanToggle 
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
        />

        {/* Plan Cards */}
        <View style={styles.plansSection}>
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
        </View>
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
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
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
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.44,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.7,
    letterSpacing: -0.32,
  },
  plansSection: {
    paddingBottom: 20,
  },
});
