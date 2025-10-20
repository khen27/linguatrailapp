import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';

export default function ConversationChatScreen() {
  const router = useRouter();

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
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>English Speaking Session</Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressSection}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Messages Area */}
          <View style={styles.messagesArea}>
            <Text style={styles.placeholderText}>Chat interface coming soon...</Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Input area coming soon...</Text>
          </View>
        </SafeAreaView>
      </View>
    </>
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
  header: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.32,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  progressSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    width: '25%',
    height: '100%',
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  messagesArea: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#5C5C5C',
    fontFamily: 'Urbanist',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#5C5C5C',
    fontFamily: 'Urbanist',
  },
});
