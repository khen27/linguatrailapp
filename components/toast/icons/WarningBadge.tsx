import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';

export const WarningBadge = ({ size = 20 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0)">
      <Path d="M12 2.5L20.3923 7.25V16.75L12 21.5L3.6077 16.75V7.25L12 2.5Z" stroke="#F5C63B" strokeWidth="1.5" strokeLinejoin="round" />
      <Path d="M12 7.75V12.25" stroke="#F5C63B" strokeWidth="2" strokeLinecap="round" />
      <Path d="M12 16.25H12.01" stroke="#F5C63B" strokeWidth="2" strokeLinecap="round" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
