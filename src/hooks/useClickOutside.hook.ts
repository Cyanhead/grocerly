import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        refs.every(
          ref => ref.current && !ref.current.contains(e.target as Node)
        )
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler]);
};
