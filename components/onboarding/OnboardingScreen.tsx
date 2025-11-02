import React from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  Image, 
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Colors, Typography, Spacing } from '@/constants/design-tokens';
import { BackButton } from './BackButton';
import { BackgroundDecorations } from '@/components/subscription/BackgroundDecorations';

const { height: screenHeight } = Dimensions.get('window');

interface OnboardingScreenProps {
  logo?: number;  // Image source
  title?: string;
  subtitle?: string;
  showBackgroundDecorations?: boolean; // Optional background decorative elements
  children: React.ReactNode;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  logo = require('@/assets/app-icons-ios/Icon-1024.png'),
  title,
  subtitle,
  showBackgroundDecorations = false,
  children,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {showBackgroundDecorations && <BackgroundDecorations />}
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

        <ScrollView>
          {children}
        </ScrollView>
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
    top: 100,
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
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.background.white,
    borderRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 24,
    height: screenHeight * 0.67, // ~541px on 812px height devices for consistency
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
