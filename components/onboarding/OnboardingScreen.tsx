import React from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  Image, 
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Colors, Typography, Spacing } from '@/constants/design-tokens';
import { BackButton } from './BackButton';

const { height: screenHeight } = Dimensions.get('window');

interface OnboardingScreenProps {
  logo?: number;  // Image source
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  logo = require('@/assets/app-icons-ios/Icon-1024.png'),
  title,
  subtitle,
  children
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <View style={styles.logoContainer}>
        <Image
          source={logo}
          style={styles.logoImage}
        />
        <Text style={styles.appTitle}>LinguaTrail</Text>
      </View>

      <View style={styles.formContainer}>
        {(title || subtitle) && (
          <View style={styles.header}>
            {title && <Text style={styles.title}>{title}</Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        )}

        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  logoContainer: {
    position: 'absolute',
    top: 150,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  logoImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  appTitle: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.h2,
    lineHeight: Typography.lineHeight.title,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
    color: Colors.text.white,
  },
  formContainer: {
    position: 'absolute',
    bottom: 25,
    left: 8,
    right: 8,
    height: screenHeight * 0.6,
    backgroundColor: Colors.background.white,
    borderRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 24,
  },
  header: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.semibold as '600',
    fontSize: Typography.sizes.h2,
    lineHeight: 26,
    color: Colors.text.primary,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing,
  },
  subtitle: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    lineHeight: Typography.lineHeight.body,
    color: Colors.text.secondary,
    textAlign: 'center',
    opacity: 0.7,
    letterSpacing: Typography.letterSpacing,
  },
});
