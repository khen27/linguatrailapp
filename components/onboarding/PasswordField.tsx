import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors, Typography, Spacing } from '@/constants/design-tokens';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';

interface PasswordFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  showStrengthIndicator?: boolean;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder = 'Enter password',
  error,
  showStrengthIndicator = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputField, error && styles.inputFieldError]}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={Colors.text.secondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword}
          accessibilityLabel={label}
          accessibilityHint={error ? `Error: ${error}` : `Enter your ${label.toLowerCase()}`}
          accessibilityRole="text"
          autoComplete="password"
          textContentType="password"
        />
        <TouchableOpacity 
          onPress={() => setShowPassword(!showPassword)}
          accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
          accessibilityRole="button"
          accessibilityHint="Toggle password visibility"
        >
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              opacity="0.4"
              d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z"
              stroke={Colors.text.primary}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z"
              stroke={Colors.text.primary}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      {showStrengthIndicator && !error && (
        <PasswordStrengthIndicator password={value} showDetails={false} />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 1000,
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
});
