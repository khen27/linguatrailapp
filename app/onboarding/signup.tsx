import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import { useToast } from '@/hooks/useToast';
import { OnboardingScreen } from '@/components/onboarding';
import { PasswordField } from '@/components/onboarding/PasswordField';
import { calculatePasswordStrength } from '@/components/onboarding/PasswordStrengthIndicator';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';
import { validateName, validateEmailOrPhone } from '@/utils/validation';

interface FormData {
  fullName: string;
  emailPhone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  emailPhone?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
}

export default function SignupScreen() {
  const router = useRouter();
  const toast = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    emailPhone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation using enhanced validator
    const nameValidation = validateName(formData.fullName);
    if (!nameValidation.isValid) {
      newErrors.fullName = nameValidation.error;
    }

    // Email/Phone validation using enhanced validator
    const emailPhoneValidation = validateEmailOrPhone(formData.emailPhone);
    if (!emailPhoneValidation.isValid) {
      newErrors.emailPhone = emailPhoneValidation.error;
    }

    // Password validation using strength calculator
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const strength = calculatePasswordStrength(formData.password);
      if (!strength.checks.length) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!strength.checks.uppercase) {
        newErrors.password = 'Password must contain at least one uppercase letter';
      } else if (!strength.checks.lowercase) {
        newErrors.password = 'Password must contain at least one lowercase letter';
      } else if (!strength.checks.number) {
        newErrors.password = 'Password must contain at least one number';
      } else if (!strength.checks.special) {
        newErrors.password = 'Password must contain at least one special character';
      } else if (strength.score < 4) {
        newErrors.password = 'Password is too weak. Please make it stronger.';
      }
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms of Service & Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // TODO: Connect to authentication service
      // const response = await authService.signup(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.show({ message: 'Account created successfully!', preset: 'success' });
      router.push('/onboarding/verify-code');
    } catch (error) {
      toast.show({ message: 'Failed to create account. Please try again.', preset: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.screenWrapper}>
      <OnboardingScreen
        title="Join LinguaTrail Today"
        subtitle="Unlock tailored learning styles."
      >
        <ScrollView
          style={styles.formContent}
          scrollEnabled={false}
          contentContainerStyle={styles.formContentContainer}
        >
          {/* Input Section */}
          <View style={styles.inputSection}>
            {/* Full Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <View style={[styles.inputField, errors.fullName && styles.inputFieldError]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. John Smith"
                  placeholderTextColor={Colors.text.secondary}
                  value={formData.fullName}
                  onChangeText={(text) => {
                    setFormData({ ...formData, fullName: text });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  accessibilityLabel="Full Name"
                  accessibilityHint={errors.fullName ? `Error: ${errors.fullName}` : "Enter your full name"}
                  accessibilityRole="text"
                  autoComplete="name"
                  textContentType="name"
                />
              </View>
              {errors.fullName && <Text style={styles.errorText} accessibilityRole="alert">{errors.fullName}</Text>}
            </View>

            {/* Email/Phone Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email / Phone</Text>
              <View style={[styles.inputField, errors.emailPhone && styles.inputFieldError]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter the email or phone"
                  placeholderTextColor={Colors.text.secondary}
                  value={formData.emailPhone}
                  onChangeText={(text) => {
                    setFormData({ ...formData, emailPhone: text });
                    if (errors.emailPhone) setErrors({ ...errors, emailPhone: undefined });
                  }}
                  accessibilityLabel="Email or Phone"
                  accessibilityHint={errors.emailPhone ? `Error: ${errors.emailPhone}` : "Enter your email address or phone number"}
                  accessibilityRole="text"
                  autoComplete="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                />
              </View>
              {errors.emailPhone && <Text style={styles.errorText} accessibilityRole="alert">{errors.emailPhone}</Text>}
            </View>

            {/* Password Input */}
            <PasswordField
              label="Password"
              value={formData.password}
              onChangeText={(text) => {
                setFormData({ ...formData, password: text });
                if (errors.password) setErrors({ ...errors, password: undefined });
              }}
              placeholder="Enter password"
              error={errors.password}
              showStrengthIndicator={true}
            />

            {/* Confirm Password Input */}
            <PasswordField
              label="Confirm Password"
              value={formData.confirmPassword}
              onChangeText={(text) => {
                setFormData({ ...formData, confirmPassword: text });
                if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
              }}
              placeholder="Enter password"
              error={errors.confirmPassword}
            />

            {/* Terms of Service Checkbox */}
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => {
                setFormData({ ...formData, agreeToTerms: !formData.agreeToTerms });
                if (errors.agreeToTerms) setErrors({ ...errors, agreeToTerms: undefined });
              }}
              accessibilityLabel="Terms of Service Agreement"
              accessibilityRole="checkbox"
              accessibilityState={{ checked: formData.agreeToTerms }}
              accessibilityHint="Tap to agree to Terms of Service and Privacy Policy"
            >
              <View style={[styles.checkbox, formData.agreeToTerms && styles.checkboxChecked]}>
                {formData.agreeToTerms && (
                  <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
                    <Path d="M8 1.125H12C16.0731 1.125 19.375 4.4269 19.375 8.5V12.5C19.375 16.5731 16.0731 19.875 12 19.875H8C3.9269 19.875 0.625 16.5731 0.625 12.5V8.5C0.625 4.4269 3.9269 1.125 8 1.125Z" fill="#F6F7FA"/>
                    <Path d="M8 1.125H12C16.0731 1.125 19.375 4.4269 19.375 8.5V12.5C19.375 16.5731 16.0731 19.875 12 19.875H8C3.9269 19.875 0.625 16.5731 0.625 12.5V8.5C0.625 4.4269 3.9269 1.125 8 1.125Z" stroke="#1FBE92" strokeWidth="1.25"/>
                    <Path d="M5.75 10.5L8.58 13.33L14.25 7.67001" stroke="#1FBE92" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </Svg>
                )}
              </View>
              <Text style={styles.checkboxText}>I agree to Terms of Service & Privacy Policy</Text>
            </TouchableOpacity>
            {errors.agreeToTerms && <Text style={styles.errorText} accessibilityRole="alert">{errors.agreeToTerms}</Text>}
          </View>

          {/* Button Section */}
          <View style={styles.buttonSection}>
            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handleSignup}
              disabled={loading}
              accessibilityLabel={loading ? 'Creating Account' : 'Create Account'}
              accessibilityRole="button"
              accessibilityHint="Submit the form to create your account"
              accessibilityState={{ disabled: loading }}
            >
              <Text style={styles.buttonText}>
                {loading ? 'Creating Account...' : 'Create Account'}
              </Text>
            </TouchableOpacity>

            <View style={styles.backContainer}>
              <Text style={styles.backText}>Already have account? </Text>
              <TouchableOpacity 
                onPress={() => router.push('/onboarding/login')}
                accessibilityLabel="Go to Login"
                accessibilityRole="button"
                accessibilityHint="Navigate to login screen"
              >
                <Text style={styles.backLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    flex: 1,
    width: '100%',
  },
  formContentContainer: {
    flexGrow: 1,
    gap: Spacing.xl,
  },
  inputSection: {
    gap: Spacing.md,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  socialButton: {
    flex: 1,
    height: 50,
    backgroundColor: Colors.background.white,
    borderWidth: 1,
    borderColor: '#E0E3EF',
    borderRadius: BorderRadius.round,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  providerIcon: {
    width: 26,
    height: 26,
  },
  socialButtonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E3EF',
  },
  orText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.small,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
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
    height: 48,
    backgroundColor: Colors.input.background,
    borderWidth: 1.25,
    borderColor: Colors.input.border,
    borderRadius: BorderRadius.round,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  inputFieldError: {
    borderColor: Colors.state.error,
  },
  textInput: {
    flex: 1,
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: Colors.input.background,
    borderWidth: 1.25,
    borderColor: '#1FBE92',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    flexShrink: 0,
  },
  checkboxChecked: {
    backgroundColor: Colors.input.background,
  },
  checkboxText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.small,
    lineHeight: 21,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
    opacity: 0.9,
    flex: 1,
  },
  buttonSection: {
    gap: Spacing.md,
    marginTop: 'auto',
  },
  button: {
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: BorderRadius.round,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: Spacing.md,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.accent,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
  },
  backLink: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: '#27EDB7',
  },
});
