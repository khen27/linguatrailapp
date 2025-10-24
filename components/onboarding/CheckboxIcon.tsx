import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@/constants/design-tokens';

interface CheckboxIconProps {
  checked?: boolean;
  size?: number;
}

export const CheckboxIcon: React.FC<CheckboxIconProps> = ({ 
  checked = false, 
  size = 20 
}) => {
  return (
    <Svg width={size} height={size + 1} viewBox="0 0 20 21" fill="none">
      <Path 
        d="M8 1.125H12C16.0731 1.125 19.375 4.4269 19.375 8.5V12.5C19.375 16.5731 16.0731 19.875 12 19.875H8C3.9269 19.875 0.625 16.5731 0.625 12.5V8.5C0.625 4.4269 3.9269 1.125 8 1.125Z" 
        fill={Colors.background.lightGray}
      />
      <Path 
        d="M8 1.125H12C16.0731 1.125 19.375 4.4269 19.375 8.5V12.5C19.375 16.5731 16.0731 19.875 12 19.875H8C3.9269 19.875 0.625 16.5731 0.625 12.5V8.5C0.625 4.4269 3.9269 1.125 8 1.125Z" 
        stroke={Colors.state.success} 
        strokeWidth="1.25"
      />
      {checked && (
        <Path 
          d="M5.75 10.5L8.58 13.33L14.25 7.67001" 
          stroke={Colors.state.success} 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      )}
    </Svg>
  );
};
