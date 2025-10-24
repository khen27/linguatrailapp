import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';
import { useToast } from '@/hooks/useToast';

export default function LoginScreen() {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleComingSoon = () => {
    toast.show({ message: 'Coming Soon!', preset: 'comingSoon' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#091729" />
      
      {/* Background */}
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

      {/* Login Form Container */}
      <View style={styles.formContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Login account</Text>
          <Text style={styles.subtitle}>Welcome back!</Text>
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={handleComingSoon}>
            <Image
              source={require('../../assets/icons/sign-in-google.png')}
              style={styles.providerIcon}
            />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton} onPress={handleComingSoon}>
            <Image
              source={require('../../assets/icons/sign-in-apple.png')}
              style={styles.providerIcon}
            />
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* OR Divider */}
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        {/* Email/Phone Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email / Phone</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter the email or phone"
              placeholderTextColor="#5C5C5C"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              placeholderTextColor="#5C5C5C"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path opacity="0.4" d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z" stroke="#263574" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#263574" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>

        {/* Keep logged in and Forgot password */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.checkboxContainer}
            onPress={() => setKeepLoggedIn(!keepLoggedIn)}
          >
            <View style={[styles.checkbox, keepLoggedIn && styles.checkboxChecked]}>
              {keepLoggedIn && (
                <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
                  <Path d="M8 1.125H12C16.0731 1.125 19.375 4.4269 19.375 8.5V12.5C19.375 16.5731 16.0731 19.875 12 19.875H8C3.9269 19.875 0.625 16.5731 0.625 12.5V8.5C0.625 4.4269 3.9269 1.125 8 1.125Z" fill="#F6F7FA"/>
                  <Path d="M8 1.125H12C16.0731 1.125 19.375 4.4269 19.375 8.5V12.5C19.375 16.5731 16.0731 19.875 12 19.875H8C3.9269 19.875 0.625 16.5731 0.625 12.5V8.5C0.625 4.4269 3.9269 1.125 8 1.125Z" stroke="#1FBE92" strokeWidth="1.25"/>
                  <Path d="M5.75 10.5L8.58 13.33L14.25 7.67001" stroke="#1FBE92" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              )}
            </View>
            <Text style={styles.checkboxText}>Keep me logged in</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => router.push('/onboarding/forgot-password')}>
            <Text style={styles.forgotPasswordText}>Forget password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have account? </Text>
          <TouchableOpacity onPress={() => router.push('/onboarding/signup')}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
    alignSelf: 'center',
    width: '100%',
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
  },
  header: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#263574',
  },
  subtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#5C5C5C',
    opacity: 0.7,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E3EF',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  providerIcon: {
    width: 26,
    height: 26,
  },
  socialButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#5C5C5C',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E3EF',
  },
  orText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#5C5C5C',
  },
  inputContainer: {
    gap: 6,
  },
  inputLabel: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#263574',
  },
  inputField: {
    height: 48,
    backgroundColor: '#F6F7FA',
    borderWidth: 1.25,
    borderColor: '#F6F7FA',
    borderRadius: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#5C5C5C',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: '#F6F7FA',
    borderWidth: 1.25,
    borderColor: '#1FBE92',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#F6F7FA',
  },
  checkboxText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.02,
    color: '#5C5C5C',
    opacity: 0.9,
  },
  forgotPasswordText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'right',
    letterSpacing: -0.02,
    color: '#2F4291',
  },
  loginButton: {
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  loginButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#2F4291',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#5C5C5C',
  },
  signUpLink: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#27EDB7',
  },
});
