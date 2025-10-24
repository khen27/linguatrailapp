// Design System Tokens for LinguaTrail

export const Colors = {
  // Background Colors
  background: {
    primary: '#091729',
    white: '#FFFFFF',
    lightGray: '#F6F7FA',
  },

  // Brand Colors
  brand: {
    primary: '#27EDB7',
    secondary: '#2B958B',
  },

  // Text Colors
  text: {
    primary: '#263574',
    secondary: '#5C5C5C',
    accent: '#2F4291',
    white: '#FFFFFF',
  },

  // State Colors
  state: {
    success: '#1FBE92',
    error: '#FF6B6B',
  },

  // Input Colors
  input: {
    background: '#F6F7FA',
    border: '#E0E3EF',
  },
};

export const Typography = {
  fontFamily: {
    title: 'Manrope',
    body: 'Urbanist',
  },
  
  sizes: {
    h1: 28,
    h2: 22,
    h3: 18,
    body: 16,
    small: 14,
  },
  
  weights: {
    light: '400',
    regular: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeight: {
    title: 34,
    body: 24,
    small: 21,
  },
  
  letterSpacing: -0.02,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const BorderRadius = {
  small: 8,
  medium: 12,
  large: 24,
  round: 1000,
  circle: '50%',
};

export const Shadow = {
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
};

// Backward compatibility - keep old structure
export const DesignTokens = {
  colors: {
    background: '#F6F7FA',
    white: '#FFFFFF',
    blueNormal: '#263574',
    bluePrimary: '#2F4291',
    greyNormal: '#5C5C5C',
    greyBorder: '#E0E3EF',
    ctaGreen: '#27EDB7',
    green1: '#36BAAE',
    green2: '#5EAD95',
    green3: '#27EDB7',
    red: '#F84E5B',
    yellow: '#F5C63B',
  },
  radii: {
    xlCard: 32,
    rounded: 16,
    pill: 1000,
    chip: 99,
  },
  spacing: {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
  },
  layout: {
    contentWidth: 327,
    headerHeight: 42,
    headerTop: 53,
  },
  shadows: {
    soft: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.04,
      shadowRadius: 16,
      elevation: 4,
    },
  },
} as const;

export type AppColors = typeof DesignTokens.colors;

