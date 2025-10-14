import { View, StyleSheet, Text, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

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
            <Text style={styles.greetingTitle}>Good Morning, Zander 👋</Text>
          </View>
        </View>
        <View style={styles.streakContainer}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <Text style={styles.streakNumber}>12</Text>
          <Text style={styles.streakText}>Day</Text>
        </View>
      </View>

      {/* Learned Today Section */}
      <View style={styles.learnedTodaySection}>
        <View style={styles.learnedTodayCard}>
          <View style={styles.learnedTodayContent}>
            <View style={styles.learnedTodayStats}>
              <Text style={styles.learnedTodayTitle}>Learned Today</Text>
              <View style={styles.learnedTodayTimeContainer}>
                <Text style={styles.learnedTodayTimeMain}>36</Text>
                <Text style={styles.learnedTodayTimeUnit}> Min</Text>
                <Text style={styles.learnedTodayTimeSlash}> / </Text>
                <Text style={styles.learnedTodayTimeTotal}>60 Min</Text>
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
        </View>
      </View>

      {/* What Would You Like To Learn Today Section */}
      <View style={styles.learningInputSection}>
        <Text style={styles.learningInputTitle}>What Would You Like To Learn Today?</Text>
        <View style={styles.learningInputCard}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.learningInput}
              placeholder="Type your learning goal..."
              placeholderTextColor="#64748B"
              multiline
            />
            <View style={styles.inputButtons}>
              <TouchableOpacity style={styles.uploadButton}>
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <Path d="M7.5 13.3333L10 10.8333L12.5 13.3333" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M10 10.8333V17.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M16.6667 14.1667C17.5833 13.5833 18.3333 12.5 18.3333 11.25C18.3333 9.16667 16.6667 7.5 14.5833 7.5C14.25 5.83333 12.75 2.5 10 2.5C7.25 2.5 5.75 5.83333 5.41667 7.5C3.33333 7.5 1.66667 9.16667 1.66667 11.25C1.66667 12.5 2.41667 13.5833 3.33333 14.1667" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sendButton}>
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <Path d="M18.3333 1.66667L9.16667 10.8333" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M18.3333 1.66667L12.5 18.3333L9.16667 10.8333L1.66667 7.5L18.3333 1.66667Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Notification Banner */}
      <View style={styles.notificationBanner}>
        <View style={styles.notificationContent}>
          <View style={styles.notificationIcon}>
            <Text style={styles.notificationEmoji}>🎉</Text>
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>First Spanish lesson completed!</Text>
            <Text style={styles.notificationSubtitle}>Great job! Keep up the momentum.</Text>
          </View>
          <TouchableOpacity style={styles.notificationClose}>
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <Path d="M12 4L4 12" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M4 4L12 12" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>

      {/* Trail Progress - Outer Card */}
      <View style={styles.progressOuter}>
        <Text style={styles.progressTitle}>Trail Progress</Text>
        {/* Inner White Card */}
        <View style={styles.progressInner}>
            <View style={styles.progressHeaderRow}>
              <View style={styles.medalIconBox}>
                <Svg width="89" height="89" viewBox="0 0 89 89" fill="none">
                  <Rect width="89" height="89" rx="12" fill="#FFB300" fillOpacity="0.05"/>
                  <Path d="M37.0835 11.125H20.396L29.6668 37.0833L44.5002 31.5208L37.0835 11.125Z" fill="url(#paint0_linear_6089_1881)"/>
                  <Path d="M29.6663 11.125H25.958L33.3747 33.375L37.083 31.5208L29.6663 11.125Z" fill="#FFD39F"/>
                  <Path d="M51.9165 11.125H68.604L59.3332 37.0833L44.4998 31.5208L51.9165 11.125Z" fill="url(#paint1_linear_6089_1881)"/>
                  <Path d="M59.3337 11.125H63.042L55.6253 33.375L51.917 31.5208L59.3337 11.125Z" fill="#FFD39F"/>
                  <Path d="M40.524 26.9979C42.9845 25.6118 46.0159 25.6118 48.4763 26.9979L64.6282 36.0973C67.0886 37.4834 68.6043 40.045 68.6043 42.8173V61.016C68.6043 63.7882 67.0886 66.3499 64.6282 67.736L48.4763 76.8354C46.0159 78.2215 42.9845 78.2215 40.524 76.8354L24.3722 67.736C21.9117 66.3499 20.396 63.7882 20.396 61.016V42.8173C20.396 40.045 21.9117 37.4834 24.3722 36.0973L40.524 26.9979Z" fill="#F5C63B"/>
                  <Path d="M45.8573 41.6753C45.2997 40.4972 43.6993 40.4972 43.1417 41.6753L40.8777 46.459C40.656 46.9273 40.2294 47.2515 39.7365 47.3262L34.6759 48.093C33.4289 48.282 32.9326 49.8928 33.8379 50.8129L37.4867 54.5218C37.8471 54.8881 38.0117 55.4179 37.9263 55.9368L37.0647 61.1751C36.851 62.4742 38.1476 63.4676 39.2606 62.8575L43.7978 60.37C44.2374 60.129 44.7616 60.129 45.2012 60.37L49.7385 62.8575C50.8514 63.4676 52.148 62.4742 51.9343 61.1751L51.0727 55.9368C50.9874 55.4179 51.1519 54.8881 51.5123 54.5218L55.1612 50.8129C56.0664 49.8928 55.5701 48.282 54.3232 48.093L49.2626 47.3262C48.7696 47.2515 48.343 46.9273 48.1213 46.459L45.8573 41.6753Z" fill="url(#paint2_linear_6089_1881)"/>
                  <Defs>
                    <SvgLinearGradient id="paint0_linear_6089_1881" x1="35.2293" y1="35.2292" x2="18.1519" y2="4.97507" gradientUnits="userSpaceOnUse">
                      <Stop stopColor="#FFCE94"/>
                      <Stop offset="1" stopColor="#FF9C27" stopOpacity="0.8"/>
                    </SvgLinearGradient>
                    <SvgLinearGradient id="paint1_linear_6089_1881" x1="53.7707" y1="35.2292" x2="70.8481" y2="4.97507" gradientUnits="userSpaceOnUse">
                      <Stop stopColor="#FFCE94"/>
                      <Stop offset="1" stopColor="#FF9C27" stopOpacity="0.8"/>
                    </SvgLinearGradient>
                    <SvgLinearGradient id="paint2_linear_6089_1881" x1="51.9162" y1="42.6459" x2="11.1245" y2="100.125" gradientUnits="userSpaceOnUse">
                      <Stop stopColor="white"/>
                      <Stop offset="1" stopColor="white" stopOpacity="0"/>
                    </SvgLinearGradient>
                  </Defs>
                </Svg>
              </View>
              <View style={styles.progressTextCol}>
                <Text style={styles.progressSubtitle}>Main Goal</Text>
                <Text style={styles.progressHeading}>Enhance Vocabulary</Text>
                <Text style={styles.progressNumber}>57%</Text>
              </View>
            </View>
          
          {/* Progress Section */}
          <View style={styles.progressSection}>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarTrack} />
              <View style={styles.progressBarFill} />
            </View>
          </View>
          
          {/* Motivational Message */}
          <View style={styles.motivationSection}>
            <Text style={styles.motivationText}>You're so close 💪 get some practice in today!</Text>
          </View>
        </View>
      </View>

      {/* Ongoing Tasks - Horizontal Scrollable */}
      <View style={styles.tasksSection}>
        <Text style={styles.tasksTitle}>Ongoing Tasks</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tasksScrollContainer}
          style={styles.tasksScrollView}
        >
          {/* English Task Card */}
          <View style={styles.horizontalTaskCard}>
            <View style={styles.horizontalTaskHeader}>
              <Text style={styles.horizontalTaskLanguage}>English</Text>
              <Text style={styles.horizontalTaskPercentage}>22%</Text>
            </View>
            <View style={styles.circularProgressContainer}>
              <Svg width="80" height="80" viewBox="0 0 80 80">
                <Path
                  d="M40 10 A30 30 0 1 1 39.999 10"
                  fill="none"
                  stroke="#F6F7FA"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <Path
                  d="M40 10 A30 30 0 0 1 58.66 25"
                  fill="none"
                  stroke="#2F4291"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </Svg>
              <Text style={styles.circularProgressEmoji}>🗽</Text>
            </View>
            <Text style={styles.horizontalTaskTitle}>Vocabulary</Text>
            <Text style={styles.horizontalTaskSubtitle}>Chapter 3</Text>
          </View>

          {/* Spanish Task Card */}
          <View style={styles.horizontalTaskCard}>
            <View style={styles.horizontalTaskHeader}>
              <Text style={styles.horizontalTaskLanguage}>Spanish</Text>
              <Text style={styles.horizontalTaskPercentage}>80%</Text>
            </View>
            <View style={styles.circularProgressContainer}>
              <Svg width="80" height="80" viewBox="0 0 80 80">
                <Path
                  d="M40 10 A30 30 0 1 1 39.999 10"
                  fill="none"
                  stroke="#F6F7FA"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <Path
                  d="M40 10 A30 30 0 1 1 10 40 A30 30 0 0 1 40 10"
                  fill="none"
                  stroke="#27EDB7"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </Svg>
              <Text style={styles.circularProgressEmoji}>🥘</Text>
            </View>
            <Text style={styles.horizontalTaskTitle}>Speaking</Text>
            <Text style={styles.horizontalTaskSubtitle}>Session 4</Text>
          </View>

          {/* French Task Card */}
          <View style={styles.horizontalTaskCard}>
            <View style={styles.horizontalTaskHeader}>
              <Text style={styles.horizontalTaskLanguage}>French</Text>
              <Text style={styles.horizontalTaskPercentage}>95%</Text>
            </View>
            <View style={styles.circularProgressContainer}>
              <Svg width="80" height="80" viewBox="0 0 80 80">
                <Path
                  d="M40 10 A30 30 0 1 1 39.999 10"
                  fill="none"
                  stroke="#F6F7FA"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <Path
                  d="M40 10 A30 30 0 1 1 39.999 10"
                  fill="none"
                  stroke="#68C0A5"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </Svg>
              <Text style={styles.circularProgressEmoji}>🗼</Text>
            </View>
            <Text style={styles.horizontalTaskTitle}>Grammar</Text>
            <Text style={styles.horizontalTaskSubtitle}>Chat Bot</Text>
          </View>

          {/* German Task Card */}
          <View style={styles.horizontalTaskCard}>
            <View style={styles.horizontalTaskHeader}>
              <Text style={styles.horizontalTaskLanguage}>German</Text>
              <Text style={styles.horizontalTaskPercentage}>50%</Text>
            </View>
            <View style={styles.circularProgressContainer}>
              <Svg width="80" height="80" viewBox="0 0 80 80">
                <Path
                  d="M40 10 A30 30 0 1 1 39.999 10"
                  fill="none"
                  stroke="#F6F7FA"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <Path
                  d="M40 10 A30 30 0 0 1 70 40"
                  fill="none"
                  stroke="#FFB300"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </Svg>
              <Text style={styles.circularProgressEmoji}>🏜️</Text>
            </View>
            <Text style={styles.horizontalTaskTitle}>Vocabulary</Text>
            <Text style={styles.horizontalTaskSubtitle}>Verbs 2</Text>
          </View>
        </ScrollView>
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
  // Learned Today Section
  learnedTodaySection: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  learnedTodayTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.02,
    lineHeight: 21,
    fontFamily: 'Urbanist',
  },
  learnedTodayCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    // Note: backdrop-filter is not supported in React Native
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
    color: '#263574',
    letterSpacing: -0.02,
    lineHeight: 29,
    fontFamily: 'Urbanist',
  },
  learnedTodayTimeUnit: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C5C5C',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  learnedTodayTimeSlash: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C5C5C',
    letterSpacing: -0.02,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  learnedTodayTimeTotal: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C5C5C',
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
    marginBottom: 20,
  },
  learningInputTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
    marginBottom: 12,
  },
  learningInputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
  },
  learningInput: {
    flex: 1,
    minHeight: 44,
    maxHeight: 88,
    backgroundColor: '#F6F7FA',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '400',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
    textAlignVertical: 'top',
  },
  inputButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  uploadButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F6F7FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#2F4291',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Notification Banner
  notificationBanner: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  notificationContent: {
    backgroundColor: '#E8F5E8',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#27EDB7',
  },
  notificationIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#27EDB7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationEmoji: {
    fontSize: 16,
    lineHeight: 19,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.28,
    lineHeight: 21,
    marginBottom: 2,
  },
  notificationSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#64748B',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  notificationClose: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  tasksTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
    lineHeight: 24,
    marginBottom: 16,
  },
  tasksScrollView: {
    marginLeft: -20,
    marginRight: -20,
  },
  tasksScrollContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  horizontalTaskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    width: 140,
    alignItems: 'center',
  },
  horizontalTaskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  horizontalTaskLanguage: {
    fontSize: 12,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  horizontalTaskPercentage: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  circularProgressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  circularProgressEmoji: {
    position: 'absolute',
    fontSize: 32,
    lineHeight: 38,
  },
  horizontalTaskTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.28,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 4,
  },
  horizontalTaskSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#64748B',
    letterSpacing: -0.24,
    lineHeight: 18,
    textAlign: 'center',
  },
});