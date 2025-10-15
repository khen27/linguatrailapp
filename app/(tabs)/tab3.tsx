import { View, StyleSheet, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import Svg, { Path, Rect, Defs, LinearGradient as SvgLinearGradient, Stop, Circle } from 'react-native-svg';

export default function InsightsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Background Ellipses Group */}
        <View style={styles.ellipseGroup}>
          <View style={styles.ellipse12} />
          <View style={styles.ellipse11} />
          <View style={styles.ellipse13} />
        </View>

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
                <Text style={styles.greetingTitle}>Hi Zander 👋</Text>
              </View>
            </View>
            <View style={styles.streakContainer}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakNumber}>12</Text>
              <Text style={styles.streakText}>Day</Text>
            </View>
          </View>

          {/* Main Content Container */}
          <View style={styles.mainContentContainer}>
            {/* Main Content Card */}
            <View style={styles.mainCard}>
            {/* Trail Progress Header */}
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderContent}>
                <Text style={styles.cardHeaderTitle}>Trail Progress</Text>
              </View>
            </View>

            {/* Card Content */}
            <View style={styles.cardContent}>
              {/* Weekly Overview Section */}
              <View style={styles.weeklyOverview}>
                <Text style={styles.sectionTitle}>Weekly Overview</Text>
                
                {/* Progress Bars Container */}
                <View style={styles.progressBarsContainer}>
                  {/* Last Week */}
                  <View style={styles.progressRow}>
                    <Text style={styles.progressLabel}>Last</Text>
                    <View style={styles.progressBarContainer}>
                      <View style={[styles.progressBar, styles.lastWeekBar]}>
                        <Text style={styles.progressBarText}>23 mins</Text>
                      </View>
                      <Text style={styles.progressPercentage}>+13%</Text>
                    </View>
                  </View>

                  {/* This Week */}
                  <View style={styles.progressRow}>
                    <Text style={styles.progressLabel}>This</Text>
                    <View style={styles.progressBarContainer}>
                      <View style={[styles.progressBar, styles.thisWeekBar]}>
                        <Text style={styles.progressBarText}>29 mins</Text>
                      </View>
                      <Text style={styles.progressPercentage}>+21%</Text>
                    </View>
                  </View>
                </View>

                {/* Achievement Banner */}
                <View style={styles.achievementBanner}>
                  <Text style={styles.achievementText}>🏆 +15% better than last week</Text>
                </View>
              </View>

              {/* Metrics List */}
              <View style={styles.metricsList}>
                {/* Words Memorized */}
                <View style={styles.metricItem}>
                  <View style={styles.metricIcon}>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <Circle cx="8" cy="8" r="6.67" fill="#27EDB7" />
                    </Svg>
                  </View>
                  <Text style={styles.metricLabel}>Words Memorized</Text>
                  <Text style={styles.metricValue}>152 | 85% retention</Text>
                </View>

                {/* Sentence Accuracy */}
                <View style={styles.metricItem}>
                  <View style={styles.metricIcon}>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <Path d="M1.33 2.13L3.47 1.33C3.73 1.24 4 1.4 4 1.68V3.33C4 3.61 3.73 3.77 3.47 3.68L1.33 2.88C1.07 2.79 1.07 2.22 1.33 2.13Z" fill="#36BAAE"/>
                      <Path d="M8.53 2.13L10.67 1.33C10.93 1.24 11.2 1.4 11.2 1.68V3.33C11.2 3.61 10.93 3.77 10.67 3.68L8.53 2.88C8.27 2.79 8.27 2.22 8.53 2.13Z" fill="#36BAAE"/>
                    </Svg>
                  </View>
                  <Text style={styles.metricLabel}>Sentence Accuracy</Text>
                  <Text style={styles.metricValue}>6% correct</Text>
                </View>

                {/* Lessons Done */}
                <View style={styles.metricItem}>
                  <View style={styles.metricIcon}>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <Path d="M8.53 1.78L13.47 1.78C13.73 1.78 14 1.94 14 2.22V11.78C14 12.06 13.73 12.22 13.47 12.22L8.53 12.22" fill="#F5C63B"/>
                      <Path d="M1.33 1.78L6.27 1.78C6.53 1.78 6.8 1.94 6.8 2.22V11.78C6.8 12.06 6.53 12.22 6.27 12.22L1.33 12.22" fill="#F5C63B"/>
                    </Svg>
                  </View>
                  <Text style={styles.metricLabel}>Lessons Done</Text>
                  <Text style={styles.metricValue}>23 completed</Text>
                </View>

                {/* Reviews Done */}
                <View style={styles.metricItem}>
                  <View style={styles.metricIcon}>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <Circle cx="8" cy="8" r="6.67" fill="#2F4291" />
                    </Svg>
                  </View>
                  <Text style={styles.metricLabel}>Reviews Done</Text>
                  <Text style={styles.metricValue}>7 this week</Text>
                </View>
              </View>
            </View>
          </View>

            {/* AI Insights Section */}
            <View style={styles.aiInsightsSection}>
              <View style={styles.aiInsightsHeader}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path d="M8.04 12L12 8.04L15.96 12L12 15.96L8.04 12Z" fill="#F5C63B"/>
                  <Path d="M4.02 12L8 8.02L11.98 12L8 15.98L4.02 12Z" fill="#F5C63B"/>
                </Svg>
                <Text style={styles.aiInsightsTitle}>AI Insights</Text>
              </View>
              
              <View style={styles.aiInsightsCard}>
                <Text style={styles.aiInsightsText}>
                  You're making great progress with 72% overall completion and strong growth in speaking (78%) and listening (70%). With an 18-day streak and 640+ words learned, your consistency is paying off — keep it up to reach full fluency soon!
                </Text>
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
    paddingBottom: 120,
  },
  // Background Ellipses
  ellipseGroup: {
    position: 'absolute',
    width: 381.6,
    height: 281.39,
    left: '50%',
    marginLeft: -190.8 + 0.3,
    top: -111,
    opacity: 0.7,
  },
  ellipse12: {
    position: 'absolute',
    width: 235.6,
    height: 381.6,
    left: -72.7,
    top: -65.62,
    backgroundColor: '#EAECF4',
    borderRadius: 190.8,
    transform: [{ rotate: '90deg' }],
  },
  ellipse11: {
    position: 'absolute',
    width: 130.23,
    height: 210.94,
    left: -40.13,
    top: -104.83,
    backgroundColor: '#BFC4DD',
    borderRadius: 105.47,
    transform: [{ rotate: '90deg' }],
  },
  ellipse13: {
    position: 'absolute',
    width: 116.02,
    height: 187.92,
    left: -36.17,
    top: -111,
    backgroundColor: '#E0E3EF',
    borderRadius: 93.96,
    transform: [{ rotate: '90deg' }],
  },
  // Header Section
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    flexShrink: 1,
    marginRight: 8,
  },
  profileAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  greetingContainer: {
    alignItems: 'flex-start',
    flexShrink: 1,
    marginRight: 8,
  },
  greetingSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#263574',
    opacity: 0.7,
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  greetingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9EB',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 1000,
    width: 80,
    height: 40,
    gap: 6,
    flexShrink: 0,
  },
  streakEmoji: {
    fontSize: 16,
    lineHeight: 18,
  },
  streakNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 18,
    fontFamily: 'Urbanist',
  },
  streakText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#263574',
    lineHeight: 18,
    fontFamily: 'Urbanist',
  },
  // Main Content Container
  mainContentContainer: {
    position: 'absolute',
    width: 335,
    left: '50%',
    marginLeft: -167.5, // -335/2
    top: 115,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  // Main Card
  mainCard: {
    width: 335,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#E9FDF8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingBottom: 32,
    marginBottom: -24,
    width: 335,
    height: 65,
  },
  cardHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  cardHeaderTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
    textAlign: 'left',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    width: 300,
    height: 21,
  },
  cardContent: {
    padding: 20,
    gap: 16,
  },
  // Weekly Overview
  weeklyOverview: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  progressBarsContainer: {
    backgroundColor: '#E9FDF8',
    borderRadius: 12,
    padding: 16,
    paddingTop: 12,
    gap: 16,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#263574',
    width: 22,
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  progressBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 1000,
    paddingRight: 8,
  },
  progressBar: {
    height: 24,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  lastWeekBar: {
    backgroundColor: '#F5C63B',
    width: 152,
  },
  thisWeekBar: {
    backgroundColor: '#27EDB7',
    width: 211,
  },
  progressBarText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  progressPercentage: {
    fontSize: 12,
    fontWeight: '600',
    color: '#263574',
    textAlign: 'right',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    marginLeft: 8,
  },
  achievementBanner: {
    backgroundColor: '#FEF9EB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2F4291',
    textAlign: 'center',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  // Metrics List
  metricsList: {
    gap: 8,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F7FA',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  metricIcon: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricLabel: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#595959',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    marginLeft: 4,
  },
  metricValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  // AI Insights Section
  aiInsightsSection: {
    width: 335,
    gap: 12,
  },
  aiInsightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  aiInsightsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  aiInsightsCard: {
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 1.5,
    borderLeftColor: '#F5C63B',
    borderRadius: 16,
    padding: 16,
  },
  aiInsightsText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
    lineHeight: 21,
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
});