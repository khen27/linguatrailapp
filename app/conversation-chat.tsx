import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image } from 'react-native';
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

  // Show actions only on the last assistant message
  const lastAssistantId = useMemo(() => {
    let lastId = '';
    for (const m of messages) {
      if (m.role === 'assistant') lastId = m.id;
    }
    return lastId;
  }, [messages]);

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
                    {item.id === lastAssistantId && (
                      <View style={styles.actionsRow}>
                        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                          <Image
                            source={require('@/assets/icons/vuesax/linear/copy.png')}
                            style={styles.actionIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                          <Image
                            source={require('@/assets/icons/vuesax/linear/like.png')}
                            style={styles.actionIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                          <Image
                            source={require('@/assets/icons/vuesax/linear/dislike.png')}
                            style={styles.actionIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                          <Image
                            source={require('@/assets/icons/vuesax/linear/refresh-2.png')}
                            style={styles.actionIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                          <Image
                            source={require('@/assets/icons/vuesax/linear/volume-high.png')}
                            style={styles.actionIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      </View>
                    )}
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
                    placeholder=""
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
    justifyContent: 'flex-start',
    gap: 12,
    paddingTop: 0,
    paddingBottom: 0,
  },
  actionButton: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    width: 16,
    height: 16,
  },
  assistantRow: {
    marginBottom: 16,
    maxWidth: 270,
    backgroundColor: '#F6F7FA',
    borderRadius: 16,
    padding: 0,
  },
  assistantText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
    lineHeight: 21,
    letterSpacing: -0.28,
    fontFamily: 'Urbanist',
    paddingTop: 0,
    paddingBottom: 12,
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
    height: 122,
    position: 'relative',
  },
      composerSubtitle: {
        position: 'absolute',
        top: 16,
        left: 16,
        fontSize: 16,
        fontWeight: '500',
        color: '#5C5C5C',
        opacity: 0.9,
        lineHeight: 24,
        fontFamily: 'Urbanist',
        zIndex: 1,
      },
  composerRow: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 42,
  },
  attachButton: {
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
    borderRadius: 48,
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
  buttonImage: {
    width: 42,
    height: 42,
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
