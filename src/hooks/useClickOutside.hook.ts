import { useEffect, RefObject } from 'react';

/**
 * @description
 * Hook that handles outside clicks on a set of ref elements.
 * @param {RefObject<HTMLElement>[]} refs
 * @param {() => void} handler
 * @returns
 *
 * @example
 * const MyComponent = () => {
 *   const wrapperRef = useRef(null);
 *   useClickOutside([wrapperRef], () => console.log('Clicked outside'));
 *
 *   return (
 *     <div ref={wrapperRef}>
 *       <p>Hello World</p>
 *     </div>
 *   );
 * };
 */
export function useClickOutside(
  refs: RefObject<HTMLElement>[],
  handler: () => void
) {
  useEffect(() => {
    /**
     * @description
     * Handles the event of a click outside the provided refs.
     * If the click is outside all of the refs, the handler is called.
     * @param {MouseEvent} e
     */
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
