import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';
import { StyleSheet } from 'react-native';

export const BackButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.backButton} 
      onPress={() => router.back()}
    >
      <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
        <Rect 
          x={42} 
          y={42} 
          width={42} 
          height={42} 
          rx={21} 
          transform="rotate(180 42 42)" 
          fill="white"
        />
        <Path 
          d="M18.9753 15.9416L13.917 21L18.9753 26.0583" 
          stroke="#263574" 
          strokeWidth="1.5" 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M28.0836 21L14.0586 21" 
          stroke="#263574" 
          strokeWidth="1.5" 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 10,
  },
});
