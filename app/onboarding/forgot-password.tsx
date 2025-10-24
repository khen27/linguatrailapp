import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { OnboardingScreen } from '@/components/onboarding';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

// Validation utilities
const validateEmailOrPhone = (input: string): { isValid: boolean; type: 'email' | 'phone' | null } => {
  const trimmed = input.trim();
  
  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(trimmed)) {
    return { isValid: true, type: 'email' };
  }
  
  // Phone regex - accepts 10+ digits with optional country code, spaces, hyphens
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  if (phoneRegex.test(trimmed)) {
    return { isValid: true, type: 'phone' };
  }
  
  return { isValid: false, type: null };
};

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendVerificationCode = async () => {
    setError('');
    
    if (!emailOrPhone.trim()) {
      setError('Please enter your email or phone number');
      return;
    }
    
    const validation = validateEmailOrPhone(emailOrPhone);
    if (!validation.isValid) {
      setError('Please enter a valid email address or phone number');
      return;
    }
    
    setLoading(true);
    try {
      // Call API to send verification code
      // const response = await fetch('/api/send-verification-code', {
      //   method: 'POST',
      //   body: JSON.stringify({ [validation.type]: emailOrPhone }),
      // });
      
      // Navigate to verification screen with the email/phone as param
      router.push({
        pathname: '/onboarding/verify-code',
        params: { emailOrPhone, type: validation.type },
      });
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    router.back();
  };

  return (
    <OnboardingScreen
      title="Forgot Password?"
      subtitle="Don't worry! Enter your email or phone number to reset your password."
    >
      <View style={styles.formContent}>
        {/* Input Section */}
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email / Phone</Text>
            <View style={styles.inputField}>
              <TextInput
                style={styles.textInput}
                placeholder="muddassarhaseeb34@gmail.com"
                placeholderTextColor={Colors.text.secondary}
                value={emailOrPhone}
                onChangeText={setEmailOrPhone}
                keyboardType="email-address"
              />
            </View>
          </View>

          {/* Error Message */}
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>

        {/* Button Section - At Bottom */}
        <View style={styles.buttonSection}>
          <TouchableOpacity 
            style={[styles.sendButton, loading && styles.sendButtonDisabled]}
            onPress={handleSendVerificationCode}
            disabled={loading}
          >
            {loading ? (
              <Text style={styles.sendButtonText}>Sending...</Text>
            ) : (
              <Text style={styles.sendButtonText}>Send Verification Code</Text>
            )}
          </TouchableOpacity>

          {/* Back to Login Link */}
          <View style={styles.backContainer}>
            <Text style={styles.backText}>Back to </Text>
            <TouchableOpacity onPress={handleBackToLogin}>
              <Text style={styles.backLink}>Login?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </OnboardingScreen>
  );
}

const styles = StyleSheet.create({
  formContent: {
    gap: Spacing.xl,
    flex: 1,
  },
  inputSection: {
    gap: Spacing.md,
  },
  inputContainer: {
    gap: Spacing.sm,
  },
  inputLabel: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.primary,
  },
  inputField: {
    backgroundColor: Colors.input.background,
    borderRadius: BorderRadius.round,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderWidth: 1.25,
    borderColor: Colors.input.background,
    height: 48,
  },
  textInput: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
  },
  errorText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.small,
    lineHeight: Typography.lineHeight.small,
    letterSpacing: Typography.letterSpacing,
    color: Colors.state.error,
    textAlign: 'center',
  },
  buttonSection: {
    gap: Spacing.md,
    marginTop: 'auto',
  },
  sendButton: {
    backgroundColor: Colors.brand.primary,
    borderRadius: BorderRadius.round,
    height: 52,
    paddingVertical: 14,
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.7,
  },
  sendButtonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.accent,
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
  },
  backLink: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    letterSpacing: Typography.letterSpacing,
    color: Colors.brand.primary,
  },
});
