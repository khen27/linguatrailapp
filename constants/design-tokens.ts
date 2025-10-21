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

