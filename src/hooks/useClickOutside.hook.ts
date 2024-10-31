import { useEffect, RefObject } from 'react';

/**
 * @description
 * Hook that handles outside clicks on a set of ref elements.
 * @param {RefObject<HTMLElement>[]} refs
 * @param {() => void} handler
 * @returns
 */
export function useClickOutside(
  refs: RefObject<HTMLElement>[],
  handler: () => void
) {
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
}
