import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { ScreenHeader } from '@/components/ui/screen-header';
import { ProgressBar } from '@/components/ui/progress-bar';

export default function ConversationChatScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0.25); // 25% progress for demo
  
  type Message = {
    id: string;
    role: 'assistant' | 'user';
    text: string;
  };

  const messages: Message[] = useMemo(
    () => [
      {
        id: 'm1',
        role: 'assistant',
        text: 'Good! Try making it more polite → "I would like a pizza, please 🍕🙂."',
      },
      {
        id: 'm2',
        role: 'user',
        text: 'I would like a pizza, please 🍕🙂.',
      },
      {
        id: 'm3',
        role: 'assistant',
        text: 'Perfect! ⭐ Now, what drink do you want? 🥤',
      },
      {
        id: 'm4',
        role: 'user',
        text: 'A Coke 🥤.',
      },
      {
        id: 'm5',
        role: 'assistant',
        text: 'Better: “Can I have a Coke, please?”',
      },
      {
        id: 'm6',
        role: 'user',
        text: 'Can I have a Coke, please?',
      },
      {
        id: 'm7',
        role: 'assistant',
        text: "Excellent! ✅ That's how you order politely in English.",
      },
    ],
    []
  );

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
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.messagesListContent}
              renderItem={({ item }) => (
                item.role === 'assistant' ? (
                  <View style={styles.assistantRow}>
                    <Text style={styles.assistantText}>{item.text}</Text>
                  </View>
                ) : (
                  <View style={styles.userRow}>
                    <View style={styles.userBubble}>
                      <Text style={styles.userBubbleText}>{item.text}</Text>
                    </View>
                  </View>
                )
              )}
              showsVerticalScrollIndicator={false}
            />
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
  messagesListContent: {
    paddingBottom: 16,
    gap: 12,
  },
  assistantRow: {
    marginBottom: 10,
  },
  assistantText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
    lineHeight: 21,
    letterSpacing: -0.28,
    fontFamily: 'Urbanist',
  },
  userRow: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  userBubble: {
    maxWidth: 270,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  userBubbleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
    lineHeight: 21,
    letterSpacing: -0.28,
    fontFamily: 'Urbanist',
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
