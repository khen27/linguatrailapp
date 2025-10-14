import { View, StyleSheet, Text, Image, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Background Ellipses */}
        <View style={styles.ellipse12} />
        <View style={styles.ellipse11} />
        <View style={styles.ellipse13} />

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* Top Header Section */}
          <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('@/assets/images/zander-van-gogh.png')}
            style={styles.profileAvatar}
          />
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingSubtitle}>Welcome back!</Text>
            <Text style={styles.greetingTitle}>Good Morning, Alex 👋</Text>
          </View>
        </View>
        <View style={styles.streakContainer}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <Text style={styles.streakNumber}>12</Text>
          <Text style={styles.streakText}>Day</Text>
        </View>
      </View>

      {/* Trail Progress - Outer Card */}
      <View style={styles.progressOuter}>
        <Text style={styles.progressTitle}>Trail Progress</Text>
        {/* Inner White Card */}
        <View style={styles.progressInner}>
          <View style={styles.progressHeaderRow}>
            <View style={styles.medalIconBox} />
            <View style={styles.progressTextCol}>
              <Text style={styles.progressSubtitle}>Main Goal</Text>
              <Text style={styles.progressHeading}>Enhance Vocabulary</Text>
            </View>
          </View>
          
          {/* Progress Section */}
          <View style={styles.progressSection}>
            <View style={styles.progressRow}>
              <Text style={styles.progressNumber}>57%</Text>
              <Text style={styles.progressCompleted}>5 of 7 completed</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarTrack} />
              <View style={styles.progressBarFill} />
            </View>
          </View>
          
          {/* Motivational Message */}
          <View style={styles.motivationSection}>
            <Text style={styles.motivationText}>You are going so well with your language journey!</Text>
          </View>
        </View>
      </View>

      {/* Recent Transactions Title & First Task Card */}
      <View style={styles.tasksSection}>
        <Text style={styles.tasksTitle}>Recent Transactions</Text>
        
        <View style={styles.taskCard}>
          <View style={styles.taskIcon}>
            <Text style={styles.taskEmoji}>🇺🇸</Text>
          </View>
          <View style={styles.taskContent}>
            <View style={styles.taskHeader}>
              <Text style={styles.taskCategory}>Gamified 🎮</Text>
              <Text style={styles.taskPoints}>15 🔥</Text>
            </View>
            <Text style={styles.taskTitle}>English Vocabulary – Chapter 3</Text>
            <View style={styles.taskProgressContainer}>
              <View style={styles.taskProgressTrack} />
              <View style={styles.taskProgressFill} />
            </View>
          </View>
        </View>

        {/* Second Task Card */}
        <View style={styles.taskCard}>
          <View style={[styles.taskIcon, { backgroundColor: 'rgba(47, 66, 145, 0.05)' }]}>
            <Text style={styles.taskEmoji}>🎙️</Text>
          </View>
          <View style={styles.taskContent}>
            <View style={styles.taskHeader}>
              <Text style={styles.taskCategory}>Voice 🎙️</Text>
              <Text style={styles.taskPoints}>12 🔥</Text>
            </View>
            <Text style={styles.taskTitle}>Spanish Speaking Session</Text>
            <View style={styles.taskProgressContainer}>
              <View style={styles.taskProgressTrack} />
              <View style={[styles.taskProgressFill, { width: 196 }]} />
            </View>
          </View>
        </View>

        {/* Third Task Card */}
        <View style={styles.taskCard}>
          <View style={[styles.taskIcon, { backgroundColor: 'rgba(255, 99, 149, 0.05)' }]}>
            <Text style={styles.taskEmoji}>🗼</Text>
          </View>
          <View style={styles.taskContent}>
            <View style={styles.taskHeader}>
              <Text style={styles.taskCategory}>Chat 💬</Text>
              <Text style={styles.taskPoints}>20 🔥</Text>
            </View>
            <Text style={styles.taskTitle}>French Grammar Chat</Text>
            <View style={styles.taskProgressContainer}>
              <View style={styles.taskProgressTrack} />
              <View style={[styles.taskProgressFill, { width: 255, backgroundColor: '#68C0A5' }]} />
            </View>
          </View>
        </View>
      </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
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
  profileAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
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
    color: '#012629',
    opacity: 0.7,
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  greetingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 179, 0, 0.2)',
    borderRadius: 20,
    height: 36,
    gap: 4,
    flexShrink: 0,
  },
  streakEmoji: {
    fontSize: 14,
  },
  streakNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.28,
  },
  streakText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#012629',
    letterSpacing: -0.22,
  },
  // Trail Progress outer card
  progressOuter: {
    width: '100%',
    height: 223,
    marginHorizontal: 8,
    marginBottom: 20,
    backgroundColor: '#2F4291',
    borderRadius: 20,
    padding: 12,
  },
  progressTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.32,
    lineHeight: 24,
    textAlign: 'center',
  },
  progressInner: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingTop: 16,
    paddingBottom: 0,
  },
  progressHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  medalIconBox: {
    width: 89,
    height: 89,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 179, 0, 0.05)',
  },
  progressTextCol: {
    width: 202,
    height: 89,
    justifyContent: 'space-between',
  },
  progressSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#F84E5B',
    opacity: 0.7,
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
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 4,
    alignItems: 'center',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  progressNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
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
    width: 202,
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    marginTop: 4,
    alignSelf: 'center',
  },
  progressBarFill: {
    width: 129,
    height: 10,
    backgroundColor: '#2F4291',
    borderRadius: 1000,
  },
  motivationSection: {
    backgroundColor: '#F6F7FA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 20,
    gap: 12,
  },
  tasksTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    width: '100%',
    marginBottom: 12,
  },
  taskIcon: {
    width: 71,
    height: 71,
    backgroundColor: 'rgba(29, 197, 118, 0.05)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskEmoji: {
    fontSize: 38,
    lineHeight: 46,
  },
  taskContent: {
    flex: 1,
    gap: 12,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
  },
  taskCategory: {
    fontSize: 14,
    fontWeight: '500',
    color: '#012629',
    opacity: 0.7,
    letterSpacing: -0.28,
    lineHeight: 21,
    flex: 1,
  },
  taskPoints: {
    fontSize: 14,
    fontWeight: '500',
    color: '#012629',
    opacity: 0.7,
    letterSpacing: -0.28,
    lineHeight: 21,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
    textTransform: 'capitalize',
  },
  taskProgressContainer: {
    width: 244,
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
  },
  taskProgressTrack: {
    position: 'absolute',
    width: 244,
    height: 10,
    borderRadius: 1000,
    backgroundColor: '#F6F7FA',
  },
  taskProgressFill: {
    width: 53,
    height: 10,
    backgroundColor: '#2F4291',
    borderRadius: 1000,
  },
});