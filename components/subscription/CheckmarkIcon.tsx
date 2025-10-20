import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CheckmarkIconProps {
  size?: number;
  color?: string;
}

export function CheckmarkIcon({ size = 20, color = '#27EDB7' }: CheckmarkIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      {/* Outer circle */}
      <Path 
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Checkmark */}
      <Path 
        d="M6.5 10L8.5 12L13.5 7" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
