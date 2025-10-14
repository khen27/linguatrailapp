import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ProfileTabIconProps {
  color: string;
  size?: number;
  focused?: boolean;
}

export function ProfileTabIcon({ color, size = 24 }: ProfileTabIconProps) {
  const isActive = color === '#263574'; // Blue color indicates active state
  
  if (isActive) {
    // Active state - green filled profile icon
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#23D5A5"/>
        <Path d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill="#23D5A5"/>
      </Svg>
    );
  } else {
    // Inactive state - outlined profile icon
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    );
  }
}
