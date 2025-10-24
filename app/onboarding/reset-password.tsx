import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Svg, { Path } from 'react-native-svg';

// Password validation utilities
const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('At least 8 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('One uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('One lowercase letter');
  }
  if (!/\d/.test(password)) {
    errors.push('One number');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

const getPasswordStrength = (password: string): 'weak' | 'fair' | 'good' | 'strong' => {
  if (!password) return 'weak';
  if (password.length < 8) return 'weak';
  if (password.length < 12) return 'fair';
  if (!/[!@#$%^&*]/.test(password)) return 'good';
  return 'strong';
};

export default function ResetPasswordScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const emailOrPhone = params?.emailOrPhone as string;
  const verificationType = params?.type as 'email' | 'phone';

  // State management
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'fair' | 'good' | 'strong'>('weak');

  const handlePasswordChange = (password: string) => {
    setNewPassword(password);
    setPasswordStrength(getPasswordStrength(password));
  };

  const handleResetPassword = async () => {
    setError('');

    if (!newPassword.trim()) {
      setError('Please enter a new password');
      return;
    }

    if (!confirmPassword.trim()) {
      setError('Please confirm your password');
      return;
    }

    const validation = validatePassword(newPassword);
    if (!validation.isValid) {
      setError(`Password must include: ${validation.errors.join(', ')}`);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      // TODO: Call API to reset password
      // const response = await fetch('/api/reset-password', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     newPassword,
      //     [verificationType]: emailOrPhone,
      //   }),
      // });

      // Navigate to success screen or login
      router.push('/onboarding/login');
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToVerify = () => {
    router.back();
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak':
        return '#FF6B6B';
      case 'fair':
        return '#FFC107';
      case 'good':
        return '#2196F3';
      case 'strong':
        return '#2B958B';
      default:
        return '#CCCCCC';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#263574" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {/* Background with decorative elements */}
        <View style={styles.background}>
          <View style={styles.decorativeShape1} />
          <View style={styles.decorativeShape2} />
          <View style={styles.decorativeShape3} />
        </View>

        {/* Logo and Branding */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Svg width={55} height={34} viewBox="0 0 55 34" fill="none">
              <Path d="M1.31 15.2C1.31 15.2 1.31 15.2 1.31 15.2" fill="#2B958B"/>
              <Path d="M7.02 10.7C7.02 10.7 7.02 10.7 7.02 10.7" fill="#27EDB7"/>
              <Path d="M13.7 6.6C13.7 6.6 13.7 6.6 13.7 6.6" fill="#FFFFFF"/>
            </Svg>
          </View>
          <Text style={styles.appTitle}>LinguaTrail</Text>
        </View>

        {/* Reset Password Form Container */}
        <View style={styles.formContainer}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Create New Password</Text>
            <Text style={styles.subtitle}>Enter a strong password to secure your account</Text>
          </View>

          {/* Form Content */}
          <View style={styles.formContent}>
            {/* New Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>New Password</Text>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter new password"
                  placeholderTextColor="#CCCCCC"
                  value={newPassword}
                  onChangeText={handlePasswordChange}
                  secureTextEntry={!showPassword}
                  editable={!loading}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.toggleText}>{showPassword ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
              </View>

              {/* Password Strength Indicator */}
              {newPassword && (
                <View style={styles.strengthContainer}>
                  <View style={[styles.strengthBar, { backgroundColor: getStrengthColor() }]} />
                  <Text style={[styles.strengthText, { color: getStrengthColor() }]}>
                    {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)} strength
                  </Text>
                </View>
              )}
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Confirm password"
                  placeholderTextColor="#CCCCCC"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  editable={!loading}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Text style={styles.toggleText}>{showConfirmPassword ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Password Requirements */}
            {newPassword && (
              <View style={styles.requirementsContainer}>
                <Text style={styles.requirementsLabel}>Password must include:</Text>
                <View style={styles.requirementsList}>
                  <Text style={styles.requirement}>• At least 8 characters</Text>
                  <Text style={styles.requirement}>• One uppercase letter (A-Z)</Text>
                  <Text style={styles.requirement}>• One lowercase letter (a-z)</Text>
                  <Text style={styles.requirement}>• One number (0-9)</Text>
                </View>
              </View>
            )}

            {/* Error Message */}
            {error && <Text style={styles.errorText}>{error}</Text>}

            {/* Reset Password Button */}
            <TouchableOpacity
              style={[styles.resetButton, loading && styles.resetButtonDisabled]}
              onPress={handleResetPassword}
              disabled={loading}
            >
              <Text style={styles.resetButtonText}>
                {loading ? 'Resetting...' : 'Reset Password'}
              </Text>
            </TouchableOpacity>

            {/* Back Link */}
            <View style={styles.backContainer}>
              <Text style={styles.backText}>Back to </Text>
              <TouchableOpacity onPress={handleBackToVerify}>
                <Text style={styles.backLink}>Verify Code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263574',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  decorativeShape1: {
    position: 'absolute',
    width: 236,
    height: 382,
    left: -73,
    top: -26,
    backgroundColor: '#EBF8F7',
    borderRadius: 191,
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  decorativeShape2: {
    position: 'absolute',
    width: 130,
    height: 211,
    left: -40,
    top: -65,
    backgroundColor: '#BFC4DD',
    borderRadius: 105,
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  decorativeShape3: {
    position: 'absolute',
    width: 116,
    height: 188,
    left: -36,
    top: -71,
    backgroundColor: '#E0E3EF',
    borderRadius: 94,
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  logoContainer: {
    position: 'absolute',
    top: 92,
    left: '50%',
    transform: [{ translateX: -55 }],
    alignItems: 'center',
    gap: 2,
  },
  logo: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#FFFFFF',
  },
  formContainer: {
    position: 'absolute',
    bottom: 25,
    left: 8,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#263574',
  },
  subtitle: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#666666',
    marginTop: 4,
  },
  formContent: {
    gap: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#263574',
    marginBottom: 8,
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  passwordInput: {
    flex: 1,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#263574',
  },
  toggleText: {
    fontSize: 24,
    color: '#CCCCCC',
  },
  strengthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  strengthBar: {
    width: 100,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  strengthText: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
  },
  requirementsContainer: {
    marginTop: 15,
  },
  requirementsLabel: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#666666',
    marginBottom: 8,
  },
  requirementsList: {
    gap: 6,
  },
  requirement: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#666666',
  },
  errorText: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#FF6B6B',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: '#2B958B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonDisabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.7,
  },
  resetButtonText: {
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.02,
    color: '#FFFFFF',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  backText: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#666666',
  },
  backLink: {
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#2B958B',
  },
});
