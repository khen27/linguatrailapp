import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { OnboardingScreen } from '@/components/onboarding';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

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

  // Auto-focus next input
  const handleChangeDigit = (index: number, value: string) => {
    // Handle paste - if value is longer than 1 char, it's likely a paste
    if (value.length > 1) {
      const pastedDigits = value.slice(0, 6).split('');
      const newDigits = [...otpDigits];
      
      pastedDigits.forEach((digit, i) => {
        if (index + i < 6 && /^\d$/.test(digit)) {
          newDigits[index + i] = digit;
        }
      });
      
      setOtpDigits(newDigits);
      
      // Focus the next empty input or the last one
      const nextEmptyIndex = newDigits.findIndex((digit, i) => i > index && digit === '');
      const targetIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : Math.min(index + pastedDigits.length, 5);
      
      setTimeout(() => {
        inputsRef.current[targetIndex]?.focus();
        setFocusedIndex(targetIndex);
      }, 10);
      
      return;
    }

    // Handle single digit input
    if (value === '' || /^\d$/.test(value)) {
      const newDigits = [...otpDigits];
      newDigits[index] = value;
      setOtpDigits(newDigits);
      setError(''); // Clear error when user starts typing

      // Auto-focus next input if digit was entered
      if (value && index < 5) {
        setTimeout(() => {
          inputsRef.current[index + 1]?.focus();
          setFocusedIndex(index + 1);
        }, 10);
      }
    }
  };

  // Handle backspace
  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !otpDigits[index] && index > 0) {
      // Focus previous input if current is empty
      setTimeout(() => {
        inputsRef.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      }, 10);
    }
  };

  // Check if OTP is complete
  const isComplete = otpDigits.every(digit => digit !== '');
  const otpCode = otpDigits.join('');

  const handleVerifyCode = async () => {
    if (!isComplete) {
      setError('Please enter all 6 digits');
      return;
    }

    if (!validateOTP(otpCode)) {
      setError('Invalid verification code format');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Call API to verify the code
      // const response = await fetch('/api/verify-code', {
      //   method: 'POST',
      //   body: JSON.stringify({ 
      //     code: otpCode, 
      //     [verificationType]: emailOrPhone 
      //   }),
      // });

      // Navigate to reset password screen
      router.push({
        pathname: '/onboarding/reset-password',
        params: { emailOrPhone, code: otpCode },
      });
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setCanResend(false);
    setTimeLeft(300); // Reset timer to 5 minutes
    setError('');

    try {
      // Call API to resend code
      // const response = await fetch('/api/resend-verification-code', {
      //   method: 'POST',
      //   body: JSON.stringify({ [verificationType]: emailOrPhone }),
      // });
      
      // Show success message or handle response
    } catch (err) {
      setError('Failed to resend code. Please try again.');
      setCanResend(true);
    }
  };

  const handleBackToForgotPassword = () => {
    router.back();
  };

  // Format time display (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <OnboardingScreen
      title="Enter Verification Code"
      subtitle={`We've sent a 6-digit code to your ${verificationType === 'email' ? 'email' : 'phone'}.\nEnter it below to continue.`}
    >
      <View style={styles.formContent}>
        {/* Input Section */}
        <View style={styles.inputSection}>
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
        </View>

        {/* Button Section - At Bottom */}
        <View style={styles.buttonSection}>
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
    </OnboardingScreen>
  );
}

const styles = StyleSheet.create({
  formContent: {
    gap: Spacing.xl,
    flex: 1,
  },
  inputSection: {
    gap: 20,
  },
  buttonSection: {
    gap: Spacing.md,
    marginTop: 'auto',
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
    backgroundColor: Colors.input.background,
    borderWidth: 1.25,
    borderColor: Colors.input.border,
    textAlign: 'center',
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    color: '#000000',
  },
  otpCellFilled: {
    color: Colors.text.primary,
  },
  otpCellFocused: {
    borderColor: Colors.text.accent,
  },
  resendLineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendDimmed: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    color: '#BFBFBF',
  },
  resendAction: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    color: Colors.brand.primary,
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
  verifyButton: {
    backgroundColor: Colors.brand.primary,
    borderRadius: BorderRadius.round,
    height: 52,
    paddingVertical: 14,
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonDisabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.7,
  },
  verifyButtonText: {
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