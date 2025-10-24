# Signup Page UI/UX Guide

## 📱 Visual Layout

```
┌─────────────────────────────────────────┐
│              [Status Bar]               │  44px
├─────────────────────────────────────────┤
│                                         │
│              🌊 Logo                    │  ~150px from top
│           LinguaTrail                   │
│                                         │
│                                         │
│  ╔═════════════════════════════════╗   │
│  ║     Join LinguaTrail Today      ║   │
│  ║   Unlock tailored learning      ║   │  Header
│  ║         styles.                 ║   │
│  ║                                 ║   │
│  ║  [ Google ] [ Apple ]           ║   │  Social buttons
│  ║                                 ║   │
│  ║  ─────────────  OR  ───────────║   │  OR divider
│  ║                                 ║   │
│  ║  Full Name                      ║   │
│  ║  [_______________________________]  ║   │  Input 48px
│  ║                                 ║   │
│  ║  Email / Phone                  ║   │
│  ║  [_______________________________]  ║   │  Input 48px
│  ║                                 ║   │
│  ║  Password                       ║   │
│  ║  [_______________________][👁]  ║   │  Input 48px + Eye
│  ║                                 ║   │
│  ║  Confirm Password               ║   │
│  ║  [_______________________][👁]  ║   │  Input 48px + Eye
│  ║                                 ║   │
│  ║  ☑ I agree to Terms of Service  ║   │  Checkbox + text
│  ║      & Privacy Policy           ║   │
│  ║                                 ║   │
│  ║                                 ║   │  Push to bottom
│  ║  ╔═════════════════════════╗    ║   │
│  ║  ║   Create Account        ║    ║   │  Button 52px
│  ║  ╚═════════════════════════╝    ║   │
│  ║                                 ║   │
│  ║  Already have account?          ║   │
│  ║           Login                 ║   │  Link in teal
│  ║                                 ║   │
│  ╚═════════════════════════════════╝   │  White container
│                                         │  (60% screen height)
│                                         │
│                                         │
│           [     Home Indicator     ]    │  36px
└─────────────────────────────────────────┘
```

---

## 🎨 Color Palette

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background | Dark Blue | #091729 | Screen background |
| Container | White | #FFFFFF | Form container |
| Primary Text | Dark Blue | #263574 | Labels, titles |
| Secondary Text | Gray | #5C5C5C | Placeholders, hints |
| Button | Teal Green | #27EDB7 | "Create Account" button |
| Input Background | Light Gray | #F6F7FA | Input fields |
| Input Border | Light Gray | #E0E3EF | Input borders |
| Error | Red | #FF6B6B | Error messages & invalid borders |
| Checkbox Border (unchecked) | Teal | #1FBE92 | Checkbox border |
| Checkbox Border (checked) | Teal | #1FBE92 | Checkbox checkmark |

---

## 📏 Spacing & Sizing

### Container
- **Bottom Position**: 25px from screen edge
- **Horizontal**: 8px padding on each side (359px total width)
- **Vertical Padding**: 24px top, 16px bottom
- **Height**: 60% of screen height (calculated dynamically)
- **Border Radius**: 32px
- **Gap between sections**: 24px

### Form Elements
- **Input Height**: 48px
- **Button Height**: 52px
- **Checkbox Size**: 20x20px
- **Icon Size**: 26x26px (social icons), 24x24px (eye icon)
- **Border Radius (pills)**: 1000px
- **Input Gap (internal)**: 16px horizontal padding, 12px gap to icon

### Spacing Between Elements
- **Header to form**: 24px (formContainer gap)
- **Between inputs**: 12px (inputSection gap)
- **Between button and link**: 12px (buttonSection gap)
- **Social buttons**: 12px gap between Google and Apple

---

## 🔤 Typography

### Heading
- **Font**: Manrope (via Typography.fontFamily.title)
- **Size**: 22px
- **Weight**: 600 (Semibold)
- **Line Height**: 26px
- **Letter Spacing**: -0.02

### Subtitle
- **Font**: Urbanist (via Typography.fontFamily.body)
- **Size**: 16px
- **Weight**: 500 (Medium)
- **Line Height**: 24px
- **Letter Spacing**: -0.02
- **Opacity**: 0.7
- **Color**: #5C5C5C

### Labels
- **Font**: Urbanist
- **Size**: 16px
- **Weight**: 500 (Medium)
- **Line Height**: 24px
- **Letter Spacing**: -0.02
- **Color**: #263574

### Input Text
- **Font**: Urbanist
- **Size**: 16px
- **Weight**: 500 (Medium)
- **Line Height**: 24px
- **Letter Spacing**: -0.02
- **Color**: #5C5C5C (for placeholders)

### Button Text
- **Font**: Urbanist
- **Size**: 16px
- **Weight**: 600 (Semibold)
- **Line Height**: 24px
- **Letter Spacing**: -0.02
- **Color**: #2F4291 (dark blue text on teal background)

### Error Text
- **Font**: Urbanist
- **Size**: 14px
- **Weight**: 500 (Medium)
- **Line Height**: 21px
- **Letter Spacing**: -0.02
- **Color**: #FF6B6B (red)

### Checkbox Label
- **Font**: Urbanist
- **Size**: 14px
- **Weight**: 500 (Medium)
- **Line Height**: 21px
- **Letter Spacing**: -0.02
- **Color**: #5C5C5C
- **Opacity**: 0.9

---

## 🎯 Form Fields

### 1. Full Name
- **Label**: "Full Name"
- **Placeholder**: "example@gmail.com"
- **Type**: Text input
- **Validation**: Required, 2+ characters
- **Error Position**: Below input

### 2. Email / Phone
- **Label**: "Email / Phone"
- **Placeholder**: "Enter the email or phone"
- **Type**: Text input
- **Validation**: Valid email OR valid phone format
- **Error Position**: Below input

### 3. Password
- **Label**: "Password"
- **Placeholder**: "Enter password"
- **Type**: Password input (with toggle)
- **Toggle**: Eye icon (visible/hidden)
- **Validation**: Min 8 chars, 1 uppercase, 1 number, 1 special char
- **Error Position**: Below input
- **Component**: `<PasswordField />`

### 4. Confirm Password
- **Label**: "Confirm Password"
- **Placeholder**: "Enter password"
- **Type**: Password input (with toggle)
- **Toggle**: Eye icon (visible/hidden)
- **Validation**: Must match Password field
- **Error Position**: Below input
- **Component**: `<PasswordField />`

### 5. Terms Checkbox
- **Checkbox Size**: 20x20px
- **Border**: 1.25px #1FBE92 (unchecked)
- **Checkmark**: SVG checkmark (checked)
- **Label**: "I agree to Terms of Service & Privacy Policy"
- **Validation**: Must be checked
- **Type**: TouchableOpacity with state

---

## 🔘 Button States

### Create Account Button

**Default (Enabled):**
- Background: #27EDB7 (Teal Green)
- Text: "Create Account"
- Text Color: #2F4291 (Dark Blue)
- Height: 52px
- Border Radius: 1000px

**Loading:**
- Opacity: 0.7
- Text: "Creating Account..."
- Disabled: true
- Interactive: false

**Disabled:**
- Opacity: 0.7
- Not clickable

---

## 🔗 Interactive Elements

### Social Buttons (Google, Apple)
- **Height**: 50px
- **Background**: #FFFFFF (White)
- **Border**: 1px #E0E3EF (Light Gray)
- **Border Radius**: 1000px
- **Layout**: Flex row with 12px gap
- **Content**: Icon (26x26) + Text ("Google"/"Apple")
- **Feedback**: Toast "Coming Soon!" on tap

### Checkbox
- **Size**: 20x20px
- **Unchecked Border**: 1.25px #1FBE92
- **Checked**: SVG checkmark fill
- **Toggle**: Touch anywhere on row to toggle

### Eye Icon (Password Toggle)
- **Size**: 24x24px
- **Color**: #263574 (Primary Blue)
- **Stroke**: 1.25px
- **Toggle**: Securely show/hide password text
- **Location**: Right side of password input

### Navigation Links
- **"Already have account? Login"**: 
  - Text: #5C5C5C
  - Link Color: #27EDB7 (Teal)
  - Font: Urbanist 16px weight 500
  - Navigation: router.push('/onboarding/login')

---

## ✅ Form Validation Flow

```
User enters data
    ↓
User taps "Create Account"
    ↓
validateForm()
    ↓
    ├─ fullName check → error? (show red border + error text)
    ├─ emailPhone check → error? (show red border + error text)
    ├─ password check → error? (show red border + error text)
    ├─ confirmPassword check → error? (show red border + error text)
    └─ agreeToTerms check → error? (show error text below)
    ↓
Any errors? YES → setErrors() & return
    ↓
    NO → User fixes input
    ↓
    User types in error field → error clears in real-time
    ↓
Submit form → Loading state → API call → Navigate or show error toast
```

---

## 🎬 Animation & Transitions

- **Input borders**: Change to red (#FF6B6B) on error (no animation)
- **Button**: Opacity 0.7 while loading (no animation)
- **Error text**: Appears/disappears instantly
- **Eye icon**: Toggles instantly with each tap
- **Navigation**: Expo Router handles screen transitions

---

## 📱 Responsive Behavior

- **60% fixed height**: Maintains consistent container size across devices
- **Width**: Left/Right 8px margins ensure proper spacing on all widths
- **ScrollView**: `scrollEnabled={false}` - assumes content fits in 60% height
  - If content overflows on small screens, enable scroll or adjust padding
- **Absolute positioning**: Logo and container use absolute positioning for consistency
- **Flex layout**: All internal elements use flexbox for responsive sizing

---

## 🎨 Error States

### Input Field Error
```
[_________________________________]  ← Normal
↓
[_________________________________]  ← Red border (1.25px #FF6B6B)
Error message below in red
```

### Validation Error Messages
- **Full Name**: 
  - "Full name is required"
  - "Full name must be at least 2 characters"
- **Email/Phone**: 
  - "Email or phone is required"
  - "Please enter a valid email or phone number"
- **Password**: 
  - "Password is required"
  - "Password must be at least 8 characters"
  - "Password must contain at least one uppercase letter"
  - "Password must contain at least one number"
  - "Password must contain at least one special character"
- **Confirm Password**: 
  - "Please confirm your password"
  - "Passwords do not match"
- **Terms**: 
  - "You must agree to the Terms of Service & Privacy Policy"

---

## ✨ Success Flow

```
User fills form + validates
    ↓
Taps "Create Account"
    ↓
Button shows "Creating Account..." (disabled, opacity 0.7)
    ↓
API call (1500ms mock delay)
    ↓
Toast: "Account created successfully!"
    ↓
Navigate to /onboarding/verify-code
```

---
