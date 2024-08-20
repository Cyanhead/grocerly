import { useEffect, useState } from 'react';

const UPPERCASE_REGEX = /[A-Z]/;
const DIGIT_REGEX = /\d/;
const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>]/;

interface PasswordConfig {
  minLength?: number;
  requireUppercase?: boolean;
  requireDigit?: boolean;
  requireSpecialChar?: boolean;
}

function useValidatePassword(password: string, config: PasswordConfig = {}) {
  const {
    minLength = 8,
    requireUppercase = true,
    requireDigit = true,
    requireSpecialChar = true,
  } = config;

  const [checks, setChecks] = useState({
    hasMinimumLength: false,
    hasNumber: false,
    hasUppercase: false,
    hasSpecialChar: false,
  });

  useEffect(() => {
    if (password.length >= minLength) {
      setChecks(previousState => {
        return { ...previousState, hasMinimumLength: true };
      });
    } else {
      setChecks(previousState => {
        return { ...previousState, hasMinimumLength: false };
      });
    }
  }, [password, minLength]);

  useEffect(() => {
    if (requireUppercase && UPPERCASE_REGEX.test(password)) {
      setChecks(previousState => {
        return { ...previousState, hasUppercase: true };
      });
    } else {
      setChecks(previousState => {
        return { ...previousState, hasUppercase: false };
      });
    }
  }, [password, requireUppercase]);

  useEffect(() => {
    if (requireDigit && DIGIT_REGEX.test(password)) {
      setChecks(previousState => {
        return { ...previousState, hasNumber: true };
      });
    } else {
      setChecks(previousState => {
        return { ...previousState, hasNumber: false };
      });
    }
  }, [password, requireDigit]);

  useEffect(() => {
    if (requireSpecialChar && SPECIAL_CHAR_REGEX.test(password)) {
      setChecks(previousState => {
        return { ...previousState, hasSpecialChar: true };
      });
    } else {
      setChecks(previousState => {
        return { ...previousState, hasSpecialChar: false };
      });
    }
  }, [password, requireSpecialChar]);

  return { ...checks };
}

export default useValidatePassword;
