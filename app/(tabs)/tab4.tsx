import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabFourScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#C0C0C0', dark: '#3D3D3D' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="heart.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tab Four</ThemedText>
      </ThemedView>
      <ThemedText>This is the fourth tab with generic content.</ThemedText>
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
