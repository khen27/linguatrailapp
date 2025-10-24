import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '@/constants/design-tokens';

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  color: string;
  checks: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
  };
}

interface PasswordStrengthIndicatorProps {
  password: string;
  showDetails?: boolean;
}

export const calculatePasswordStrength = (password: string): PasswordStrength => {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;
  
  let label: string;
  let color: string;

  switch (score) {
    case 0:
    case 1:
      label = 'Very Weak';
      color = '#FF4444';
      break;
    case 2:
      label = 'Weak';
      color = '#FF8800';
      break;
    case 3:
      label = 'Fair';
      color = '#FFAA00';
      break;
    case 4:
      label = 'Good';
      color = '#88CC00';
      break;
    case 5:
      label = 'Strong';
      color = '#00AA44';
      break;
    default:
      label = 'Very Weak';
      color = '#FF4444';
  }

  return { score, label, color, checks };
};

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
  showDetails = false,
}) => {
  const strength = calculatePasswordStrength(password);

  if (!password) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Strength Bar */}
      <View style={styles.strengthBar}>
        <View style={styles.barBackground}>
          {[1, 2, 3, 4, 5].map((level) => (
            <View
              key={level}
              style={[
                styles.barSegment,
                level <= strength.score
                  ? { backgroundColor: strength.color }
                  : { backgroundColor: '#E0E3EF' },
              ]}
            />
          ))}
        </View>
        <Text style={[styles.strengthLabel, { color: strength.color }]}>
          {strength.label}
        </Text>
      </View>

      {/* Detailed Requirements */}
      {showDetails && (
        <View style={styles.requirements}>
          <RequirementItem
            text="At least 8 characters"
            met={strength.checks.length}
          />
          <RequirementItem
            text="One uppercase letter"
            met={strength.checks.uppercase}
          />
          <RequirementItem
            text="One lowercase letter"
            met={strength.checks.lowercase}
          />
          <RequirementItem
            text="One number"
            met={strength.checks.number}
          />
          <RequirementItem
            text="One special character"
            met={strength.checks.special}
          />
        </View>
      )}
    </View>
  );
};

interface RequirementItemProps {
  text: string;
  met: boolean;
}

const RequirementItem: React.FC<RequirementItemProps> = ({ text, met }) => (
  <View style={styles.requirement}>
    <View style={[styles.checkmark, met && styles.checkmarkMet]}>
      {met && <Text style={styles.checkmarkText}>✓</Text>}
    </View>
    <Text style={[styles.requirementText, met && styles.requirementTextMet]}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },
  strengthBar: {
    gap: Spacing.xs,
  },
  barBackground: {
    flexDirection: 'row',
    gap: 2,
    height: 4,
  },
  barSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  strengthLabel: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: Typography.letterSpacing,
  },
  requirements: {
    gap: Spacing.xs,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  checkmark: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E3EF',
    backgroundColor: '#F6F7FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkMet: {
    borderColor: '#27EDB7',
    backgroundColor: '#27EDB7',
  },
  checkmarkText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  requirementText: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.secondary,
    flex: 1,
  },
  requirementTextMet: {
    color: '#27EDB7',
  },
});
