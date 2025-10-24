import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';

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

  const handlePasswordChange = (password: string) => {
    setNewPassword(password);
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

      // Navigate to success screen
      router.push('/onboarding/reset-password-success');
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToVerify = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#091729" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {/* Background with decorative elements */}
        <View style={styles.background}>
        </View>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
            <Rect x={42} y={42} width={42} height={42} rx={21} transform="rotate(180 42 42)" fill="white"/>
            <Path d="M18.9753 15.9416L13.917 21L18.9753 26.0583" stroke="#263574" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M28.0836 21L14.0586 21" stroke="#263574" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>

        {/* Logo and Branding */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/app-icons-ios/Icon-1024.png')}
            style={styles.logoImage}
          />
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
                  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <Path opacity="0.4" d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z" stroke="#263574" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <Path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#263574" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </Svg>
                </TouchableOpacity>
              </View>
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
                  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <Path opacity="0.4" d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z" stroke="#263574" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <Path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#263574" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>

            {/* Error Message */}
            {error && <Text style={styles.errorText}>{error}</Text>}

            {/* Reset Password Button */}
            <TouchableOpacity
              style={[styles.resetButton, loading && styles.resetButtonDisabled]}
              onPress={handleResetPassword}
              disabled={loading}
            >
              <Text style={styles.resetButtonText}>
                {loading ? 'Saving...' : 'Save New Password'}
              </Text>
            </TouchableOpacity>

            {/* Back Link */}
            <View style={styles.backContainer}>
              <Text style={styles.backText}>Back to </Text>
              <TouchableOpacity onPress={handleBackToVerify}>
                <Text style={styles.backLink}>Login?</Text>
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
    backgroundColor: '#091729',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: 150,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    gap: 2,
  },
  logoImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#263574',
    marginBottom: 8,
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    backgroundColor: '#F6F7FA',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E3EF',
  },
  passwordInput: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#263574',
  },
  errorText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.02,
    color: '#FF6B6B',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonDisabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.7,
  },
  resetButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#2F4291',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  backText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#5C5C5C',
  },
  backLink: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#27EDB7',
  },
});
