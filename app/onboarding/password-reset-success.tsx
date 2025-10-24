import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { OnboardingScreen } from '@/components/onboarding';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

export default function PasswordResetSuccessScreen() {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to login screen
    router.replace('/onboarding/login');
  };

  return (
    <View style={styles.screenWrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#091729" />
      <OnboardingScreen>
        <View style={styles.formContent}>
          {/* Content Section - Icon and Text at top */}
          <View style={styles.inputSection}>
            {/* Success Icon Badge */}
            <View style={styles.iconContainer}>
              <Svg width={85} height={85} viewBox="0 0 85 85" fill="none">
                <Path opacity="0.4" d="M38.0729 8.67644C40.5167 6.58686 44.5188 6.58686 46.9979 8.67644L52.5938 13.4931C53.6563 14.4139 55.6396 15.1577 57.0563 15.1577H63.0771C66.8313 15.1577 69.9125 18.2389 69.9125 21.9931V28.0139C69.9125 29.3952 70.6563 31.4139 71.5771 32.4764L76.3938 38.0723C78.4834 40.516 78.4834 44.5181 76.3938 46.9973L71.5771 52.5931C70.6563 53.6556 69.9125 55.6389 69.9125 57.0556V63.0764C69.9125 66.8306 66.8313 69.9119 63.0771 69.9119H57.0563C55.675 69.9119 53.6563 70.6556 52.5938 71.5764L46.9979 76.3931C44.5542 78.4827 40.5521 78.4827 38.0729 76.3931L32.4771 71.5764C31.4146 70.6556 29.4313 69.9119 28.0146 69.9119H21.8875C18.1334 69.9119 15.0521 66.8306 15.0521 63.0764V57.0202C15.0521 55.6389 14.3084 53.6556 13.4229 52.5931L8.6417 46.9619C6.58753 44.5181 6.58753 40.5514 8.6417 38.1077L13.4229 32.4764C14.3084 31.4139 15.0521 29.4306 15.0521 28.0494V21.9577C15.0521 18.2035 18.1334 15.1223 21.8875 15.1223H28.0146C29.3959 15.1223 31.4146 14.3785 32.4771 13.4577L38.0729 8.67644Z" fill="#27EDB7"/>
                <Path d="M38.2148 53.7263C37.5065 53.7263 36.8336 53.443 36.3377 52.9471L27.7669 44.3763C26.7398 43.3492 26.7398 41.6492 27.7669 40.6221C28.794 39.5951 30.494 39.5951 31.5211 40.6221L38.2148 47.3159L53.444 32.0867C54.4711 31.0596 56.1711 31.0596 57.1981 32.0867C58.2252 33.1138 58.2252 34.8138 57.1981 35.8409L40.0919 52.9471C39.5961 53.443 38.9231 53.7263 38.2148 53.7263Z" fill="#2F4291"/>
              </Svg>
            </View>

            {/* Title */}
            <Text style={styles.title}>Password Reset Successful!</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Your password has been reset successfully.{'\n'}You can now login with your new password.
            </Text>
          </View>

          {/* Button Section - At Bottom */}
          <View style={styles.buttonSection}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleContinue}
              accessibilityLabel="Continue to login"
              accessibilityRole="button"
              accessibilityHint="Navigate to login screen"
            >
              <Text style={styles.buttonText}>Continue to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </OnboardingScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#091729',
  },
  formContent: {
    gap: Spacing.xl,
    flex: 1,
  },
  inputSection: {
    gap: 20,
    alignItems: 'center',
  },
  buttonSection: {
    gap: Spacing.md,
    marginTop: 'auto',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.h2,
    lineHeight: 32,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.primary,
  },
  subtitle: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
    opacity: 0.7,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: Colors.brand.primary,
    borderRadius: BorderRadius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.primary,
  },
});
