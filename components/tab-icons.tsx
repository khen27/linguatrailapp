import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface TabIconProps {
  size?: number;
  color?: string;
}

export function HomeIcon({ size = 24, color = '#5C5C5C' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.0698 2.82009L3.13978 8.37008C2.35978 8.99008 1.85978 10.3001 2.02978 11.2801L3.35978 19.2401C3.59978 20.6601 4.95977 21.8101 6.39977 21.8101H17.5998C19.0298 21.8101 20.3998 20.6501 20.6398 19.2401L21.9698 11.2801C22.1298 10.3001 21.6298 8.99008 20.8598 8.37008L13.9298 2.8301C12.8598 1.9701 11.1298 1.97009 10.0698 2.82009Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BookIcon({ size = 24, color = '#5C5C5C' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M22.25 16.7399V4.66994C22.25 3.46994 21.27 2.57994 20.08 2.67994H20.02C17.92 2.85994 14.73 3.92994 12.95 5.04994L12.78 5.15994C12.49 5.33994 12.01 5.33994 11.72 5.15994L11.47 5.00994C9.69 3.89994 6.51 2.83994 4.41 2.66994C3.22 2.56994 2.25 3.46994 2.25 4.65994V16.7399C2.25 17.6999 3.03 18.5999 3.99 18.7199L4.28 18.7599C6.45 19.0499 9.8 20.1499 11.72 21.1999L11.76 21.2199C12.03 21.3699 12.46 21.3699 12.72 21.2199C14.64 20.1599 18 19.0499 20.18 18.7599L20.51 18.7199C21.47 18.5999 22.25 17.6999 22.25 16.7399Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.25 5.48999V20.49"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8.48999H5.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.75 11.49H5.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function AddIcon({ size = 30, color = '#FFFFFF' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Path
        d="M15 7.5V22.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M7.5 15H22.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function ChartIcon({ size = 24, color = '#5C5C5C' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M9.75 22H15.75C20.75 22 22.75 20 22.75 15V9C22.75 4 20.75 2 15.75 2H9.75C4.75 2 2.75 4 2.75 9V15C2.75 20 4.75 22 9.75 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.25 18.5C17.35 18.5 18.25 17.6 18.25 16.5V7.5C18.25 6.4 17.35 5.5 16.25 5.5C15.15 5.5 14.25 6.4 14.25 7.5V16.5C14.25 17.6 15.14 18.5 16.25 18.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.25 18.5C10.35 18.5 11.25 17.6 11.25 16.5V13C11.25 11.9 10.35 11 9.25 11C8.15 11 7.25 11.9 7.25 13V16.5C7.25 17.6 8.14 18.5 9.25 18.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ProfileIcon({ size = 24, color = '#23D5A5' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill={color}
      />
      <Path
        d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"
        fill={color}
      />
    </Svg>
  );
}
