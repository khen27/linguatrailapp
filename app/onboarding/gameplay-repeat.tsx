import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { BackgroundDecorations } from '@/components/subscription/BackgroundDecorations';
import { SpeakingIcon } from '@/components/ui/speaking-icon';

export default function OnboardingGameplayRepeatScreen() {
  const router = useRouter();
  
  console.log('OnboardingGameplayRepeatScreen rendered');

  return (
    <View style={styles.container}>
      <BackgroundDecorations />
      <View style={styles.overlay} />

      <View style={styles.contentCard}>
        <View style={styles.cardInner}>
          <View style={styles.progressSection}>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.titleSection}>
            <Text style={styles.title}>Learn by Chat practice</Text>
            <Text style={styles.subtitle}>Its so easy to chat with your learning assistant.</Text>
          </View>

          <View style={styles.contentModule}>
            <Text style={styles.promptText}>
              Repeat after me → “I wake up at 7 o'clock ⏰.”
            </Text>

            <View style={styles.visualWrapper}>
              <Image
                source={require('@/assets/icons/ai-charm.png')}
                style={styles.visualImage}
                resizeMode="contain"
              />
              <View style={styles.speakingIconWrapper}>
                <SpeakingIcon size={248} isAnimating={false} />
              </View>
            </View>

            <Text style={styles.responseText}>I wake up at seven o'clock.</Text>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() => router.replace('/(tabs)' as const)}
          >
            <Text style={styles.primaryButtonText}>Skip & Get Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263574',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  contentCard: {
    position: 'absolute',
    width: 359,
    height: 742,
    left: '50%',
    marginLeft: -179.5,
    bottom: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
    zIndex: 10,
  },
  cardInner: {
    flex: 1,
    width: 327,
    alignSelf: 'center',
    gap: 24,
  },
  progressSection: {
    paddingHorizontal: 12,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    borderRadius: 1000,
    backgroundColor: '#F6F7FA',
    overflow: 'hidden',
  },
  progressFill: {
    width: '100%',
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  titleSection: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: -0.02,
    color: '#263574',
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#5C5C5C',
    opacity: 0.7,
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  contentModule: {
    flex: 1,
    backgroundColor: 'rgba(246, 247, 250, 0.5)',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 24,
  },
  promptText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 33,
    letterSpacing: -0.02,
    color: '#263574',
    fontFamily: 'Manrope',
    textAlign: 'center',
  },
  visualWrapper: {
    width: 248,
    height: 235,
    alignItems: 'center',
    justifyContent: 'center',
  },
  visualImage: {
    position: 'absolute',
    width: 248,
    height: 235,
  },
  speakingIconWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  responseText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: -0.02,
    color: '#263574',
    fontFamily: 'Manrope',
    textAlign: 'center',
  },
  primaryButton: {
    height: 52,
    borderRadius: 1000,
    backgroundColor: '#27EDB7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.02,
    color: '#2F4291',
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
});


