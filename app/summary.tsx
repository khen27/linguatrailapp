import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Svg, Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { DesignTokens as T } from '../constants/design-tokens';
import SummaryRow from '../components/SummaryRow';
import * as Haptics from 'expo-haptics';

export default function SummaryScreen() {
  const router = useRouter();

  // Mock data for learning modules - matches the design spec
  const [modules, setModules] = useState([
    {
      id: '1',
      title: 'Alphabet Mastery',
      subtitle: 'Learn all English letters & their sounds.',
      duration: '18 min',
      emoji: '🔤',
      backgroundColor: T.colors.red,
    },
    {
      id: '2',
      title: 'Basic Words',
      subtitle: 'Start with simple vocabulary words.',
      duration: '15 min',
      emoji: '🍎',
      backgroundColor: T.colors.green2,
    },
    {
      id: '3',
      title: 'Sight Reading',
      subtitle: 'Practice reading common words.',
      duration: '12 min',
      emoji: '📖',
      backgroundColor: T.colors.bluePrimary,
    },
    {
      id: '4',
      title: 'Core Vocabulary',
      subtitle: 'Build essential word knowledge.',
      duration: '20 min',
      emoji: '📚',
      backgroundColor: T.colors.yellow,
    },
    {
      id: '5',
      title: 'Simple Sentences',
      subtitle: 'Form basic sentence structures.',
      duration: '16 min',
      emoji: '📝',
      backgroundColor: T.colors.green1,
    },
    {
      id: '6',
      title: 'Listening Practice',
      subtitle: 'Improve comprehension skills.',
      duration: '22 min',
      emoji: '🎧',
      backgroundColor: T.colors.green3,
    },
  ]);

  const ROW_HEIGHT = 75; // approx: 51 row + 24 spacing
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const initialIndexRef = useRef<number>(0);
  const draggingIndexRef = useRef<number | null>(null);
  const translationYRef = useRef(0);
  const setDragging = (idx: number | null) => { draggingIndexRef.current = idx; setDraggingIndex(idx); };

  const onStartDrag = (index: number) => {
    initialIndexRef.current = index;
    setDragging(index);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const swapItems = (from: number, to: number) => {
    if (from === to) return;
    setModules(prev => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };
  const onPanMove = (translationY: number) => {
    // Restore earlier deadzone for more stable dragging
    const smoothed = Math.abs(translationY) < 6 ? 0 : translationY;
    translationYRef.current = smoothed;
    const start = initialIndexRef.current;
    const offset = Math.round(smoothed / ROW_HEIGHT);
    const target = Math.max(0, Math.min(modules.length - 1, start + offset));
    if (draggingIndexRef.current !== target) {
      swapItems(draggingIndexRef.current ?? start, target);
      setDragging(target);
      Haptics.selectionAsync();
    }
  };

  const onPanRelease = () => {
    setDragging(null);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <SummaryRow
      title={item.title}
      subtitle={item.subtitle}
      duration={item.duration}
      emoji={item.emoji}
      backgroundColor={item.backgroundColor}
      progressPercentage={0}
      onStartDrag={() => onStartDrag(index)}
      onPanMove={onPanMove}
      onPanRelease={onPanRelease}
      index={index}
      isDragging={draggingIndex === index}
      isAnyDragging={draggingIndex !== null}
    />
  );

  return (
    <View style={styles.screen}>
      {/* Glass Header */}
      <BlurView intensity={45} tint="light" style={styles.glassHeader}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            {/* Back Button */}
            <TouchableOpacity 
              style={styles.headerButton}
              onPress={() => router.back()}
              activeOpacity={0.8}
            >
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path d="M7.5 15L2.5 10L7.5 5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M2.5 10H17.5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.headerTitle}>Summary</Text>

            {/* Streak Pill */}
            <View style={styles.streakPill}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakCount}>15</Text>
            </View>

            {/* Close Button */}
            <TouchableOpacity 
              style={styles.headerButton}
              onPress={() => router.push('/(tabs)')}
              activeOpacity={0.8}
            >
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path d="M15 5L5 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M5 5L15 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </BlurView>

      <View style={styles.card}>
        <View style={styles.headerBlock}>
          <Text style={styles.sessionTitle}>English Speaking Session</Text>
          <Text style={styles.sessionSubtitle}>Overall periods: 1 Hour : 13 Minutes</Text>
        </View>

        {/* Learning Modules List */}
        <View style={styles.modulesList}>
          {/* Vertical dashed timeline guide */}
          <View style={styles.timeline} pointerEvents="none" />
          <FlatList
            data={modules}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 32 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={draggingIndex === null}
          />
        </View>

        {/* Confirm Create Button */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.confirmButton} 
            activeOpacity={0.8}
            onPress={() => router.push('/(tabs)')}
          >
            <Text style={styles.confirmButtonText}>Confirm Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: T.colors.background,
  },
  // Glass Header
  glassHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    shadowColor: 'rgba(255, 255, 255, 0.04)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 32,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    gap: 8,
    height: 42,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 1036.36,
    backgroundColor: T.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: T.colors.blueNormal,
    textAlign: 'center',
    marginRight: 'auto',
  },
  streakPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FEF9EB', // Yellow/Light from spec
    borderRadius: 1036.36,
    gap: 6,
  },
  streakEmoji: {
    fontSize: 16,
    lineHeight: 24,
  },
  streakCount: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: T.colors.blueNormal,
  },
  // Main Card
  card: {
    position: 'absolute',
    top: 116, // matches spec top gap under header/glass
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: T.colors.white,
    borderTopLeftRadius: T.radii.xlCard,
    borderTopRightRadius: T.radii.xlCard,
    paddingTop: T.spacing.xl,
  },
  headerBlock: {
    paddingHorizontal: 24,
    gap: 8,
  },
  sessionTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    color: T.colors.blueNormal,
  },
  sessionSubtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: T.colors.blueNormal,
    opacity: 0.7,
  },
  // Modules List
  modulesList: {
    flex: 1,
    paddingTop: 24,
    position: 'relative',
  },
  timeline: {
    position: 'absolute',
    left: 24 + 22, // padding + half of 44px chip
    top: 0,
    bottom: 0,
    width: 0,
    borderLeftWidth: 2,
    borderLeftColor: '#E0E3EF',
    borderStyle: 'dashed',
    opacity: 1,
  },
  // Footer with Confirm Button
  footer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: T.colors.white,
  },
  confirmButton: {
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#2F4291',
    textAlign: 'center',
  },
});


