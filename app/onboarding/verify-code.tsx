import React, { useState, useEffect } from 'react';
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

// OTP validation utility
const validateOTP = (otp: string): boolean => {
  return /^\d{6}$/.test(otp.trim());
};

// Format OTP input - only allow numbers and max 6 chars
const formatOTPInput = (value: string): string => {
  return value.replace(/[^0-9]/g, '').slice(0, 6);
};

export default function VerifyCodeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const emailOrPhone = params?.emailOrPhone as string;
  const verificationType = params?.type as 'email' | 'phone';

  // State management
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [canResend, setCanResend] = useState(false);

  // Timer effect - countdown from 300 seconds
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerifyCode = async () => {
    setError('');

    if (!otp.trim()) {
      setError('Please enter the verification code');
      return;
    }

    if (!validateOTP(otp)) {
      setError('Verification code must be 6 digits');
      return;
    }

    setLoading(true);
    try {
      // TODO: Call API to verify OTP
      // const response = await fetch('/api/verify-otp', {
      //   method: 'POST',
      //   body: JSON.stringify({ otp, [verificationType]: emailOrPhone }),
      // });

      // Navigate to reset password screen
      router.push({
        pathname: '/onboarding/reset-password',
        params: { emailOrPhone, type: verificationType },
      });
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setError('');
    setOtp('');
    setTimeLeft(300);
    setCanResend(false);

    try {
      // TODO: Call API to resend verification code
      // await fetch('/api/resend-verification-code', {
      //   method: 'POST',
      //   body: JSON.stringify({ [verificationType]: emailOrPhone }),
      // });
    } catch (err) {
      setError('Failed to resend code. Please try again.');
    }
  };

  const handleBackToForgotPassword = () => {
    router.back();
  };

  // Format time display (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
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

        {/* Verification Form Container */}
        <View style={styles.formContainer}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Verify Code</Text>
            <Text style={styles.subtitle}>
              We've sent a verification code to your {verificationType === 'email' ? 'email' : 'phone'}
            </Text>
            <Text style={styles.emailDisplay}>{emailOrPhone}</Text>
          </View>

          {/* Form Content */}
          <View style={styles.formContent}>
            {/* OTP Input Container */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Verification Code</Text>
              <TextInput
                style={styles.otpInput}
                placeholder="000000"
                placeholderTextColor="#CCCCCC"
                value={otp}
                onChangeText={(value) => setOtp(formatOTPInput(value))}
                keyboardType="numeric"
                maxLength={6}
                editable={!loading}
              />
              <Text style={styles.otpHint}>6-digit code</Text>
            </View>

            {/* Timer Display */}
            <View style={styles.timerContainer}>
              <Text style={styles.timerLabel}>Code expires in:</Text>
              <Text style={[styles.timerValue, timeLeft < 60 && styles.timerWarning]}>
                {formatTime(timeLeft)}
              </Text>
            </View>

            {/* Error Message */}
            {error && <Text style={styles.errorText}>{error}</Text>}

            {/* Verify Button */}
            <TouchableOpacity
              style={[styles.verifyButton, loading && styles.verifyButtonDisabled]}
              onPress={handleVerifyCode}
              disabled={loading}
            >
              <Text style={styles.verifyButtonText}>
                {loading ? 'Verifying...' : 'Verify Code'}
              </Text>
            </TouchableOpacity>

            {/* Resend Code Section */}
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't receive a code? </Text>
              <TouchableOpacity onPress={handleResendCode} disabled={!canResend || loading}>
                <Text style={[styles.resendLink, (!canResend || loading) && styles.resendLinkDisabled]}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>

            {/* Back Link */}
            <View style={styles.backContainer}>
              <Text style={styles.backText}>Back to </Text>
              <TouchableOpacity onPress={handleBackToForgotPassword}>
                <Text style={styles.backLink}>Forgot Password</Text>
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
  emailDisplay: {
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
    gap: 8,
  },
  inputLabel: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#263574',
  },
  otpInput: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.02,
    color: '#263574',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 4,
  },
  otpHint: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.02,
    color: '#666666',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  timerLabel: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#666666',
  },
  timerValue: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.02,
    color: '#263574',
  },
  timerWarning: {
    color: '#FF6B6B',
  },
  errorText: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#FF6B6B',
    textAlign: 'center',
    marginTop: 10,
  },
  verifyButton: {
    backgroundColor: '#2B958B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonDisabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.7,
  },
  verifyButtonText: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.02,
    color: '#FFFFFF',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#666666',
  },
  resendLink: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#2B958B',
  },
  resendLinkDisabled: {
    color: '#CCCCCC',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  backText: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#666666',
  },
  backLink: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: '#2B958B',
  },
});
