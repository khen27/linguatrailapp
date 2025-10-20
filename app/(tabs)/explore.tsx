import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Svg, Path, Circle } from 'react-native-svg';

export default function LessonsScreen() {
  const router = useRouter();

  const handleVoiceAssistantPress = () => {
    router.push('/voice-assistant');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Lessons</Text>
            <Text style={styles.headerSubtitle}>Choose your learning method</Text>
          </View>

          {/* Lesson Cards */}
          <View style={styles.lessonsContainer}>
            {/* Voice Assistant Card */}
            <TouchableOpacity 
              style={styles.lessonCard}
              onPress={handleVoiceAssistantPress}
              activeOpacity={0.8}
            >
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <Circle cx="20" cy="20" r="18" fill="#E9FDF8" stroke="#27EDB7" strokeWidth="2"/>
                    <Path d="M12 20C12 20 16 16 20 20C24 24 28 20 28 20" stroke="#27EDB7" strokeWidth="2" strokeLinecap="round"/>
                    <Path d="M20 12V20" stroke="#27EDB7" strokeWidth="2" strokeLinecap="round"/>
                  </Svg>
                </View>
                <Text style={styles.cardTitle}>Learn by Voice Assistant</Text>
              </View>
              <Text style={styles.cardDescription}>
                Practice pronunciation with AI-powered voice recognition and feedback
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardStatus}>Available</Text>
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <Path d="M7.5 15L12.5 10L7.5 5" stroke="#27EDB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </View>
            </TouchableOpacity>

            {/* Coming Soon Cards */}
            <View style={styles.lessonCard}>
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <Circle cx="20" cy="20" r="18" fill="#F6F7FA" stroke="#E0E3EF" strokeWidth="2"/>
                    <Path d="M15 20L18 23L25 16" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </Svg>
                </View>
                <Text style={styles.cardTitle}>Interactive Quiz</Text>
              </View>
              <Text style={styles.cardDescription}>
                Test your knowledge with multiple choice questions and instant feedback
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardStatusComingSoon}>Coming Soon</Text>
              </View>
            </View>

            <View style={styles.lessonCard}>
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <Circle cx="20" cy="20" r="18" fill="#F6F7FA" stroke="#E0E3EF" strokeWidth="2"/>
                    <Path d="M12 20H28M20 12V28" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
                  </Svg>
                </View>
                <Text style={styles.cardTitle}>Conversation Practice</Text>
              </View>
              <Text style={styles.cardDescription}>
                Engage in realistic conversations with AI-powered dialogue partners
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardStatusComingSoon}>Coming Soon</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#263574',
    letterSpacing: -0.56,
    lineHeight: 42,
    fontFamily: 'Urbanist',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C5C5C',
    letterSpacing: -0.32,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  lessonsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  lessonCard: {
    backgroundColor: '#FFFFFF',
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
    color: '#263574',
    letterSpacing: -0.36,
    lineHeight: 27,
    fontFamily: 'Urbanist',
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#5C5C5C',
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
    color: '#27EDB7',
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
