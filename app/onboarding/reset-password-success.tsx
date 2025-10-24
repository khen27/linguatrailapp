import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';

export default function ResetPasswordSuccessScreen() {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push('/onboarding/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#091729" />

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

      {/* Success Form Container */}
      <View style={styles.formContainer}>
        {/* Success Badge with Checkmark */}
        <Svg width={85} height={85} viewBox="0 0 85 85" fill="none">
          {/* Outer circle background */}
          <Path
            d="M 42.5 0 C 66.07 0 85 18.93 85 42.5 C 85 66.07 66.07 85 42.5 85 C 18.93 85 0 66.07 0 42.5 C 0 18.93 18.93 0 42.5 0"
            fill="#27EDB7"
          />
          {/* Checkmark */}
          <Path
            d="M 25 42.5 L 37.5 55 L 60 32.5"
            stroke="#263574"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </Svg>

        {/* Title and Subtitle */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Password Reset Successful!</Text>
          <Text style={styles.subtitle}>
            All done! Your password has been updated securely.
          </Text>
        </View>

        {/* Back to Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleBackToLogin}>
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
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
    top: 70,
    left: 20,
    zIndex: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: 150,
    left: '50%',
    transform: [{ translateX: -35 }],
    alignItems: 'center',
    gap: 2,
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
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  title: {
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#263574',
  },
  subtitle: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#666666',
    marginTop: 4,
  },
  button: {
    width: '100%',
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#2F4291',
  },
});
