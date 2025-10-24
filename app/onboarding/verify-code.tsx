import React, { useState, useEffect, useRef } from 'react';
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
  logo: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#27EDB7',
  },
  errorText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.02,
    color: '#FF6B6B',
    textAlign: 'center',
    marginTop: 10,
  },
  verifyButton: {
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    paddingVertical: 14,
    paddingHorizontal: 12,
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
