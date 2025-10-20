import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CheckmarkIcon } from './CheckmarkIcon';

interface PlanFeature {
  text: string;
}

interface PlanCardProps {
  title: string;
  subtitle?: string;
  price: string;
  period: string;
  features: PlanFeature[];
  buttonText: string;
  buttonSubtext?: string;
  isPro?: boolean;
  onButtonPress: () => void;
}

export function PlanCard({
  title,
  subtitle,
  price,
  period,
  features,
  buttonText,
  buttonSubtext,
  isPro = false,
  onButtonPress
}: PlanCardProps) {
  const cardStyle = isPro ? styles.proCard : styles.basicCard;
  const titleStyle = isPro ? styles.proTitle : styles.basicTitle;
  const subtitleStyle = isPro ? styles.proSubtitle : styles.basicSubtitle;
  const priceStyle = isPro ? styles.proPrice : styles.basicPrice;
  const periodStyle = isPro ? styles.proPeriod : styles.basicPeriod;
  const featureTextStyle = isPro ? styles.proFeatureText : styles.basicFeatureText;
  const buttonStyle = isPro ? styles.proButton : styles.basicButton;
  const buttonTextStyle = isPro ? styles.proButtonText : styles.basicButtonText;
  const buttonSubtextStyle = isPro ? styles.proButtonSubtext : styles.basicButtonSubtext;

  return (
    <View style={[styles.card, cardStyle]}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        {subtitle && (
          <Text style={subtitleStyle}>{subtitle}</Text>
        )}
        <Text style={titleStyle}>{title}</Text>
      </View>

      {/* Price Section */}
      <View style={styles.priceSection}>
        <Text style={priceStyle}>{price}</Text>
        <Text style={periodStyle}>/{period}</Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <CheckmarkIcon 
              size={20} 
              color={isPro ? '#27EDB7' : '#27EDB7'} 
            />
            <Text style={featureTextStyle}>{feature.text}</Text>
          </View>
        ))}
      </View>

      {/* Button Section */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={buttonStyle} onPress={onButtonPress}>
          <Text style={buttonTextStyle}>{buttonText}</Text>
        </TouchableOpacity>
        {buttonSubtext && (
          <Text style={buttonSubtextStyle}>{buttonSubtext}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  basicCard: {
    backgroundColor: '#FFFFFF',
  },
  proCard: {
    backgroundColor: '#2F4291',
    borderWidth: 1,
    borderColor: '#2F4291',
  },
  headerSection: {
    marginBottom: 16,
  },
  basicSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C5C5C',
    opacity: 0.7,
    marginBottom: 8,
    letterSpacing: -0.32,
  },
  proSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    opacity: 0.7,
    marginBottom: 8,
    letterSpacing: -0.32,
  },
  basicTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2F4291',
    letterSpacing: -0.44,
    textTransform: 'capitalize',
  },
  proTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.44,
    textTransform: 'capitalize',
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 16,
  },
  basicPrice: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2F4291',
    letterSpacing: -0.44,
  },
  proPrice: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.44,
  },
  basicPeriod: {
    fontSize: 22,
    fontWeight: '600',
    color: '#5C5C5C',
    letterSpacing: -0.44,
  },
  proPeriod: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.7,
    letterSpacing: -0.44,
  },
  featuresSection: {
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  basicFeatureText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A4A4A',
    marginLeft: 6,
    flex: 1,
    letterSpacing: -0.28,
  },
  proFeatureText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 6,
    flex: 1,
    letterSpacing: -0.28,
  },
  buttonSection: {
    alignItems: 'center',
  },
  basicButton: {
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    paddingVertical: 14,
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  proButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 1000,
    paddingVertical: 14,
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  basicButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F4291',
    letterSpacing: -0.32,
  },
  proButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F4291',
    letterSpacing: -0.32,
  },
  basicButtonSubtext: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5C5C5C',
    textAlign: 'center',
    letterSpacing: -0.28,
  },
  proButtonSubtext: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    opacity: 0.7,
    textAlign: 'center',
    letterSpacing: -0.28,
  },
});
