import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#B0B0B0', dark: '#2D2D2D' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="star.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tab Three</ThemedText>
      </ThemedView>
      <ThemedText>This is the third tab with generic content.</ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Content Area</ThemedText>
        <ThemedText>
          This tab can be customized with your specific content later.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
