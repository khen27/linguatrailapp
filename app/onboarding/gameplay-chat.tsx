import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Svg, Path, Rect } from 'react-native-svg';
import { BackgroundDecorations } from '@/components/subscription/BackgroundDecorations';

type Message = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
};

const STATIC_MESSAGES: Message[] = [
  {
    id: 'm1',
    role: 'assistant',
    text: 'How would you say hello to a friend in Spanish?',
  },
  {
    id: 'm2',
    role: 'user',
    text: '¿Qué pasa?',
  },
  {
    id: 'm3',
    role: 'assistant',
    text: 'Excellent! ✅ That is correct.',
  },
];

export default function OnboardingGameplayChatScreen() {
  const router = useRouter();
  const [messages] = React.useState(STATIC_MESSAGES);

  return (
    <View style={styles.container}>
      <BackgroundDecorations />
      <View style={styles.overlay} />

      <View style={styles.contentCard}>
        <View style={styles.cardInner}>
          <View style={styles.progressSection}>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.titleSection}>
            <Text style={styles.title}>Learn by Chat practice</Text>
            <Text style={styles.subtitle}>Its so easy to chat with your learning assistant.</Text>
          </View>

          <View style={styles.messagesSection}>
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.messagesContent}
              renderItem={({ item }) =>
                item.role === 'assistant' ? (
                  <View style={styles.assistantMessage}>
                    <Text style={styles.assistantText}>{item.text}</Text>
                  </View>
                ) : (
                  <View style={styles.userMessageRow}>
                    <View style={styles.userBubble}>
                      <Text style={styles.userBubbleText}>{item.text}</Text>
                    </View>
                  </View>
                )
              }
            />
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={24}
            style={styles.footerSection}
          >
            <View style={styles.composerCard}>
              <Text style={styles.composerSubtitle}>Ask anything...</Text>
              <View style={styles.composerRow}>
                <TouchableOpacity style={styles.attachButton} activeOpacity={0.8}>
                  <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <Rect
                      x="41.5"
                      y="41.5"
                      width="41"
                      height="41"
                      rx="20.5"
                      transform="rotate(180 41.5 41.5)"
                      fill="white"
                    />
                    <Rect
                      x="41.5"
                      y="41.5"
                      width="41"
                      height="41"
                      rx="20.5"
                      transform="rotate(180 41.5 41.5)"
                      stroke="#E0E3EF"
                    />
                    <Path
                      d="M20.9749 21V23.9167C20.9749 25.525 22.2833 26.8333 23.8916 26.8333C25.4999 26.8333 26.8083 25.525 26.8083 23.9167V19.3333C26.8083 16.1083 24.1999 13.5 20.9749 13.5C17.7499 13.5 15.1416 16.1083 15.1416 19.3333V24.3333C15.1416 27.0917 17.3833 29.3333 20.1416 29.3333"
                      stroke="#5C5C5C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
                <TextInput
                  style={styles.textInput}
                  placeholder=""
                  placeholderTextColor="#5C5C5C"
                  multiline
                  editable={false}
                />
                <TouchableOpacity
                  style={styles.sendButton}
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log('Blue arrow button pressed - navigating to gameplay-repeat');
                    router.replace('/onboarding/gameplay-repeat');
                  }}
                >
                  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                      d="M12 19L12 5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M5 12L12 5L19 12"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.helperText}>
              Ai can make mistakes. Please double-check responses.
            </Text>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263574',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  contentCard: {
    position: 'absolute',
    width: 359,
    height: 742,
    left: '50%',
    marginLeft: -179.5,
    bottom: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
    zIndex: 10,
  },
  cardInner: {
    flex: 1,
    width: 327,
    alignSelf: 'center',
  },
  progressSection: {
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    borderRadius: 1000,
    backgroundColor: '#F6F7FA',
    overflow: 'hidden',
  },
  progressFill: {
    width: '65%',
    height: 10,
    borderRadius: 1000,
    backgroundColor: '#27EDB7',
  },
  titleSection: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: -0.02,
    color: '#263574',
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#5C5C5C',
    opacity: 0.7,
    fontFamily: 'Urbanist',
    textAlign: 'center',
  },
  messagesSection: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  messagesContent: {
    paddingBottom: 24,
  },
  assistantMessage: {
    marginBottom: 16,
    maxWidth: 270,
    backgroundColor: '#F6F7FA',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  assistantText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
    lineHeight: 21,
    letterSpacing: -0.28,
    fontFamily: 'Urbanist',
  },
  userMessageRow: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  userBubble: {
    maxWidth: 270,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  userBubbleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
    lineHeight: 21,
    letterSpacing: -0.28,
    fontFamily: 'Urbanist',
  },
  footerSection: {
    marginTop: 8,
    paddingHorizontal: 24,
  },
  composerCard: {
    backgroundColor: '#F6F7FA',
    borderWidth: 1,
    borderColor: '#F6F7FA',
    borderRadius: 16,
    height: 122,
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
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
    marginTop: 12,
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
    transform: [{ rotate: '180deg' }],
  },
  textInput: {
    flex: 1,
    height: 42,
    marginHorizontal: 16,
    color: '#263574',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Urbanist',
    textAlignVertical: 'center',
  },
  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 48,
    backgroundColor: '#2F4291',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0E091A',
    shadowOpacity: 0.2,
    shadowRadius: 28,
    shadowOffset: { width: 0, height: 12 },
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


