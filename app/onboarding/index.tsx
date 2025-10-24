import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

const { height: screenHeight } = Dimensions.get('window');

export default function OnboardingWelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#091729" />

      {/* Background Decorative Elements */}
      <View style={styles.background} />

      {/* Logo and Branding */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/app-icons-ios/Icon-1024.png')}
          style={styles.logoImage}
        />
        <Text style={styles.appTitle}>LinguaTrail</Text>
      </View>

      {/* Welcome Content Container */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeTitle}>Welcome to LinguaTrail</Text>
          <Text style={styles.welcomeSubtitle}>
            Start your language learning journey today
          </Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => router.push('/onboarding/signup')}
          >
            <Text style={styles.signUpButtonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push('/onboarding/login')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Text */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoContainer: {
    position: 'absolute',
    top: screenHeight * 0.15,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    gap: Spacing.xs,
    zIndex: 1,
  },
  logoImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  appTitle: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.white,
  },
  contentContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.xl,
  },
  header: {
    alignItems: 'center',
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  welcomeTitle: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.white,
  },
  welcomeSubtitle: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
    opacity: 0.8,
  },
  buttonsContainer: {
    gap: Spacing.md,
  },
  signUpButton: {
    height: 56,
    backgroundColor: '#27EDB7',
    borderRadius: BorderRadius.round,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  signUpButtonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.accent,
  },
  loginButton: {
    height: 56,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#27EDB7',
    borderRadius: BorderRadius.round,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  loginButtonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: '#27EDB7',
  },
  footerContainer: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.sm,
  },
  footerText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
    opacity: 0.6,
  },
});
