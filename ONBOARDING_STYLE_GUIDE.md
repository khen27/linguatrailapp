# LinguaTrail Onboarding Style Guide

## Overview
All onboarding screens must use the `OnboardingScreen` wrapper component to ensure consistency across login, forgot-password, reset-password, verify-code, and reset-password-success flows.

---

## Component Architecture

### Structure Template
```tsx
import { OnboardingScreen } from '@/components/onboarding';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

export default function YourScreenName() {
  return (
    <OnboardingScreen
      title="Screen Title"
      subtitle="Optional subtitle text here"
    >
      <View style={styles.formContent}>
        {/* Input Section - at top */}
        <View style={styles.inputSection}>
          {/* Your input fields here */}
        </View>

        {/* Button Section - pushed to bottom */}
        <View style={styles.buttonSection}>
          {/* Your button here */}
          {/* Back to Login? link here */}
        </View>
      </View>
    </OnboardingScreen>
  );
}
```

---

## White Container Specifications

### OnboardingScreen formContainer
- **Position**: Absolute, bottom: 25
- **Size**: 60% of screen height (fixed)
- **Dimensions**: left: 8, right: 8
- **Styling**:
  - Background: `Colors.background.white` (#FFFFFF)
  - Border Radius: 32
  - Display: flex, flexDirection: column (REQUIRED for flex layout)
  - Padding: 24 top, 16 horizontal, 16 bottom
  - Gap: 24

### Layout Inside White Container
```
formContainer (flex, flexDirection: column, paddingBottom: 16)
  ├─ header (auto height)
  │   ├─ title (Manrope, 22px, weight 600)
  │   └─ subtitle (Urbanist, 16px, weight 500)
  │
  └─ formContent (flex: 1) ← FILLS AVAILABLE SPACE
      ├─ inputSection (gap: 12-20)
      │   └─ Your inputs, errors, etc.
      │
      └─ buttonSection (marginTop: 'auto')
          ├─ Primary button (height: 52)
          └─ Back link (16px from container bottom)
```

---

## Content Styling Rules

### Typography Standards
- **Title in header**: Manrope, 22px, weight 600, line-height 26, centered
- **Subtitle in header**: Urbanist, 16px, weight 500, opacity 0.7, centered
- **Input labels**: Urbanist, 16px, weight 500, color: text.primary
- **Button text**: Urbanist, 16px, weight 600, color: text.accent
- **Back link**: Urbanist, 16px, weight 500, color: brand.primary
- **Error text**: Urbanist, 14px, weight 500, color: state.error
- **ALL TEXT**: Letter-spacing: -0.02

### Input Fields
- Background: `Colors.input.background` (#F6F7FA)
- Border: 1.25px, color: `Colors.input.border` (#E0E3EF)
- Border radius: 1000 (pill shape)
- Height: 48
- Padding: 16 horizontal, 12 vertical
- Font: Urbanist, 16px, weight 500

### Primary Button
- Background: `Colors.brand.primary` (#27EDB7)
- Border radius: 1000 (pill shape)
- Height: 52
- Padding: 14 vertical, 12 horizontal
- Text: Urbanist, 16px, weight 600, color: text.accent

### Disabled Button
- Background: #CCCCCC
- Opacity: 0.7

---

## Positioning Rules

### Button/Link Positioning
- `buttonSection` MUST have `marginTop: 'auto'` to push to bottom
- Button and "Back to Login?" link sit **exactly 16px** from the white container bottom
- This is achieved via `formContainer`'s `paddingBottom: 16`
- **DO NOT** use additional marginBottom on buttonSection

### Gap Spacing
- Between header and formContent: 24 (via formContainer gap)
- Between inputs in inputSection: 12-20
- Between button and back link in buttonSection: 12 (Spacing.md)

---

## Design Token Usage

```tsx
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/design-tokens';

// Colors
Colors.background.primary    // #091729 (blue background)
Colors.background.white      // #FFFFFF (white container)
Colors.text.primary          // #263574 (dark text)
Colors.text.secondary        // #5C5C5C (gray text)
Colors.brand.primary         // #27EDB7 (green button)
Colors.state.error           // #FF6B6B (red errors)
Colors.input.background      // #F6F7FA (input bg)

// Typography
Typography.fontFamily.title  // 'Manrope'
Typography.fontFamily.body   // 'Urbanist'
Typography.sizes.h2          // 22
Typography.sizes.body        // 16
Typography.sizes.small       // 14
Typography.weights.semibold  // '600'
Typography.weights.regular   // '500'
Typography.lineHeight.body   // 24
Typography.letterSpacing     // -0.02

// Spacing
Spacing.xs   // 4
Spacing.sm   // 8
Spacing.md   // 12
Spacing.lg   // 16
Spacing.xl   // 24

// Border Radius
BorderRadius.round  // 1000 (pills)
BorderRadius.large  // 24 (containers)
```

---

## Implementation Checklist

When creating a new onboarding screen:

- [ ] Wrap entire content in `<OnboardingScreen title="" subtitle="">`
- [ ] Create `formContent` with `flex: 1`
- [ ] Create `inputSection` with your input fields
- [ ] Create `buttonSection` with `marginTop: 'auto'`
- [ ] Add button and back link inside `buttonSection`
- [ ] Use all design tokens (Colors, Typography, Spacing, BorderRadius)
- [ ] All text uses letter-spacing: -0.02
- [ ] Button height: 52px
- [ ] Input height: 48px
- [ ] Border radius pill: 1000
- [ ] Test on device to verify 16px spacing from container bottom

---

## Common Patterns

### Input with Label and Error
```tsx
<View style={styles.inputContainer}>
  <Text style={styles.inputLabel}>Email / Phone</Text>
  <View style={styles.inputField}>
    <TextInput
      style={styles.textInput}
      placeholder="+0 000 000 0000"
      placeholderTextColor={Colors.text.secondary}
      value={value}
      onChangeText={setValue}
    />
  </View>
</View>

{error && <Text style={styles.errorText}>{error}</Text>}

// Styles
inputContainer: {
  gap: Spacing.sm,
},
inputLabel: {
  fontFamily: Typography.fontFamily.body,
  fontWeight: Typography.weights.regular as '500',
  fontSize: Typography.sizes.body,
  lineHeight: Typography.lineHeight.body,
  letterSpacing: Typography.letterSpacing,
  color: Colors.text.primary,
},
inputField: {
  backgroundColor: Colors.input.background,
  borderRadius: BorderRadius.round,
  paddingHorizontal: Spacing.lg,
  paddingVertical: Spacing.md,
  borderWidth: 1.25,
  borderColor: Colors.input.border,
  height: 48,
},
textInput: {
  fontFamily: Typography.fontFamily.body,
  fontWeight: Typography.weights.regular as '500',
  fontSize: Typography.sizes.body,
  lineHeight: Typography.lineHeight.body,
  letterSpacing: Typography.letterSpacing,
  color: Colors.text.secondary,
},
errorText: {
  fontFamily: Typography.fontFamily.body,
  fontWeight: Typography.weights.regular as '500',
  fontSize: Typography.sizes.small,
  lineHeight: Typography.lineHeight.small,
  letterSpacing: Typography.letterSpacing,
  color: Colors.state.error,
  textAlign: 'center',
},
```

### Button + Back Link
```tsx
<View style={styles.buttonSection}>
  <TouchableOpacity
    style={styles.button}
    onPress={handlePress}
    disabled={loading}
  >
    <Text style={styles.buttonText}>Action Button</Text>
  </TouchableOpacity>

  <View style={styles.backContainer}>
    <Text style={styles.backText}>Back to </Text>
    <TouchableOpacity onPress={handleBack}>
      <Text style={styles.backLink}>Login?</Text>
    </TouchableOpacity>
  </View>
</View>

// Styles
buttonSection: {
  gap: Spacing.md,
  marginTop: 'auto',
},
button: {
  backgroundColor: Colors.brand.primary,
  borderRadius: BorderRadius.round,
  height: 52,
  paddingVertical: 14,
  paddingHorizontal: Spacing.md,
  alignItems: 'center',
  justifyContent: 'center',
},
buttonText: {
  fontFamily: Typography.fontFamily.body,
  fontWeight: Typography.weights.semibold as '600',
  fontSize: Typography.sizes.body,
  lineHeight: Typography.lineHeight.body,
  letterSpacing: Typography.letterSpacing,
  color: Colors.text.accent,
},
backContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
backText: {
  fontFamily: Typography.fontFamily.body,
  fontWeight: Typography.weights.regular as '500',
  fontSize: Typography.sizes.body,
  lineHeight: Typography.lineHeight.body,
  letterSpacing: Typography.letterSpacing,
  color: Colors.text.secondary,
},
backLink: {
  fontFamily: Typography.fontFamily.body,
  fontWeight: Typography.weights.regular as '500',
  fontSize: Typography.sizes.body,
  lineHeight: Typography.lineHeight.body,
  letterSpacing: Typography.letterSpacing,
  color: Colors.brand.primary,
},
```

---

## Key Learnings

1. **Use OnboardingScreen component** - Never create custom layout for onboarding screens
2. **formContent must have flex: 1** - This allows buttonSection's marginTop: 'auto' to work
3. **formContainer must have display: flex** - Required for flex layout to work on children
4. **16px spacing rule** - Button/text sit exactly 16px from white container bottom via paddingBottom
5. **60% fixed height** - All white containers are screenHeight * 0.6
6. **Design tokens only** - Use Colors, Typography, Spacing, BorderRadius consistently
7. **Letter-spacing** - ALL text must have letter-spacing: -0.02
8. **Never waste time** - Copy these patterns exactly, don't reinvent

---

