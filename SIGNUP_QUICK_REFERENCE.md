# 🚀 Signup Feature - Quick Reference

## 📁 Files Created/Modified

### New Files
```
✨ components/onboarding/PasswordField.tsx      — Reusable password field component
✨ app/onboarding/signup.tsx                     — Main signup screen
✨ SIGNUP_IMPLEMENTATION.md                      — Full implementation details
✨ SIGNUP_UI_GUIDE.md                            — UI/UX specification
✨ SIGNUP_QUICK_REFERENCE.md                     — This file
```

### Modified Files
```
📝 components/onboarding/index.ts                — Added PasswordField export
📝 app/onboarding/login.tsx                      — Added navigation to signup
```

---

## 🎯 Component Quick Links

### PasswordField Component
**Location**: `components/onboarding/PasswordField.tsx`

```tsx
import { PasswordField } from '@/components/onboarding';

<PasswordField
  label="Password"
  value={password}
  onChangeText={setPassword}
  placeholder="Enter password"
  error={errors.password}
/>
```

**Props**:
- `label` (string, required) - Input label text
- `value` (string, required) - Current value
- `onChangeText` (function, required) - Change handler
- `placeholder` (string, optional) - Placeholder text
- `error` (string, optional) - Error message to display

**Features**:
- ✅ Password visibility toggle (eye icon)
- ✅ Error state styling (red border)
- ✅ Error message display
- ✅ Design token integration

---

### Signup Screen
**Location**: `app/onboarding/signup.tsx`

**Route**: `/onboarding/signup`

**Navigation**:
```tsx
import { useRouter } from 'expo-router';

const router = useRouter();
router.push('/onboarding/signup');
```

**Key Methods**:
```tsx
validateForm()      // Validates all fields, returns boolean
handleSignup()      // Submits form, handles API call
handleComingSoon()  // Shows "Coming Soon" toast for social buttons
```

---

## 📋 Form Fields & Validation

| Field | Rules | Error Types |
|-------|-------|-------------|
| Full Name | Required, 2+ chars | "required", "too short" |
| Email/Phone | Valid email OR phone | "required", "invalid format" |
| Password | 8+ chars, 1 uppercase, 1 number, 1 special | "required", "too short", "needs uppercase", "needs number", "needs special char" |
| Confirm Password | Must match password field | "required", "mismatch" |
| Terms | Must be checked | "required" |

---

## 🎨 Design System Integration

**Colors Used**:
```tsx
Colors.background.primary    // #091729 (blue bg)
Colors.background.white      // #FFFFFF (container)
Colors.text.primary          // #263574 (labels)
Colors.text.secondary        // #5C5C5C (hints)
Colors.input.background      // #F6F7FA (inputs)
Colors.input.border          // #E0E3EF (borders)
Colors.state.error           // #FF6B6B (errors)
```

**Spacing Constants**:
```tsx
Spacing.xs    // 4px
Spacing.sm    // 8px
Spacing.md    // 12px
Spacing.lg    // 16px
Spacing.xl    // 24px
```

**Typography**:
```tsx
Typography.fontFamily.title          // 'Manrope' (headings)
Typography.fontFamily.body           // 'Urbanist' (body)
Typography.sizes.h2                  // 22px
Typography.sizes.body                // 16px
Typography.sizes.small               // 14px
Typography.weights.semibold          // '600'
Typography.weights.regular           // '500'
```

**Border Radius**:
```tsx
BorderRadius.round     // 1000px (pills)
BorderRadius.large     // 24px (containers) - custom use 32px
```

---

## 🔌 Integration Points

### 1. Connect to Auth Service
**File**: `app/onboarding/signup.tsx` (line ~80)

```tsx
// TODO: Replace this with actual auth service
const handleSignup = async () => {
  if (!validateForm()) return;
  
  setLoading(true);
  try {
    // ✏️ REPLACE THIS:
    // await authService.signup(formData);
    
    // CURRENTLY: Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.show({ message: 'Account created successfully!' });
    router.push('/onboarding/verify-code');
  } catch (error) {
    toast.show({ message: 'Failed to create account.' });
  } finally {
    setLoading(false);
  }
};
```

**Expected Response**:
```tsx
interface SignupResponse {
  success: boolean;
  userId?: string;
  token?: string;
  message?: string;
}
```

### 2. Social Login (OAuth)
**File**: `app/onboarding/signup.tsx` (line ~130-150)

Currently shows "Coming Soon" toast. Replace with:
```tsx
const handleGoogleSignup = async () => {
  // Implement Google OAuth
};

const handleAppleSignup = async () => {
  // Implement Apple OAuth
};
```

### 3. Toast Notifications
Uses existing `useToast()` hook:
```tsx
import { useToast } from '@/hooks/useToast';

const toast = useToast();
toast.show({ 
  message: 'Your message',
  preset: 'success' | 'error' | 'comingSoon'
});
```

---

## 🧪 Testing Checklist

### Validation
- [ ] Full Name: Empty, 1 char, valid name
- [ ] Email/Phone: Invalid email, invalid phone, valid email, valid phone
- [ ] Password: All validation rules (length, uppercase, number, special)
- [ ] Confirm Password: Mismatch, match
- [ ] Terms: Unchecked, checked

### UI/UX
- [ ] Error borders appear when invalid
- [ ] Error messages display correctly
- [ ] Error clears on input change
- [ ] Button disables during loading
- [ ] Button text changes to "Creating Account..."
- [ ] Password visibility toggles work
- [ ] Checkbox toggles work

### Navigation
- [ ] Navigate from login → signup
- [ ] Navigate from signup → login
- [ ] Navigate from signup → verify-code (on success)
- [ ] Back button works from signup

### Styling
- [ ] Container is 60% screen height
- [ ] All text uses correct fonts/sizes
- [ ] Colors match design tokens
- [ ] Spacing is consistent (12px, 16px, 24px)
- [ ] Border radius is correct (32px container, 1000px pills)

---

## 🐛 Common Issues & Solutions

### Issue: Content overflows container
**Cause**: 60% height on small screens is too small
**Solution**: Enable ScrollView or adjust Spacing

### Issue: Eye icon not showing
**Cause**: SVG not imported or sized
**Solution**: Check SVG import in PasswordField, width/height props

### Issue: Form doesn't submit
**Cause**: Validation failed silently
**Solution**: Check browser console, add console.log in validateForm()

### Issue: Toast not showing
**Cause**: Toast provider not in layout
**Solution**: Verify ToastProvider wraps onboarding layout

---

## 📚 Related Documentation

- **Style Guide**: `ONBOARDING_STYLE_GUIDE.md` — Full onboarding guidelines
- **Implementation Details**: `SIGNUP_IMPLEMENTATION.md` — Complete feature breakdown
- **UI/UX Guide**: `SIGNUP_UI_GUIDE.md` — Design specifications
- **Login Screen**: `app/onboarding/login.tsx` — Reference implementation

---

## 🎯 Next Steps

1. **Connect to Auth Service**
   - Replace mock API call with real signup endpoint
   - Handle errors and edge cases
   - Store auth token securely

2. **Implement OAuth**
   - Connect Google Sign-In
   - Connect Apple Sign-In
   - Handle OAuth errors

3. **Email Verification**
   - Ensure verify-code screen exists
   - Implement verification flow

4. **Testing**
   - Unit tests for validation
   - Integration tests for signup flow
   - E2E tests on real devices

5. **Analytics**
   - Track signup attempts
   - Track validation errors
   - Track conversion rate

---

## ✨ Done! 

The signup feature is fully architected and ready for integration with your backend auth service. All styling is consistent with existing onboarding screens, form validation is comprehensive, and the UX is smooth and user-friendly.

Happy coding! 🚀
