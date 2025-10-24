import React from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  Image, 
  StyleSheet 
} from 'react-native';
import { Colors, Typography, Spacing } from '@/constants/design-tokens';
import { BackButton } from './BackButton';

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
      
      {(title || subtitle) && (
        <View style={styles.headerContainer}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}

      <View style={styles.contentContainer}>
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
  headerContainer: {
    alignItems: 'center',
    marginTop: 250,
    paddingHorizontal: Spacing.lg,
  },
  title: {
    fontFamily: Typography.fontFamily.title,
    fontWeight: Typography.weights.bold as '700',
    fontSize: Typography.sizes.h1,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.weights.regular as '500',
    fontSize: Typography.sizes.body,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: Spacing.lg,
    paddingHorizontal: Spacing.md,
  }
});
