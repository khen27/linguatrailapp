import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { ScreenHeader } from '@/components/ui/screen-header';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Svg, Path, Rect } from 'react-native-svg';

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
            <View style={styles.messagesListContainer}>
              <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.messagesListContent}
                style={styles.messagesList}
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

            {/* Confirmations Row */}
            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <Path d="M10.6663 8.59998V11.4C10.6663 13.7333 9.73301 14.6666 7.39967 14.6666H4.59967C2.26634 14.6666 1.33301 13.7333 1.33301 11.4V8.59998C1.33301 6.26665 2.26634 5.33331 4.59967 5.33331H7.39967C9.73301 5.33331 10.6663 6.26665 10.6663 8.59998Z" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M14.6663 4.59998V7.39998C14.6663 9.73331 13.733 10.6666 11.3997 10.6666H10.6663V8.59998C10.6663 6.26665 9.73301 5.33331 7.39967 5.33331H5.33301V4.59998C5.33301 2.26665 6.26634 1.33331 8.59967 1.33331H11.3997C13.733 1.33331 14.6663 2.26665 14.6663 4.59998Z" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <Path d="M7 11V19C7 19.5523 7.44772 20 8 20H15C15.5523 20 16 19.5523 16 19V11" stroke="#5C5C5C" strokeWidth="1.5"/>
                  <Path d="M7 11L10.5858 7.41421C11.3668 6.63317 12.6332 6.63317 13.4142 7.41421L17 11" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round"/>
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <Path d="M17 13V19C17 19.5523 16.5523 20 16 20H9C8.44772 20 8 19.5523 8 19V13" stroke="#5C5C5C" strokeWidth="1.5"/>
                  <Path d="M17 13L13.4142 9.41421C12.6332 8.63316 11.3668 8.63316 10.5858 9.41421L7 13" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round"/>
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <Path d="M4 4V9H9" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M20 20V15H15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M20 9C18.8044 6.13986 15.9559 4.25 12.8042 4.25C9.65263 4.25 6.80418 6.13986 5.60862 9" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round"/>
                  <Path d="M4 15C5.19556 17.8601 8.04402 19.75 11.1957 19.75C14.3473 19.75 17.1958 17.8601 18.3914 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round"/>
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <Path d="M4 10V14H7L11 18V6L7 10H4Z" stroke="#5C5C5C" strokeWidth="1.5" strokeLinejoin="round"/>
                  <Path d="M15 10C15.5304 10 16.0391 10.2107 16.4142 10.5858C16.7893 10.9609 17 11.4696 17 12C17 12.5304 16.7893 13.0391 16.4142 13.4142C16.0391 13.7893 15.5304 14 15 14" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round"/>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer Section - Bottom Overlay */}
          <View style={styles.bottomOverlay}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              keyboardVerticalOffset={12}
              style={styles.footerSection}
            >
              <View style={styles.composerCard}>
                <Text style={styles.composerSubtitle}>Ask anything...</Text>
                <View style={styles.composerRow}>
                  <TouchableOpacity style={styles.attachButton} activeOpacity={0.8}>
                    <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                      <Rect x="41.5" y="41.5" width="41" height="41" rx="20.5" transform="rotate(180 41.5 41.5)" fill="white"/>
                      <Rect x="41.5" y="41.5" width="41" height="41" rx="20.5" transform="rotate(180 41.5 41.5)" stroke="#E0E3EF"/>
                      <Path d="M20.9749 21V23.9167C20.9749 25.525 22.2833 26.8333 23.8916 26.8333C25.4999 26.8333 26.8083 25.525 26.8083 23.9167V19.3333C26.8083 16.1083 24.1999 13.5 20.9749 13.5C17.7499 13.5 15.1416 16.1083 15.1416 19.3333V24.3333C15.1416 27.0917 17.3833 29.3333 20.1416 29.3333" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Ask anything..."
                    placeholderTextColor="#5C5C5C"
                    multiline
                  />
                  <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <Path d="M12 19L12 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <Path d="M5 12L12 5L19 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.helperText}>AI can make mistakes. Please double-check responses.</Text>
            </KeyboardAvoidingView>
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
  messagesListContainer: {
    flex: 1,
  },
  messagesList: {
    flexGrow: 0,
  },
  messagesListContent: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  actionButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  assistantRow: {
    marginBottom: 16,
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
    marginBottom: 16,
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
    paddingHorizontal: 16,
    paddingBottom: 16,
    flex: 1,
  },
  bottomOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -4 },
    elevation: 8,
  },
  composerCard: {
    backgroundColor: '#F6F7FA',
    borderWidth: 1,
    borderColor: '#F6F7FA',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    height: 122,
    justifyContent: 'space-between',
  },
  composerSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C5C5C',
    opacity: 0.9,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  composerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 42,
    marginBottom: 0,
  },
  attachButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    height: 42,
    color: '#263574',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Urbanist',
    marginHorizontal: 16,
    textAlignVertical: 'center',
  },
  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#2F4291',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    shadowColor: '#0E091A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 28,
    elevation: 12,
  },
  helperText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    color: '#5C5C5C',
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
});
