import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Svg, Path, Circle, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LessonsScreen() {
  const router = useRouter();

  const handleVoiceAssistantPress = () => {
    router.push('/voice-assistant');
  };

  const handleInteractiveQuizPress = () => {
    router.push('/conversation-practice');
  };

  const handleConversationPracticePress = () => {
    router.push('/conversation-chat');
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <ThemedText style={styles.headerTitle}>Lessons</ThemedText>
              <ThemedText style={styles.headerSubtitle}>This is a placeholder screen for our learning modalities.</ThemedText>
            </View>
            <View style={styles.demoBubble}>
              <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <G clipPath="url(#clip0_4418_9868)">
                  <Path d="M12.92 2.25984L19.43 5.76984C20.19 6.17984 20.19 7.34984 19.43 7.75984L12.92 11.2698C12.34 11.5798 11.66 11.5798 11.08 11.2698L4.57 7.75984C3.81 7.34984 3.81 6.17984 4.57 5.76984L11.08 2.25984C11.66 1.94984 12.34 1.94984 12.92 2.25984Z" stroke="#27EDB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <Path d="M3.61 10.1297L9.66 13.1597C10.41 13.5397 10.89 14.3097 10.89 15.1497V20.8697C10.89 21.6997 10.02 22.2297 9.28 21.8597L3.23 18.8297C2.48 18.4497 2 17.6797 2 16.8397V11.1197C2 10.2897 2.87 9.75968 3.61 10.1297Z" stroke="#27EDB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <Path d="M20.39 10.1297L14.34 13.1597C13.59 13.5397 13.11 14.3097 13.11 15.1497V20.8697C13.11 21.6997 13.98 22.2297 14.72 21.8597L20.77 18.8297C21.52 18.4497 22 17.6797 22 16.8397V11.1197C22 10.2897 21.13 9.75968 20.39 10.1297Z" stroke="#27EDB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </G>
                <Defs>
                  <ClipPath id="clip0_4418_9868">
                    <Rect width="24" height="24" fill="white"/>
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={styles.demoBubbleText}>Demo</Text>
            </View>
          </View>

          {/* Lesson Cards */}
          <View style={styles.lessonsContainer}>
            {/* Voice Assistant Card */}
            <TouchableOpacity onPress={handleVoiceAssistantPress} activeOpacity={0.8}>
              <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.lessonCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.iconContainer}>
                    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <Circle cx="20" cy="20" r="18" fill="#E9FDF8" stroke="#27EDB7" strokeWidth="0.5"/>
                      <Defs>
                        <ClipPath id="clip0_4418_6789">
                          <Rect width="40" height="40" fill="white"/>
                        </ClipPath>
                      </Defs>
                      <G clipPath="url(#clip0_4418_6789)">
                        <Path d="M10 24.816C9.31667 24.816 8.75 24.2493 8.75 23.566V16.416C8.75 15.7327 9.31667 15.166 10 15.166C10.6833 15.166 11.25 15.7327 11.25 16.416V23.566C11.25 24.2493 10.6833 24.816 10 24.816Z" fill="#27EDB7"/>
                        <Path d="M15 27.1995C14.3167 27.1995 13.75 26.6328 13.75 25.9495V14.0495C13.75 13.3662 14.3167 12.7995 15 12.7995C15.6833 12.7995 16.25 13.3662 16.25 14.0495V25.9495C16.25 26.6328 15.6833 27.1995 15 27.1995Z" fill="#27EDB7"/>
                        <Path d="M20 29.5833C19.3167 29.5833 18.75 29.0166 18.75 28.3333V11.6667C18.75 10.9834 19.3167 10.4167 20 10.4167C20.6833 10.4167 21.25 10.9834 21.25 11.6667V28.3333C21.25 29.0166 20.6833 29.5833 20 29.5833Z" fill="#27EDB7"/>
                        <Path d="M25 27.1995C24.3167 27.1995 23.75 26.6328 23.75 25.9495V14.0495C23.75 13.3662 24.3167 12.7995 25 12.7995C25.6833 12.7995 26.25 13.3662 26.25 14.0495V25.9495C26.25 26.6328 25.6833 27.1995 25 27.1995Z" fill="#27EDB7"/>
                        <Path d="M30 24.816C29.3167 24.816 28.75 24.2493 28.75 23.566V16.416C28.75 15.7327 29.3167 15.166 30 15.166C30.6833 15.166 31.25 15.7327 31.25 16.416V23.566C31.25 24.2493 30.6833 24.816 30 24.816Z" fill="#27EDB7"/>
                        <Path d="M20 37.9167C10.1167 37.9167 2.08337 29.8833 2.08337 20C2.08337 10.1167 10.1167 2.08337 20 2.08337C29.8834 2.08337 37.9167 10.1167 37.9167 20C37.9167 29.8833 29.8834 37.9167 20 37.9167ZM20 4.58337C11.5 4.58337 4.58337 11.5 4.58337 20C4.58337 28.5 11.5 35.4167 20 35.4167C28.5 35.4167 35.4167 28.5 35.4167 20C35.4167 11.5 28.5 4.58337 20 4.58337Z" fill="#27EDB7"/>
                      </G>
                    </Svg>
                  </View>
                  <ThemedText style={styles.cardTitle}>Learn by Voice Assistant</ThemedText>
                </View>
                <ThemedText style={styles.cardDescription}>Practice pronunciation with AI-powered voice recognition and feedback</ThemedText>
                <View style={styles.cardFooter}>
                  <ThemedText style={styles.cardStatus}>Available</ThemedText>
                  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <Path d="M7.5 15L12.5 10L7.5 5" stroke="#2F4291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </Svg>
                </View>
              </ThemedView>
            </TouchableOpacity>

            {/* Interactive Quiz Card */}
            <TouchableOpacity onPress={handleInteractiveQuizPress} activeOpacity={0.8}>
              <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.lessonCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.iconContainer}>
                    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <Circle cx="20" cy="20" r="18" fill="#E9FDF8" stroke="#27EDB7" strokeWidth="0.5"/>
                      <Defs>
                        <ClipPath id="clip0_4418_7337">
                          <Rect width="40" height="40" fill="white"/>
                        </ClipPath>
                      </Defs>
                      <G clipPath="url(#clip0_4418_7337)">
                        <Path d="M27.2837 37.9488C27.2670 37.9488 27.2670 37.9488 27.2503 37.9488C25.9003 37.9321 24.7503 37.0654 24.3337 35.7821L20.5837 25.3654C20.2337 23.9988 20.5170 22.5321 21.5337 21.5488C22.5337 20.5654 23.9837 20.1988 25.3170 20.6154L35.2503 23.6988C36.8503 24.1988 37.9003 25.5988 37.9170 27.2821C37.9337 28.9488 36.9170 30.3654 35.3170 30.8988L32.6003 31.8154C32.2170 31.9488 31.9170 32.2321 31.8003 32.6154L30.8670 35.3488C30.3503 36.9321 28.9503 37.9488 27.2837 37.9488ZM24.1837 22.9488C23.7337 22.9488 23.4337 23.1988 23.3003 23.3154C22.9503 23.6654 22.8337 24.1488 22.9837 24.6321L26.7337 35.0488C27.0003 35.7321 27.7337 35.7654 27.9670 35.7821C28.2003 35.7821 28.9170 35.7154 29.1837 35.0654L30.1170 32.3321C30.4837 31.3821 31.3837 30.4988 32.3337 30.1154L35.0503 29.1988C35.7170 28.9321 35.7670 28.1988 35.7670 27.9821C35.7670 27.7654 35.7003 27.0321 35.0337 26.7654L25.1003 23.6821C24.9337 23.6321 24.8003 23.6154 24.6837 23.6154C24.5170 23.6154 24.3503 23.6321 24.1837 22.9488Z" fill="#27EDB7"/>
                        <Path d="M20 37.9167C10.1167 37.9167 2.08337 29.8833 2.08337 20C2.08337 10.1167 10.1167 2.08337 20 2.08337C29.8834 2.08337 37.9167 10.1167 37.9167 20C37.9167 20.6834 37.3501 21.25 36.6667 21.25C35.9834 21.25 35.4167 20.6834 35.4167 20C35.4167 11.5 28.5 4.58337 20 4.58337C11.5 4.58337 4.58337 11.5 4.58337 20C4.58337 28.5 11.5 35.4167 20 35.4167C20.6834 35.4167 21.25 35.9834 21.25 36.6667C21.25 37.35 20.6834 37.9167 20 37.9167Z" fill="#27EDB7"/>
                      </G>
                    </Svg>
                  </View>
                  <ThemedText style={styles.cardTitle}>Interactive Quiz</ThemedText>
                </View>
                <ThemedText style={styles.cardDescription}>Test your knowledge with multiple choice questions and instant feedback</ThemedText>
                <View style={styles.cardFooter}>
                  <ThemedText style={styles.cardStatus}>Available</ThemedText>
                  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <Path d="M7.5 15L12.5 10L7.5 5" stroke="#2F4291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </Svg>
                </View>
              </ThemedView>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleConversationPracticePress} activeOpacity={0.8}>
              <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.lessonCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.iconContainer}>
                    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <Circle cx="20" cy="20" r="18" fill="#E9FDF8" stroke="#27EDB7" strokeWidth="0.5"/>
                      <Defs>
                        <ClipPath id="clip0_4418_6692">
                          <Rect width="40" height="40" fill="white"/>
                        </ClipPath>
                      </Defs>
                      <G clipPath="url(#clip0_4418_6692)">
                        <Path d="M28.3162 16.1833H11.6831C11.1665 16.1833 10.7665 15.7833 10.7665 15.2667C10.7665 14.75 11.1665 14.35 11.6831 14.35H28.3162C28.8331 14.35 29.2331 14.75 29.2331 15.2667C29.2331 15.7833 28.8331 16.1833 28.3162 16.1833Z" fill="#27EDB7"/>
                        <Path d="M20 16.1833C19.4834 16.1833 19.0834 15.7833 19.0834 15.2667V12.1333C19.0834 11.6167 19.4834 11.2167 20 11.2167C20.5167 11.2167 20.9167 11.6167 20.9167 12.1333V15.2667C20.9167 15.7833 20.5167 16.1833 20 16.1833Z" fill="#27EDB7"/>
                        <Path d="M11.6667 29.1156C11.15 29.1156 10.75 28.7156 10.75 28.199C10.75 27.6823 11.15 27.2823 11.6667 27.2823C17.8667 27.2823 22.9167 21.3656 22.9167 14.899C22.9167 14.3823 23.3167 13.9823 23.8334 13.9823C24.35 13.9823 24.75 14.3823 24.75 14.899C24.75 22.7656 18.9167 29.1156 11.6667 29.1156Z" fill="#27EDB7"/>
                        <Path d="M28.3334 29.1167C25.0501 29.1167 22.0001 27.4834 19.7667 24.5001C19.3501 24.1167 19.4334 23.5001 19.8167 23.0834C20.2001 22.6667 20.8167 22.7501 21.2334 23.1334C22.8667 25.3334 25.8667 26.6167 28.3501 26.6167C28.8667 26.6167 29.2667 27.0167 29.2667 27.5334C29.2667 28.0501 28.8501 29.1167 28.3334 29.1167Z" fill="#27EDB7"/>
                        <Path d="M20 37.9167C10.1167 37.9167 2.08337 29.8833 2.08337 20C2.08337 10.1167 10.1167 2.08337 20 2.08337C29.8834 2.08337 37.9167 10.1167 37.9167 20C37.9167 29.8833 29.8834 37.9167 20 37.9167ZM20 4.58337C11.5 4.58337 4.58337 11.5 4.58337 20C4.58337 28.5 11.5 35.4167 20 35.4167C28.5 35.4167 35.4167 28.5 35.4167 20C35.4167 11.5 28.5 4.58337 20 4.58337Z" fill="#27EDB7"/>
                      </G>
                    </Svg>
                  </View>
                  <ThemedText style={styles.cardTitle}>Conversation Practice</ThemedText>
                </View>
                <ThemedText style={styles.cardDescription}>Engage in realistic conversations with AI-powered dialogue partners</ThemedText>
                <View style={styles.cardFooter}>
                  <ThemedText style={styles.cardStatus}>Available</ThemedText>
                  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <Path d="M7.5 15L12.5 10L7.5 5" stroke="#2F4291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </Svg>
                </View>
              </ThemedView>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.56,
    lineHeight: 42,
    fontFamily: 'Urbanist',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.32,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  demoBubble: {
    backgroundColor: '#2F4291',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 1000,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    gap: 6,
  },
  demoBubbleText: {
    color: '#27EDB7',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.28,
    fontFamily: 'Urbanist',
  },
  lessonsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  lessonCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.36,
    lineHeight: 27,
    fontFamily: 'Urbanist',
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.28,
    lineHeight: 21,
    fontFamily: 'Urbanist',
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.28,
    lineHeight: 21,
    fontFamily: 'Urbanist',
  },
  cardStatusComingSoon: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5C5C5C',
    letterSpacing: -0.28,
    lineHeight: 21,
    fontFamily: 'Urbanist',
  },
});
