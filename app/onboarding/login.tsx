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
import Svg, { Path } from 'react-native-svg';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#263574" />
      
      {/* Background with decorative elements */}
      <View style={styles.background}>
        {/* Decorative blurred shapes */}
        <View style={styles.decorativeShape1} />
        <View style={styles.decorativeShape2} />
        <View style={styles.decorativeShape3} />
      </View>

      {/* Logo and Branding */}
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Svg width={55} height={34} viewBox="0 0 55 34" fill="none">
            <Path d="M1.31 15.2C1.31 15.2 1.31 15.2 1.31 15.2" fill="#2B958B"/>
            <Path d="M7.02 10.7C7.02 10.7 7.02 10.7 7.02 10.7" fill="#27EDB7"/>
            <Path d="M13.7 6.6C13.7 6.6 13.7 6.6 13.7 6.6" fill="#FFFFFF"/>
          </Svg>
        </View>
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
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.googleIcon}>
              <Text style={styles.googleText}>G</Text>
            </View>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.appleIcon}>
              <Text style={styles.appleText}>🍎</Text>
            </View>
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
                <Path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                  stroke="#263574"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
                <Svg width={9} height={6} viewBox="0 0 9 6" fill="none">
                  <Path
                    d="M1 3L3.5 5.5L8 1"
                    stroke="#1FBE92"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
          <TouchableOpacity>
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
    backgroundColor: '#263574',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  decorativeShape1: {
    position: 'absolute',
    width: 236,
    height: 382,
    left: -73,
    top: -26,
    backgroundColor: '#EBF8F7',
    borderRadius: 191,
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  decorativeShape2: {
    position: 'absolute',
    width: 130,
    height: 211,
    left: -40,
    top: -65,
    backgroundColor: '#BFC4DD',
    borderRadius: 105,
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  decorativeShape3: {
    position: 'absolute',
    width: 116,
    height: 188,
    left: -36,
    top: -71,
    backgroundColor: '#E0E3EF',
    borderRadius: 94,
    opacity: 0.3,
    transform: [{ rotate: '90deg' }],
  },
  logoContainer: {
    position: 'absolute',
    top: 92,
    left: '50%',
    transform: [{ translateX: -55 }],
    alignItems: 'center',
    gap: 2,
  },
  logo: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
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
  googleIcon: {
    width: 26,
    height: 26,
    backgroundColor: '#4285F4',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  appleIcon: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleText: {
    fontSize: 16,
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
    backgroundColor: '#1FBE92',
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
