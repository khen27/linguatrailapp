/**
 * Validation utilities for form inputs
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Enhanced email validation
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }

  // More comprehensive email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  // Check for common typos in domain
  const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];
  const domain = email.split('@')[1]?.toLowerCase();
  
  if (domain) {
    // Check for common typos
    const typos: { [key: string]: string } = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'yahooo.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
      'outlok.com': 'outlook.com',
    };

    if (typos[domain]) {
      return { isValid: false, error: `Did you mean ${email.replace(domain, typos[domain])}?` };
    }
  }

  return { isValid: true };
};

/**
 * Enhanced phone validation
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone.trim()) {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove all non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, '');

  // Check minimum length (10 digits for US, but allow international)
  if (digitsOnly.length < 10) {
    return { isValid: false, error: 'Phone number must be at least 10 digits' };
  }

  // Check maximum length (15 digits is international standard)
  if (digitsOnly.length > 15) {
    return { isValid: false, error: 'Phone number is too long' };
  }

  // US phone number validation
  if (digitsOnly.length === 10) {
    // US format: area code can't start with 0 or 1
    const areaCode = digitsOnly.substring(0, 3);
    if (areaCode[0] === '0' || areaCode[0] === '1') {
      return { isValid: false, error: 'Invalid US area code' };
    }
  }

  // International format validation (starts with country code)
  if (digitsOnly.length > 10) {
    // Common country codes
    const validCountryCodes = ['1', '44', '49', '33', '39', '34', '81', '86', '91', '55', '52', '61'];
    const hasValidCountryCode = validCountryCodes.some(code => 
      digitsOnly.startsWith(code) && digitsOnly.length >= code.length + 10
    );

    if (!hasValidCountryCode && !phone.startsWith('+')) {
      return { isValid: false, error: 'International numbers should start with +' };
    }
  }

  return { isValid: true };
};

/**
 * Combined email or phone validation
 */
export const validateEmailOrPhone = (input: string): ValidationResult => {
  if (!input.trim()) {
    return { isValid: false, error: 'Email or phone number is required' };
  }

  // Determine if it's likely an email (contains @) or phone
  if (input.includes('@')) {
    return validateEmail(input);
  } else {
    return validatePhone(input);
  }
};

/**
 * Name validation
 */
export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }

  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }

  if (name.trim().length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' };
  }

  // Check for valid characters (letters, spaces, hyphens, apostrophes)
  const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
  if (!nameRegex.test(name)) {
    return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
  }

  // Check for reasonable format (not all spaces, not starting/ending with special chars)
  const trimmed = name.trim();
  if (trimmed !== name || /^[\-'\.]/g.test(trimmed) || /[\-'\.]$/g.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid name format' };
  }

  return { isValid: true };
};

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length === 10) {
    // US format: (123) 456-7890
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  } else if (digitsOnly.length === 11 && digitsOnly[0] === '1') {
    // US with country code: +1 (123) 456-7890
    return `+1 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`;
  } else if (digitsOnly.length > 10) {
    // International format: +XX XXX XXX XXXX
    return `+${digitsOnly.slice(0, -10)} ${digitsOnly.slice(-10, -7)} ${digitsOnly.slice(-7, -4)} ${digitsOnly.slice(-4)}`;
  }

  return phone; // Return original if can't format
};

/**
 * Suggest email corrections for common typos
 */
export const suggestEmailCorrection = (email: string): string | null => {
  const domain = email.split('@')[1]?.toLowerCase();
  
  if (!domain) return null;

  const suggestions: { [key: string]: string } = {
    'gmial.com': 'gmail.com',
    'gmai.com': 'gmail.com',
    'gmail.co': 'gmail.com',
    'yahooo.com': 'yahoo.com',
    'yahoo.co': 'yahoo.com',
    'hotmial.com': 'hotmail.com',
    'hotmail.co': 'hotmail.com',
    'outlok.com': 'outlook.com',
    'outlook.co': 'outlook.com',
    'iclod.com': 'icloud.com',
    'icloud.co': 'icloud.com',
  };

  if (suggestions[domain]) {
    return email.replace(domain, suggestions[domain]);
  }

  return null;
};
