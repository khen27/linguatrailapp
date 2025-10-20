import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { ScreenHeader } from '@/components/ui/screen-header';
import { ProgressBar } from '@/components/ui/progress-bar';

export default function ConversationChatScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0.25); // 25% progress for demo

  const handleBackPress = () => {
    router.back();
  };

  const handleMenuPress = () => {
    // TODO: Implement menu functionality
    console.log('Menu pressed');
  };

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          {/* Header Section */}
          <View style={styles.headerSection}>
            <ScreenHeader
              title="English Speaking Session"
              onBackPress={handleBackPress}
              onMenuPress={handleMenuPress}
            />
          </View>

          {/* Progress Bar Section */}
          <View style={styles.progressSection}>
            <ProgressBar
              progress={progress}
              height={10}
              backgroundColor="#FFFFFF"
              fillColor="#27EDB7"
            />
          </View>

          {/* Messages Area Section */}
          <View style={styles.messagesSection}>
            {/* Messages will be implemented in Phase 5 */}
            <View style={styles.messagesArea}>
              <Text style={styles.placeholderText}>Messages area coming in Phase 5...</Text>
            </View>
          </View>

          {/* Footer Section */}
          <View style={styles.footerSection}>
            {/* Footer will be implemented in Phase 9 */}
            <View style={styles.footerPlaceholder}>
              <Text style={styles.footerText}>Input area coming in Phase 9...</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // Root container with proper background
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  safeArea: {
    flex: 1,
  },

  // Header Section (Phase 3 - Completed)
  headerSection: {
    // ScreenHeader component handles its own padding
  },

  // Progress Bar Section (Phase 4 - Completed)
  progressSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },

  // Messages Section (Phase 5)
  messagesSection: {
    flex: 1,
    paddingHorizontal: 24,
  },
  messagesArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#5C5C5C',
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },

  // Footer Section (Phase 9)
  footerSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  footerPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  footerText: {
    fontSize: 14,
    color: '#5C5C5C',
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
});
