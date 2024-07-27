const { useLayoutEffect } = require('react');

export const useLockBodyScroll = bool => {
  useLayoutEffect(() => {
    if (bool) {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [bool]);
};
