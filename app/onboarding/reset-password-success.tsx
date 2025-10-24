import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { OnboardingScreen } from '@/components/onboarding';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';
import Svg, { Path } from 'react-native-svg';

export default function ResetPasswordSuccessScreen() {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push('/onboarding/login');
  };

  return (
    <OnboardingScreen>
      <View style={styles.contentContainer}>
        {/* Center Content Section */}
        <View style={styles.centerContent}>
          {/* Success Badge with Checkmark */}
          <Svg width={85} height={85} viewBox="0 0 85 85" fill="none">
            <Path 
              opacity="0.4" 
              d="M38.8165 7.29589L19.3373 14.5917C15.6186 16.0084 12.5728 20.4001 12.5728 24.4021V53.0896C12.5728 55.9584 14.4498 59.748 16.7519 61.448L36.2311 76.0042C39.6665 78.5896 45.2978 78.5896 48.7332 76.0042L68.2123 61.448C70.5144 59.7126 72.3915 55.9584 72.3915 53.0896V24.4021C72.3915 20.4355 69.3457 16.0084 65.6269 14.6271L46.1478 7.33131C44.1644 6.55214 40.8353 6.55214 38.8165 7.29589Z" 
              fill={Colors.brand.primary}
            />
            <Path 
              d="M37.7543 50.3978C37.0813 50.3978 36.4084 50.1499 35.8772 49.6186L30.1751 43.9166C29.148 42.8895 29.148 41.1895 30.1751 40.1624C31.2022 39.1353 32.9022 39.1353 33.9293 40.1624L37.7543 43.9874L51.1063 30.6353C52.1334 29.6082 53.8334 29.6082 54.8605 30.6353C55.8876 31.6624 55.8876 33.3624 54.8605 34.3895L39.6313 49.6186C39.1001 50.1499 38.4272 50.3978 37.7543 50.3978Z" 
              fill={Colors.text.primary}
            />
          </Svg>

          {/* Title and Subtitle */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Password Reset Successful!</Text>
            <Text style={styles.subtitle}>
              All done! Your password has been updated securely.
            </Text>
          </View>
        </View>

        {/* Button Section at Bottom */}
        <TouchableOpacity style={styles.button} onPress={handleBackToLogin}>
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </OnboardingScreen>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.lg,
  },
  textContainer: {
    gap: 8,
    alignItems: 'center',
  },
  title: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: 22,
    lineHeight: 26,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: Colors.text.primary,
  },
  subtitle: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: Colors.text.secondary,
    opacity: 0.7,
  },
  button: {
    backgroundColor: Colors.brand.primary,
    borderRadius: BorderRadius.round,
    height: 52,
    paddingVertical: 14,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 'auto',
  },
  buttonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.accent,
  },
});
