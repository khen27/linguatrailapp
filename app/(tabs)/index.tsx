import { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Rect, Defs, LinearGradient as SvgLinearGradient, Stop, Circle } from 'react-native-svg';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';
import { useRouter } from 'expo-router';
import { useToast } from '@/hooks/useToast';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
  const { isOn, setFlag } = useFeatureFlags();
  const router = useRouter();
  const toast = useToast();
  const [learningInput, setLearningInput] = useState('');
  const [inputContentHeight, setInputContentHeight] = useState(24);

  const progressTrackColor = useThemeColor({ light: '#E9FDF8', dark: '#2F3639' }, 'background');
  const progressTrackColorAlt2 = useThemeColor({ light: '#FEF9EB', dark: '#2F3639' }, 'background');
  const progressTrackColorAlt3 = useThemeColor({ light: '#FEEDEF', dark: '#2F3639' }, 'background');
  
  // Check if we should show the notification
  const shouldShowNotification = isOn('extendedFirstRun') && !isOn('hasSeenExtendedFirstRun');

  return (
    <ThemedView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Background Ellipses */}
        <View style={styles.ellipse12} />
        <View style={styles.ellipse11} />
        <View style={styles.ellipse13} />

        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
        >
          {/* Top Header Section */}
          <View style={styles.header}>
        <View style={styles.headerLeft}>
        <ThemedView lightColor="#FFFFFF" darkColor="#1C2124" style={[
          styles.profileAvatarContainer,
          shouldShowNotification && styles.profileAvatarWithNotification
        ]}>
          <Image
            source={require('@/assets/q.jpg')}
            style={styles.profileAvatar}
          />
        </ThemedView>
          <View style={styles.greetingContainer}>
            <ThemedText style={styles.greetingSubtitle}>Welcome back!</ThemedText>
            <ThemedText style={styles.greetingTitle}>Zander 👋</ThemedText>
          </View>
        </View>
        <ThemedView lightColor="#FEF9EB" darkColor="#2D2A1F" style={styles.streakContainer}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <ThemedText style={styles.streakNumber}>12</ThemedText>
        </ThemedView>
      </View>

      {/* Extended First Run Notification */}
      {shouldShowNotification && (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => { setFlag('hasSeenExtendedFirstRun', true); router.push('/(tabs)/profile'); }}
        >
          <ThemedView lightColor="#FEEDEF" darkColor="#2D1F20" style={styles.extendedFirstRunNotification}>
            <View style={styles.extendedFirstRunContent}>
              <View style={styles.extendedFirstRunIconContainer}>
                <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <Rect x="42" y="42" width="42" height="42" rx="8" transform="rotate(180 42 42)" fill="#FDC8CC"/>
                  <Path d="M29.1331 24.2667L23.7997 14.6667C23.0831 13.375 22.0914 12.6667 20.9997 12.6667C19.9081 12.6667 18.9164 13.375 18.1997 14.6667L12.8664 24.2667C12.1914 25.4917 12.1164 26.6667 12.6581 27.5917C13.1997 28.5167 14.2664 29.025 15.6664 29.025H26.3331C27.7331 29.025 28.7997 28.5167 29.3414 27.5917C29.8831 26.6667 29.8081 25.4833 29.1331 24.2667ZM20.3747 18.5C20.3747 18.1583 20.6581 17.875 20.9997 17.875C21.3414 17.875 21.6247 18.1583 21.6247 18.5V22.6667C21.6247 23.0083 21.3414 23.2917 20.9997 23.2917C20.6581 23.2917 20.3747 23.0083 20.3747 22.6667V18.5ZM21.5914 25.7583C21.5497 25.7917 21.5081 25.825 21.4664 25.8583C21.4164 25.8917 21.3664 25.9167 21.3164 25.9333C21.2664 25.9583 21.2164 25.975 21.1581 25.9833C21.1081 25.9917 21.0497 26 20.9997 26C20.9497 26 20.8914 25.9917 20.8331 25.9833C20.7831 25.975 20.7331 25.9583 20.6831 25.9333C20.6331 25.9167 20.5831 25.8917 20.5331 25.8583C20.4914 25.825 20.4497 25.7917 20.4081 25.7583C20.2581 25.6 20.1664 25.3833 20.1664 25.1667C20.1664 24.95 20.2581 24.7333 20.4081 24.575C20.4497 24.5417 20.4914 24.5083 20.5331 24.475C20.5831 24.4417 20.6331 24.4167 20.6831 24.4C20.7331 24.375 20.7831 24.3583 20.8331 24.35C20.9414 24.325 21.0581 24.325 21.1581 24.35C21.2164 24.3583 21.2664 24.375 21.3164 24.4C21.3664 24.4167 21.4164 24.4417 21.4664 24.475C21.5081 24.5083 21.5497 24.5417 21.5914 24.575C21.7414 24.7333 21.8331 24.95 21.8331 25.1667C21.8331 25.3833 21.7414 25.6 21.5914 25.7583Z" fill="#C63E49"/>
                </Svg>
              </View>
              <View style={styles.extendedFirstRunText}>
                <ThemedText style={styles.extendedFirstRunTitle}>Tell us how you learn</ThemedText>
                <ThemedText style={styles.extendedFirstRunSubtitle}>Go to your Profile to personalize your lessons.</ThemedText>
              </View>
            </View>
          </ThemedView>
        </TouchableOpacity>
      )}

      {/* Learned Today Section */}
      <View style={styles.learnedTodaySection}>
        <ThemedView lightColor="rgba(255,255,255,0.75)" darkColor="#11181C" style={styles.learnedTodayCard}>
          <View style={styles.learnedTodayContent}>
            <View style={styles.learnedTodayStats}>
              <ThemedText style={styles.learnedTodayTitle}>Learned Today</ThemedText>
              <View style={styles.learnedTodayTimeContainer}>
                <ThemedText style={styles.learnedTodayTimeMain}>36</ThemedText>
                <ThemedText style={styles.learnedTodayTimeUnit}> Min</ThemedText>
                <ThemedText style={styles.learnedTodayTimeSlash}> / </ThemedText>
                <ThemedText style={styles.learnedTodayTimeTotal}>60 Min</ThemedText>
              </View>
              <View style={styles.learnedTodayProgressContainer}>
                <View style={styles.learnedTodayProgressTrack} />
                <View style={styles.learnedTodayProgressFill} />
              </View>
            </View>
            <View style={styles.trophyIcon}>
              <Image
                source={require('@/assets/icons/trophy.png')}
                style={styles.trophyImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </ThemedView>
      </View>

      {/* What Would You Like To Learn Today Section */}
      <View style={styles.learningInputSection}>
        <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.learningInputCard}>
          <ThemedText style={styles.learningInputTitle}>What Would You Like To Learn Today?</ThemedText>
          <ThemedView lightColor="#F6F7FA" darkColor="#1C2124" style={styles.learningInputContainer}>
            <TextInput
              style={[styles.learningInputText, { height: Math.min(Math.max(24, inputContentHeight), 96) }]}
              placeholder="Ask anything..."
              placeholderTextColor="#5C5C5C"
              value={learningInput}
              onChangeText={setLearningInput}
              multiline
              textAlignVertical="top"
              scrollEnabled={true}
              onContentSizeChange={(event) => {
                const { height } = event.nativeEvent.contentSize;
                setInputContentHeight(height);
              }}
            />
            <View style={styles.learningInputButtons}>
              <TouchableOpacity 
                style={styles.uploadButton}
                onPress={() => toast.show({ message: 'Coming Soon!', preset: 'comingSoon' })}
                activeOpacity={0.8}
              >
                <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <Rect x="41.5" y="41.5" width="41" height="41" rx="20.5" transform="rotate(180 41.5 41.5)" fill="white"/>
                  <Rect x="41.5" y="41.5" width="41" height="41" rx="20.5" transform="rotate(180 41.5 41.5)" stroke="#E0E3EF"/>
                  <Path d="M20.9749 21V23.9167C20.9749 25.525 22.2833 26.8333 23.8916 26.8333C25.4999 26.8333 26.8083 25.525 26.8083 23.9167V19.3333C26.8083 16.1083 24.1999 13.5 20.9749 13.5C17.7499 13.5 15.1416 16.1083 15.1416 19.3333V24.3333C15.1416 27.0917 17.3833 29.3333 20.1416 29.3333" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.sendButton}
                onPress={() => toast.show({ message: 'Coming Soon!', preset: 'comingSoon' })}
                activeOpacity={0.8}
              >
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path d="M12 19L12 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M5 12L12 5L19 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </TouchableOpacity>
            </View>
          </ThemedView>
        </ThemedView>
      </View>

      {/* Notification Banner */}
      <View style={styles.notificationBanner}>
        <ThemedView lightColor="#FEF9EB" darkColor="#2D2A1F" style={styles.notificationContent}>
          <View style={styles.notificationIcon}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path opacity="0.4" d="M12.0001 7.88989L10.9301 9.74989C10.6901 10.1599 10.8901 10.4999 11.3601 10.4999H12.6301C13.1101 10.4999 13.3001 10.8399 13.0601 11.2499L12.0001 13.1099" stroke="#DDB235" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M8.30011 18.0399V16.8799C6.00011 15.4899 4.11011 12.7799 4.11011 9.89993C4.11011 4.94993 8.66011 1.06993 13.8001 2.18993C16.0601 2.68993 18.0401 4.18993 19.0701 6.25993C21.1601 10.4599 18.9601 14.9199 15.7301 16.8699V18.0299C15.7301 18.3199 15.8401 18.9899 14.7701 18.9899H9.26011C8.16011 18.9999 8.30011 18.5699 8.30011 18.0399Z" stroke="#DDB235" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path opacity="0.4" d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke="#DDB235" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
          <View style={styles.notificationText}>
            <ThemedText style={styles.notificationTitle}>First Spanish lesson completed! Add details for your next lesson.</ThemedText>
          </View>
        </ThemedView>
      </View>


      {/* Ongoing Tasks - Horizontal Scrollable */}
      <View style={styles.tasksSection}>
        <View style={styles.tasksHeader}>
          <ThemedText style={styles.tasksTitle}>Ongoing Tasks</ThemedText>
          <ThemedText style={styles.viewAllText}>View all</ThemedText>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tasksScrollContainer}
          style={styles.tasksScrollView}
        >
          {/* Spanish Task Card */}
          <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.horizontalTaskCard}>
            <View style={styles.circularProgressContainer}>
              <View style={styles.progressChart}>
                <Svg width="60" height="60" viewBox="0 0 60 60">
                  <Circle cx="30" cy="30" r="22" fill="none" stroke="#E9FDF8" strokeWidth="8" />
                  <Circle cx="30" cy="30" r="22" fill="none" stroke="#27EDB7" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 22 * 0.87} ${2 * Math.PI * 22}`} strokeDashoffset={2 * Math.PI * 22 * 0.25} transform="rotate(-90 30 30)" strokeLinecap="round" />
                </Svg>
                <ThemedText style={styles.progressPercentage}>87%</ThemedText>
              </View>
            </View>
            <View style={styles.taskTextContainer}>
              <ThemedText style={styles.taskTitle}>Spanish Language</ThemedText>
              <ThemedText style={styles.taskSubtitle}>13% remaining</ThemedText>
            </View>
          </ThemedView>

          {/* Danish Task Card */}
          <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.horizontalTaskCard}>
            <View style={styles.circularProgressContainer}>
              <View style={styles.progressChart}>
                <Svg width="60" height="60" viewBox="0 0 60 60">
                  <Circle cx="30" cy="30" r="22" fill="none" stroke="#FEF9EB" strokeWidth="8" />
                  <Circle cx="30" cy="30" r="22" fill="none" stroke="#F5C63B" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 22 * 0.69} ${2 * Math.PI * 22}`} strokeDashoffset={2 * Math.PI * 22 * 0.25} transform="rotate(-90 30 30)" strokeLinecap="round" />
                </Svg>
                <ThemedText style={styles.progressPercentage}>69%</ThemedText>
              </View>
            </View>
            <View style={styles.taskTextContainer}>
              <ThemedText style={styles.taskTitle}>Danish Language</ThemedText>
              <ThemedText style={styles.taskSubtitle}>31% remaining</ThemedText>
            </View>
          </ThemedView>

          {/* Turkish Task Card */}
          <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.horizontalTaskCard}>
            <View style={styles.circularProgressContainer}>
              <View style={styles.progressChart}>
                <Svg width="60" height="60" viewBox="0 0 60 60">
                  <Circle cx="30" cy="30" r="22" fill="none" stroke="#FEEDEF" strokeWidth="8" />
                  <Circle cx="30" cy="30" r="22" fill="none" stroke="#F84E5B" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 22 * 0.48} ${2 * Math.PI * 22}`} strokeDashoffset={2 * Math.PI * 22 * 0.25} transform="rotate(-90 30 30)" strokeLinecap="round" />
                </Svg>
                <ThemedText style={styles.progressPercentage}>48%</ThemedText>
              </View>
            </View>
            <View style={styles.taskTextContainer}>
              <ThemedText style={styles.taskTitle}>Turkish Language</ThemedText>
              <ThemedText style={styles.taskSubtitle}>52% remaining</ThemedText>
            </View>
          </ThemedView>
        </ScrollView>
      </View>
      </ScrollView>
    </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  ellipse12: {
    position: 'absolute',
    width: 235.6,
    height: 381.6,
    left: 375 / 2 - 235.6 / 2 - 72.7,
    top: -250,
    backgroundColor: '#E1F2F6',
    borderRadius: 381.6 / 2,
    opacity: 0.15,
    transform: [{ rotate: '90deg' }],
  },
  ellipse11: {
    position: 'absolute',
    width: 130.23,
    height: 210.94,
    left: 375 / 2 - 130.23 / 2 - 40.13,
    top: -280,
    backgroundColor: '#ACBCE3',
    borderRadius: 210.94 / 2,
    opacity: 0.12,
    transform: [{ rotate: '90deg' }],
  },
  ellipse13: {
    position: 'absolute',
    width: 116.02,
    height: 187.92,
    left: 375 / 2 - 116.02 / 2 - 36.17,
    top: -300,
    backgroundColor: '#D9E1F2',
    borderRadius: 187.92 / 2,
    opacity: 0.1,
    transform: [{ rotate: '90deg' }],
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileAvatarContainer: {
    position: 'relative',
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWithNotification: {
    borderWidth: 1.5,
    borderColor: '#F84E5B',
  },
  profileAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#F84E5B',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    lineHeight: 12,
    textAlign: 'center',
    fontFamily: 'Urbanist',
  },
  greetingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 1,
    marginRight: 8,
  },
  greetingSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.7,
    letterSpacing: -0.02,
    lineHeight: 18,
    fontFamily: 'Urbanist',
  },
  greetingTitle: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 1036.36,
    width: 80,
    height: 40,
    gap: 6,
    flexShrink: 0,
  },
  streakEmoji: {
    fontSize: 13,
    lineHeight: 15,
    margin: 0,
    padding: 0,
  },
  streakNumber: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19,
    letterSpacing: -0.26,
    fontFamily: 'Urbanist',
    margin: 0,
    padding: 0,
  },
  streakText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 19,
    letterSpacing: -0.26,
    fontFamily: 'Urbanist',
    margin: 0,
    padding: 0,
  },
  // Extended First Run Notification
  extendedFirstRunNotification: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
  },
  extendedFirstRunContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minHeight: 58,
  },
  extendedFirstRunIconContainer: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  extendedFirstRunText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    flex: 1,
    flexShrink: 1,
  },
  extendedFirstRunTitle: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 21,
    fontFamily: 'Urbanist',
  },
  extendedFirstRunSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.02,
    lineHeight: 21,
    fontFamily: 'Urbanist',
  },
  // Learned Today Section
  learnedTodaySection: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  learnedTodayTitle: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 21,
    fontFamily: 'Urbanist',
  },
  learnedTodayCard: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 12,
  },
  learnedTodayContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
  },
  trophyIcon: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trophyImage: {
    width: 52,
    height: 52,
  },
  learnedTodayStats: {
    flex: 1,
    gap: 2,
  },
  learnedTodayTimeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
  },
  learnedTodayTimeMain: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 29,
    fontFamily: 'Urbanist',
  },
  learnedTodayTimeUnit: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  learnedTodayTimeSlash: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  learnedTodayTimeTotal: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  learnedTodayProgressContainer: {
    position: 'relative',
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
  },
  learnedTodayProgressTrack: {
    position: 'absolute',
    width: '100%',
    height: 10,
    borderRadius: 1000,
    backgroundColor: '#F6F7FA',
  },
  learnedTodayProgressFill: {
    position: 'absolute',
    width: '60%', // 36/60 = 60%
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  // Learning Input Section
  learningInputSection: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 0,
    marginTop: 16,
    zIndex: 1,
  },
  learningInputTitle: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 29,
    fontFamily: 'Urbanist',
    textTransform: 'capitalize',
    width: 311,
    height: 58,
  },
  learningInputCard: {
    borderRadius: 16,
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 12,
    width: '100%',
    minHeight: 230,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: -24,
    marginBottom: 0,
    zIndex: 1,
  },
  learningInputContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 16,
    width: '100%',
    minHeight: 136,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 24,
    // Note: backdrop-filter is not supported in React Native
  },
  learningInputText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#263574',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
    width: '100%',
    minHeight: 24,
    maxHeight: 96,
    textAlignVertical: 'top',
    padding: 0,
    margin: 0,
  },
  learningInputButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 42,
    gap: 24,
    alignSelf: 'center',
  },
  uploadButton: {
    width: 42,
    height: 42,
    borderRadius: 1036.36,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E3EF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 11,
    transform: [{ rotate: '180deg' }],
  },
  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 48,
    backgroundColor: '#2F4291',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    shadowColor: '#0E091A',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 28,
    elevation: 12,
  },
  // Notification Banner
  notificationBanner: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: -24,
    zIndex: 0,
  },
  notificationContent: {
    borderRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    width: '100%',
    minHeight: 86,
    // Note: backdrop-filter is not supported in React Native
  },
  notificationIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationText: {
    flex: 1,
    // Removed fixed width to allow responsive sizing
    // Removed fixed height to allow text wrapping
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.02,
    lineHeight: 21,
    fontFamily: 'Urbanist',
    flex: 1,
    textAlign: 'left',
  },
  // Trail Progress outer card
  progressOuter: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#2F4291',
    borderRadius: 20,
    padding: 16,
  },
  progressTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.32,
    lineHeight: 24,
    marginBottom: 12,
  },
  progressInner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  progressHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  medalIconBox: {
    width: 89,
    height: 89,
    borderRadius: 12,
  },
  progressTextCol: {
    flex: 1,
    justifyContent: 'space-between',
  },
  progressSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2F4291',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  progressHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
    textTransform: 'capitalize',
  },
  progressSection: {
    marginTop: 12,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  progressNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
    marginTop: 4,
  },
  progressCompleted: {
    fontSize: 12,
    fontWeight: '500',
    color: '#F84E5B',
    opacity: 0.7,
    letterSpacing: -0.24,
    lineHeight: 18,
    textAlign: 'right',
    flex: 1,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
  },
  progressBarFill: {
    width: 129,
    height: 10,
    backgroundColor: '#2F4291',
    borderRadius: 1000,
  },
  motivationSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
  },
  motivationText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#012629',
    letterSpacing: -0.24,
    lineHeight: 18,
    textAlign: 'center',
  },
  tasksSection: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    gap: 8,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    width: '100%',
    height: 24,
  },
  tasksTitle: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
    height: 24,
    flex: 1,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 21,
    fontFamily: 'Urbanist',
    height: 21,
    flex: 0,
  },
  tasksScrollView: {
    marginLeft: -20,
    marginRight: -20,
  },
  tasksScrollContainer: {
    paddingHorizontal: 20,
    gap: 12,
    height: 171,
  },
  horizontalTaskCard: {
    borderRadius: 16,
    padding: 12,
    width: 141,
    height: 171,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 16,
    shadowColor: 'rgba(53, 102, 113, 0.05)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  circularProgressContainer: {
    width: 60,
    height: 60,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressChart: {
    width: 60,
    height: 60,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressDonut5: {
    position: 'absolute',
    left: '1.31%',
    right: '1.31%',
    top: '1.31%',
    bottom: '1.31%',
    backgroundColor: '#E9FDF8',
    borderWidth: 2.73267,
    borderColor: '#FFFFFF',
    borderRadius: 1000,
  },
  progressDonut1: {
    position: 'absolute',
    left: '1.31%',
    right: '1.31%',
    top: '1.31%',
    bottom: '1.31%',
    backgroundColor: '#27EDB7',
    borderWidth: 2.73267,
    borderColor: '#FFFFFF',
    borderRadius: 1000,
  },
  progressPercentage: {
    position: 'absolute',
    left: '31.67%',
    right: '31.67%',
    top: '35%',
    bottom: '35%',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 18,
    fontFamily: 'Urbanist',
    opacity: 0.7,
  },
  taskTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 2,
    width: 117,
    height: 71,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
    width: 117,
    height: 48,
    flex: 0,
    alignSelf: 'stretch',
  },
  taskSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.02,
    lineHeight: 21,
    fontFamily: 'Urbanist',
    opacity: 0.7,
    width: 117,
    height: 21,
    flex: 0,
    alignSelf: 'stretch',
  },
});