import { renderHook } from '@testing-library/react';
import useValidatePassword from '../useValidatePassword.hook';

describe('useValidatePassword', () => {
  test('validates password with minimum length', () => {
    const { result, rerender } = renderHook(
      ({ password }) => useValidatePassword(password),
      {
        initialProps: { password: '1234567' },
      }
    );

    // Test with password shorter than 8 characters
    expect(result.current.hasMinimumLength).toBe(false);

    // Rerender with a longer password
    rerender({ password: '12345678' });
    expect(result.current.hasMinimumLength).toBe(true);
  });

  test('validates password with uppercase letter requirement', () => {
    const { result, rerender } = renderHook(
      ({ password }) => useValidatePassword(password),
      {
        initialProps: { password: 'password' },
      }
    );

    // Test with password without uppercase letter
    expect(result.current.hasUppercase).toBe(false);

    // Rerender with an uppercase letter
    rerender({ password: 'Password' });
    expect(result.current.hasUppercase).toBe(true);
  });

  test('validates password with digit requirement', () => {
    const { result, rerender } = renderHook(
      ({ password }) => useValidatePassword(password),
      {
        initialProps: { password: 'Password' },
      }
    );

    // Test with password without a digit
    expect(result.current.hasNumber).toBe(false);

    // Rerender with a digit
    rerender({ password: 'Password1' });
    expect(result.current.hasNumber).toBe(true);
  });

  test('validates password with special character requirement', () => {
    const { result, rerender } = renderHook(
      ({ password }) => useValidatePassword(password),
      {
        initialProps: { password: 'Password1' },
      }
    );

    // Test with password without special character
    expect(result.current.hasSpecialChar).toBe(false);

    // Rerender with a special character
    rerender({ password: 'Password1!' });
    expect(result.current.hasSpecialChar).toBe(true);
  });

  test('validates password with custom configuration', () => {
    const { result } = renderHook(
      ({ password, config }) => useValidatePassword(password, config),
      {
        initialProps: {
          password: 'TestPass',
          config: { minLength: 6, requireSpecialChar: false },
        },
      }
    );

    // With a shorter minLength and no special character requirement
    expect(result.current.hasMinimumLength).toBe(true);
    expect(result.current.hasSpecialChar).toBe(false);
    expect(result.current.hasUppercase).toBe(true);
  });

  test('validates when all conditions are met', () => {
    const { result } = renderHook(() => useValidatePassword('Password1!'));

    expect(result.current.hasMinimumLength).toBe(true);
    expect(result.current.hasUppercase).toBe(true);
    expect(result.current.hasNumber).toBe(true);
    expect(result.current.hasSpecialChar).toBe(true);
  });
});
