import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Rect, Defs, LinearGradient as SvgLinearGradient, Stop, Circle } from 'react-native-svg';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function InsightsScreen() {
  return (
    <ThemedView style={styles.safeArea}>
      <View style={styles.container}>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* Top Header Section */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image
                source={require('@/assets/images/zander-van-gogh.png')}
                style={styles.profileAvatar}
              />
              <View style={styles.greetingContainer}>
                <ThemedText style={styles.greetingSubtitle}>Welcome back!</ThemedText>
                <ThemedText style={styles.greetingTitle}>Hi Zander 👋</ThemedText>
              </View>
            </View>
            <ThemedView lightColor="#FEF9EB" darkColor="#2D2A1F" style={styles.streakContainer}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <ThemedText style={styles.streakNumber}>12</ThemedText>
            </ThemedView>
          </View>

          {/* Main Content Container */}
          <View style={styles.mainContentContainer}>
            {/* Main Content Card */}
            <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.mainCard}>
            {/* Banner Header */}
            <ThemedView lightColor="#E9FDF8" darkColor="#1A2E2A" style={styles.cardHeader}>
              <View style={styles.cardHeaderContent}>
                <ThemedText style={styles.bannerText}>Your pronunciation improved by 12%! Keep going 🎤</ThemedText>
              </View>
            </ThemedView>

            {/* Card Content */}
            <View style={styles.cardContent}>
                <ThemedText style={styles.trailProgressTitle}>Trail Progress</ThemedText>
                
                <ThemedView lightColor="#E9FDF8" darkColor="#1A2E2A" style={styles.progressBarsContainer}>
                  <ThemedText style={styles.sectionTitle}>Weekly Overview</ThemedText>
                  
                  <View style={styles.progressRow}>
                    <ThemedText style={styles.progressLabel}>Last</ThemedText>
                    <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.progressBarContainer}>
                      <View style={[styles.progressBar, styles.lastWeekBar]}>
                        <Text style={styles.lastWeekText}>23 mins</Text>
                      </View>
                      <Text style={styles.lastWeekPercentage}>+13%</Text>
                    </ThemedView>
                  </View>

                  <View style={styles.progressRow}>
                    <ThemedText style={styles.progressLabel}>This</ThemedText>
                    <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.progressBarContainer}>
                      <View style={[styles.progressBar, styles.thisWeekBar]}>
                        <ThemedText style={styles.thisWeekText}>29 mins</ThemedText>
                      </View>
                      <ThemedText style={styles.thisWeekPercentage}>+21%</ThemedText>
                    </ThemedView>
                  </View>
                </ThemedView>

                <ThemedView lightColor="#FEF9EB" darkColor="#2D2A1F" style={styles.achievementBanner}>
                  <ThemedText style={styles.achievementText}>🏆 +15% better than last week</ThemedText>
                </ThemedView>

              <View style={styles.metricsList}>
                <ThemedView lightColor="#F6F7FA" darkColor="#1C2124" style={styles.metricItem}>
                  <View style={[styles.metricIcon, { backgroundColor: '#E9FDF8' }]}>
                    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <Path d="M7.99992 1.83325C4.31992 1.83325 1.33325 4.81992 1.33325 8.49992C1.33325 12.1799 4.31992 15.1666 7.99992 15.1666C11.6799 15.1666 14.6666 12.1799 14.6666 8.49992C14.6666 4.81992 11.6799 1.83325 7.99992 1.83325ZM11.3333 12.1466C10.1933 12.1466 9.12659 11.6533 8.27325 10.7399C7.30659 11.6133 6.04659 12.1466 4.66659 12.1466C4.39325 12.1466 4.16659 11.9199 4.16659 11.6466C4.16659 11.3733 4.39325 11.1466 4.66659 11.1466C6.97992 11.1466 8.89325 9.31325 9.13992 6.96659H7.99992H4.67325C4.39992 6.96659 4.17325 6.73992 4.17325 6.46659C4.17325 6.19325 4.39992 5.97325 4.67325 5.97325H7.49992V5.35325C7.49992 5.07992 7.72659 4.85325 7.99992 4.85325C8.27325 4.85325 8.49992 5.07992 8.49992 5.35325V5.97325H9.62659C9.63992 5.97325 9.65325 5.96659 9.66659 5.96659C9.67992 5.96659 9.69325 5.97325 9.70659 5.97325H11.3266C11.5999 5.97325 11.8266 6.19992 11.8266 6.47325C11.8266 6.74659 11.5999 6.97325 11.3266 6.97325H10.1399C10.0399 8.11325 9.61325 9.15992 8.95992 10.0133C9.62659 10.7533 10.4599 11.1533 11.3333 11.1533C11.6066 11.1533 11.8333 11.3799 11.8333 11.6533C11.8333 11.9266 11.6066 12.1466 11.3333 12.1466Z" fill="#27EDB7"/>
                    </Svg>
                  </View>
                  <ThemedText style={styles.metricLabel}>Words Memorized</ThemedText>
                  <ThemedText style={styles.metricValue}>152 | 85% retention</ThemedText>
                </ThemedView>

                <ThemedView lightColor="#F6F7FA" darkColor="#1C2124" style={styles.metricItem}>
                  <View style={[styles.metricIcon, { backgroundColor: '#E9FDF8' }]}>
                    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <Path d="M5.39325 8.2534H2.26659C2.31992 5.14006 2.93325 4.62673 4.84659 3.4934C5.06659 3.36006 5.13992 3.08006 5.00659 2.8534C4.87992 2.6334 4.59325 2.56006 4.37325 2.6934C2.11992 4.02673 1.33325 4.84006 1.33325 8.7134V12.3067C1.33325 13.4467 2.25992 14.3667 3.39325 14.3667H5.39325C6.56659 14.3667 7.45325 13.4801 7.45325 12.3067V10.3067C7.45325 9.14006 6.56659 8.2534 5.39325 8.2534Z" fill="#36BAAE"/>
                      <Path d="M12.6067 8.2534H9.48004C9.53337 5.14006 10.1467 4.62673 12.06 3.4934C12.28 3.36006 12.3534 3.08006 12.22 2.8534C12.0867 2.6334 11.8067 2.56006 11.58 2.6934C9.32671 4.02673 8.54004 4.84006 8.54004 8.72006V12.3134C8.54004 13.4534 9.46671 14.3734 10.6 14.3734H12.6C13.7734 14.3734 14.66 13.4867 14.66 12.3134V10.3134C14.6667 9.14006 13.78 8.2534 12.6067 8.2534Z" fill="#36BAAE"/>
                    </Svg>
                  </View>
                  <ThemedText style={styles.metricLabel}>Sentence Accuracy</ThemedText>
                  <ThemedText style={styles.metricValue}>6% correct</ThemedText>
                </ThemedView>

                {/* Lessons Done */}
                <ThemedView lightColor="#F6F7FA" darkColor="#1C2124" style={styles.metricItem}>
                  <View style={[styles.metricIcon, { backgroundColor: '#FEF9EB' }]}>
                    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <Path d="M14.6667 3.73329V11.66C14.6667 12.3066 14.14 12.9 13.4933 12.98L13.2867 13.0066C12.1933 13.1533 10.6533 13.6066 9.41333 14.1266C8.98 14.3066 8.5 13.98 8.5 13.5066V4.23329C8.5 3.98662 8.64 3.75995 8.86 3.63995C10.08 2.97995 11.9267 2.39329 13.18 2.28662H13.22C14.02 2.28662 14.6667 2.93329 14.6667 3.73329ZM7.13999 3.63995C5.91999 2.97995 4.07333 2.39329 2.81999 2.28662H2.77333C1.97333 2.28662 1.32666 2.93329 1.32666 3.73329V11.66C1.32666 12.3066 1.85333 12.9 2.49999 12.98L2.70666 13.0066C3.79999 13.1533 5.33999 13.6066 6.57999 14.1266C7.01333 14.3066 7.49333 13.98 7.49333 13.5066V4.23329C7.49333 3.97995 7.35999 3.75995 7.13999 3.63995ZM3.33333 5.65995H4.83333C5.10666 5.65995 5.33333 5.88662 5.33333 6.15995C5.33333 6.43995 5.10666 6.65995 4.83333 6.65995H3.33333C3.05999 6.65995 2.83333 6.43995 2.83333 6.15995C2.83333 5.88662 3.05999 5.65995 3.33333 5.65995ZM5.33333 8.65995H3.33333C3.05999 8.65995 2.83333 8.43995 2.83333 8.15995C2.83333 7.88662 3.05999 7.65995 3.33333 7.65995H5.33333C5.60666 7.65995 5.83333 7.88662 5.83333 8.15995C5.83333 8.43995 5.60666 8.65995 5.33333 8.65995Z" fill="#F5C63B"/>
                    </Svg>
                  </View>
                  <ThemedText style={styles.metricLabel}>Lessons Done</ThemedText>
                  <ThemedText style={styles.metricValue}>23 completed</ThemedText>
                </ThemedView>

                <ThemedView lightColor="#F6F7FA" darkColor="#1C2124" style={styles.metricItem}>
                  <View style={[styles.metricIcon, { backgroundColor: '#FEEDEF' }]}>
                    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <Path d="M7.99992 1.83325C4.32659 1.83325 1.33325 4.82659 1.33325 8.49992C1.33325 12.1733 4.32659 15.1666 7.99992 15.1666C11.6733 15.1666 14.6666 12.1733 14.6666 8.49992C14.6666 4.82659 11.6733 1.83325 7.99992 1.83325ZM11.1866 6.96659L7.40659 10.7466C7.31325 10.8399 7.18659 10.8933 7.05325 10.8933C6.91992 10.8933 6.79325 10.8399 6.69992 10.7466L4.81325 8.85992C4.61992 8.66659 4.61992 8.34659 4.81325 8.15325C5.00659 7.95992 5.32659 7.95992 5.51992 8.15325L7.05325 9.68659L10.4799 6.25992C10.6733 6.06659 10.9933 6.06659 11.1866 6.25992C11.3799 6.45325 11.3799 6.76659 11.1866 6.96659Z" fill="#2F4291"/>
                    </Svg>
                  </View>
                  <ThemedText style={styles.metricLabel}>Reviews Done</ThemedText>
                  <ThemedText style={styles.metricValue}>7 this week</ThemedText>
                </ThemedView>
              </View>
            </View>
            </ThemedView>

            <View style={styles.aiInsightsSection}>
              <View style={styles.aiInsightsHeader}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path d="M15.2599 21.9999C15.1999 21.9999 15.1299 21.9899 15.0699 21.9699C13.0599 21.3999 10.9499 21.3999 8.93991 21.9699C8.56991 22.0699 8.17991 21.8599 8.07991 21.4899C7.96991 21.1199 8.18991 20.7299 8.55991 20.6299C10.8199 19.9899 13.1999 19.9899 15.4599 20.6299C15.8299 20.7399 16.0499 21.1199 15.9399 21.4899C15.8399 21.7999 15.5599 21.9999 15.2599 21.9999Z" fill="#F5C63B"/>
                  <Path d="M19.21 6.36001C18.17 4.26001 16.16 2.71001 13.83 2.20001C11.39 1.66001 8.88997 2.24001 6.97997 3.78001C5.05997 5.31001 3.96997 7.60001 3.96997 10.05C3.96997 12.64 5.51997 15.35 7.85997 16.92V17.75C7.84997 18.03 7.83997 18.46 8.17997 18.81C8.52997 19.17 9.04997 19.21 9.45997 19.21H14.59C15.13 19.21 15.54 19.06 15.82 18.78C16.2 18.39 16.19 17.89 16.18 17.62V16.92C19.28 14.83 21.23 10.42 19.21 6.36001ZM13.72 11.62L12.65 13.48C12.51 13.72 12.26 13.86 12 13.86C11.87 13.86 11.74 13.83 11.63 13.76C11.27 13.55 11.15 13.09 11.35 12.74L12.2 11.26H11.36C10.86 11.26 10.45 11.04 10.23 10.67C10.01 10.29 10.03 9.83001 10.28 9.39001L11.35 7.53001C11.56 7.17001 12.02 7.05001 12.37 7.25001C12.73 7.46001 12.85 7.92001 12.65 8.27001L11.8 9.75001H12.64C13.14 9.75001 13.55 9.97001 13.77 10.34C13.99 10.72 13.97 11.19 13.72 11.62Z" fill="#F5C63B"/>
                </Svg>
                <ThemedText style={styles.aiInsightsTitle}>AI Insights</ThemedText>
              </View>
              
              <ThemedView lightColor="#FFFFFF" darkColor="#11181C" style={styles.aiInsightsCard}>
                <ThemedText style={styles.aiInsightsText}>
                  You're making great progress with 72% overall completion and strong growth in speaking (78%) and listening (70%). With an 18-day streak and 640+ words learned, your consistency is paying off — keep it up to reach full fluency soon!
                </ThemedText>
              </ThemedView>
            </View>
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
    paddingBottom: 120,
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
    opacity: 0.7,
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  greetingTitle: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.02,
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
    lineHeight: 19,
    letterSpacing: -0.26,
    fontFamily: 'Urbanist',
    margin: 0,
    padding: 0,
  },
  // Main Content Container
  mainContentContainer: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },
  // Main Card
  mainCard: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardHeader: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingBottom: 12,
    marginBottom: 0,
    width: '100%',
    height: 65,
  },
  cardHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    gap: 6,
    width: '100%',
    height: 21,
  },
  bannerText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 21,
    textAlign: 'center',
    flex: 1,
    height: 21,
  },
  cardContent: {
    padding: 12,
    gap: 12,
  },
  trailProgressTitle: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 24,
    width: '100%',
    height: 24,
    marginBottom: 8,
  },
  // Weekly Overview
  weeklyOverview: {
    gap: 8,
    width: '100%',
    height: 170,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 21,
    width: '100%',
    height: 21,
    paddingHorizontal: 12,
  },
  progressBarsContainer: {
    borderRadius: 12,
    paddingTop: 8,
    paddingHorizontal: 0,
    paddingBottom: 0,
    gap: 12,
    width: '100%',
    height: 138,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingLeft: 12,
    gap: 12,
    width: '100%',
    height: 24,
    justifyContent: 'flex-start',
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
    height: 18,
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 18,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    flexGrow: 0,
    minWidth: 30,
  },
  progressBarContainer: {
    height: 24,
    borderRadius: 1000,
    paddingHorizontal: 0,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  progressBar: {
    height: 24,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  lastWeekBar: {
    backgroundColor: '#F5C63B',
    width: 152,
  },
  thisWeekBar: {
    backgroundColor: '#27EDB7',
    width: 211,
  },
  lastWeekText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'right',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 18,
    width: 136,
    height: 18,
    flex: 1,
  },
  lastWeekPercentage: {
    fontSize: 12,
    fontWeight: '600',
    color: '#B8952C',
    textAlign: 'right',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 18,
    width: 98,
    height: 18,
    flex: 1,
  },
  thisWeekText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 18,
    width: 195,
    height: 18,
    flex: 1,
  },
  thisWeekPercentage: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 18,
    width: 39,
    height: 18,
    flex: 1,
  },
  achievementBanner: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    height: 33,
    borderRadius: 0,
    marginTop: 8,
  },
  achievementText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 21,
    width: '100%',
    height: 21,
    display: 'flex',
    alignItems: 'center',
    flex: 0,
  },
  // Metrics List
  metricsList: {
    gap: 6,
    width: '100%',
    height: 166,
    padding: 0,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
    width: '100%',
    height: 37,
    justifyContent: 'space-between',
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
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 18,
    marginLeft: 4,
  },
  metricValue: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
    lineHeight: 21,
    flexShrink: 0,
  },
  // AI Insights Section
  aiInsightsSection: {
    width: '100%',
    gap: 8,
  },
  aiInsightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
  },
  aiInsightsTitle: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
  aiInsightsCard: {
    borderLeftWidth: 1.5,
    borderLeftColor: '#F5C63B',
    borderRadius: 16,
    padding: 12,
    gap: 16,
  },
  aiInsightsText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.02,
    fontFamily: 'Urbanist',
  },
});