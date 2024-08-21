import { useState } from 'react';

function useToggle(initialValue = false): [boolean, () => void] {
  if (typeof initialValue !== 'boolean' && typeof initialValue !== 'function') {
    console.warn('Invalid type for useToggle');
  }

  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue(currentValue => !currentValue);
  }

  return [value, toggleValue];
}

export default useToggle;
