import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#263574" />
      
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

      {/* Forgot Password Form Container */}
      <View style={styles.formContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            Don't worry! Enter your email or phone number to reset your password.
          </Text>
        </View>

        {/* Form Content */}
        <View style={styles.formContent}>
          {/* Email/Phone Input Container */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email / Phone</Text>
            <View style={styles.inputField}>
              <TextInput
                style={styles.textInput}
                placeholder="muddassarhaseeb34@gmail.com"
                placeholderTextColor="#5C5C5C"
                value={emailOrPhone}
                onChangeText={setEmailOrPhone}
                keyboardType="email-address"
              />
            </View>
          </View>

          {/* Error Message */}
          {error && <Text style={styles.errorText}>{error}</Text>}

          {/* Send Verification Code Button */}
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
    color: '#5C5C5C',
    marginTop: 8,
  },
  formContent: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#263574',
  },
  inputField: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  textInput: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#263574',
  },
  errorText: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#FF0000',
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#2B958B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#A0A0A0', // Gray out the button when disabled
    opacity: 0.7,
  },
  sendButtonText: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.02,
    color: '#FFFFFF',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  backText: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#5C5C5C',
  },
  backLink: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.02,
    color: '#2B958B',
  },
});
