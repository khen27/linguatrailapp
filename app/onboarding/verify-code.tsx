import React, { useState, useEffect, useRef } from 'react';
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

export default function VerifyCodeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const emailOrPhone = params?.emailOrPhone as string;
  const verificationType = params?.type as 'email' | 'phone';

  // State management
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [canResend, setCanResend] = useState(false);

  // Refs for digit inputs
  const inputsRef = useRef<Array<TextInput | null>>([]);

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

  // Helpers
  const joinOtp = (digits: string[]) => digits.join('');
  const isComplete = otpDigits.every((d) => d.length === 1);

  const focusInput = (index: number) => {
    setFocusedIndex(index);
    const ref = inputsRef.current[index];
    ref?.focus();
  };

  const handleChangeDigit = (index: number, value: string) => {
    setError('');

    // Handle paste of multiple characters
    const sanitized = value.replace(/[^0-9]/g, '');
    if (sanitized.length > 1) {
      const newDigits = [...otpDigits];
      for (let i = 0; i < sanitized.length && index + i < 6; i++) {
        newDigits[index + i] = sanitized[i];
      }
      setOtpDigits(newDigits);
      const nextIndex = Math.min(index + sanitized.length, 5);
      focusInput(nextIndex);
      return;
    }

    // Single char
    const newDigits = [...otpDigits];
    newDigits[index] = sanitized.slice(0, 1);
    setOtpDigits(newDigits);

    if (sanitized.length === 1 && index < 5) {
      focusInput(index + 1);
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace') {
      if (otpDigits[index]) {
        // Clear current digit
        const newDigits = [...otpDigits];
        newDigits[index] = '';
        setOtpDigits(newDigits);
        return;
      }
      // Move to previous digit if empty
      if (index > 0) {
        focusInput(index - 1);
        const newDigits = [...otpDigits];
        newDigits[index - 1] = '';
        setOtpDigits(newDigits);
      }
    }
  };

  const handleVerifyCode = async () => {
    setError('');
    const otp = joinOtp(otpDigits);

    if (!isComplete) {
      setError('Please enter the 6-digit code');
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
    setOtpDigits(['', '', '', '', '', '']);
    setTimeLeft(300);
    setCanResend(false);
    focusInput(0);

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
            <Text style={styles.title}>Enter Verification Code</Text>
            <Text style={styles.subtitle}>
              We've sent a 6-digit code to your {verificationType === 'email' ? 'email' : 'phone'}.\nEnter it below to continue.
            </Text>
          </View>

          {/* Form Content */}
          <View style={styles.formContent}>
            {/* OTP Input Row */}
            <View style={styles.otpRow}>
              {otpDigits.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  style={[
                    styles.otpCell,
                    digit ? styles.otpCellFilled : undefined,
                    focusedIndex === index ? styles.otpCellFocused : undefined,
                  ]}
                  value={digit}
                  onChangeText={(value) => handleChangeDigit(index, value)}
                  onFocus={() => setFocusedIndex(index)}
                  onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                  keyboardType="number-pad"
                  maxLength={6} // will be trimmed to 1 in change handler
                  editable={!loading}
                  textContentType="oneTimeCode"
                  contextMenuHidden
                />
              ))}
            </View>

            {/* Resend Code Line */}
            <View style={styles.resendLineContainer}>
              {canResend ? (
                <TouchableOpacity onPress={handleResendCode} disabled={loading}>
                  <Text style={styles.resendAction}>Resend Code</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.resendDimmed}>Resend Code ({formatTime(timeLeft)})</Text>
              )}
            </View>

            {/* Error Message */}
            {error && <Text style={styles.errorText}>{error}</Text>}

            {/* Verify Button */}
            <TouchableOpacity
              style={[styles.verifyButton, (!isComplete || loading) && styles.verifyButtonDisabled]}
              onPress={handleVerifyCode}
              disabled={!isComplete || loading}
            >
              <Text style={styles.verifyButtonText}>
                {loading ? 'Verifying...' : 'Verify & Continue'}
              </Text>
            </TouchableOpacity>

            {/* Back Link */}
            <View style={styles.backContainer}>
              <Text style={styles.backText}>Back to </Text>
              <TouchableOpacity onPress={handleBackToForgotPassword}>
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
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#666666',
    marginTop: 8,
  },
  formContent: {
    gap: 20,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  otpCell: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F6F7FA',
    borderWidth: 1.25,
    borderColor: '#E0E3EF',
    textAlign: 'center',
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#5C5C5C',
  },
  otpCellFilled: {
    color: '#263574',
  },
  otpCellFocused: {
    borderColor: '#2F4291',
  },
  resendLineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendDimmed: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#BFBFBF',
  },
  resendAction: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#2B958B',
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
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonDisabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.7,
  },
  verifyButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#2F4291',
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
