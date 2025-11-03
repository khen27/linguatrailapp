import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Svg, Path, Line } from 'react-native-svg';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { DesignTokens as T } from '../constants/design-tokens';
import SummaryRow from '../components/SummaryRow';
import * as Haptics from 'expo-haptics';

export default function SummaryScreen() {
  const router = useRouter();

  const { width: SCREEN_WIDTH } = Dimensions.get('window');

  // Mock data for learning modules - matches the design spec
  const listRef = useRef<FlatList<any>>(null);
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
  const ICON_SIZE = 44;
  const ICON_VERTICAL_OFFSET = (51 - ICON_SIZE) / 2;
  const ROW_HORIZONTAL_PADDING = SCREEN_WIDTH * 0.072;

  const SWAP_THRESHOLD = ROW_HEIGHT * 0.5; // 50% threshold for smoother swaps
  
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const initialIndexRef = useRef<number>(0);
  const draggingIndexRef = useRef<number | null>(null);
  const lastSwapPositionRef = useRef(0);
  const setDragging = (idx: number | null) => { 
    draggingIndexRef.current = idx; 
    setDraggingIndex(idx); 
  };

  const timelineStyle = useMemo(() => {
    const itemCount = modules.length;
    if (itemCount === 0) {
      return {
        left: ROW_HORIZONTAL_PADDING + ICON_SIZE / 2,
        top: 24 + ICON_VERTICAL_OFFSET,
        height: 0,
      };
    }

    return {
      left: ROW_HORIZONTAL_PADDING + ICON_SIZE / 2,
      top: 24 + ICON_VERTICAL_OFFSET,
      height: Math.max(itemCount - 1, 0) * ROW_HEIGHT + ICON_SIZE,
    };
  }, [modules.length, ROW_HORIZONTAL_PADDING, ICON_SIZE, ICON_VERTICAL_OFFSET, ROW_HEIGHT]);

  const onStartDrag = (index: number) => {
    initialIndexRef.current = index;
    lastSwapPositionRef.current = 0;
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
    const start = initialIndexRef.current;
    const currentIndex = draggingIndexRef.current ?? start;
    
    // Calculate target index based on translation with threshold
    const direction = translationY > 0 ? 1 : -1;
    const distance = Math.abs(translationY);
    
    // Only swap when crossing threshold
    if (distance - Math.abs(lastSwapPositionRef.current) >= SWAP_THRESHOLD) {
      const steps = Math.floor(distance / SWAP_THRESHOLD);
      const target = Math.max(0, Math.min(modules.length - 1, start + (steps * direction)));
      
      if (currentIndex !== target) {
        lastSwapPositionRef.current = steps * SWAP_THRESHOLD * direction;
        swapItems(currentIndex, target);
        setDragging(target);
        Haptics.selectionAsync();
      }
    }
  };

  const onPanRelease = () => {
    lastSwapPositionRef.current = 0;
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
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <Text style={styles.sessionSubtitle}>Overall periods: 1 Hour, 13 Minutes</Text>
        </View>

        {/* Learning Modules List */}
        <View style={styles.modulesList}>
          {/* Vertical dashed timeline guide via SVG (aligned through icon centers).
              Kept independent of reordering to prevent disappearing during drag. */}
          <Svg pointerEvents="none" style={[styles.timelineSvg, timelineStyle]} width={2} height={timelineStyle.height}>
            <Line x1={1} y1={0} x2={1} y2="100%" stroke="#E0E3EF" strokeWidth={2} strokeDasharray="4,6" />
          </Svg>
          <FlatList
            ref={listRef}
            data={modules}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 32 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={draggingIndex === null}
          />
        </View>

        {/* Bottom Sheet Footer */}
        <View style={styles.footer}>
          {/* Customize Flow pill - temporarily removed */}
          {/* <View style={styles.customizePill}></View> */}

          {/* Confirm Create Button */}
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
    </GestureHandlerRootView>
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
    flex: 1,
  },
  // Removed streak pill styles
  // Main Card
  card: {
    position: 'absolute',
    top: 136, // increased from 126 to move content down a bit more
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
  timelineSvg: {
    position: 'absolute',
    zIndex: 0,
  },
  // Footer with Confirm Button
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: T.colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 12,
    alignItems: 'center',
  },
  customizePill: {
    width: '100%',
    height: 58,
    backgroundColor: T.colors.background,
    borderColor: T.colors.background,
    borderWidth: 1,
    borderRadius: 99,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
    gap: 24,
  },
  customizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    height: 42,
  },
  customizeText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#5C5C5C',
    opacity: 0.9,
    flex: 1,
  },
  pocketButton: {
    width: 42,
    height: 42,
    borderRadius: 48,
    backgroundColor: T.colors.blueNormal,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    shadowColor: 'rgba(14,9,26,1)',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 28,
  },
  confirmButton: {
    width: 327,
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    alignSelf: 'center',
  },
  confirmButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#2F4291',
    textAlign: 'center',
    width: 303,
  },
});


