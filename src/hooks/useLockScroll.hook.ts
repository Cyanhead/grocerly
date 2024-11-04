import { useEffect } from 'react';

/**
 * Locks the scroll of the document body when the trigger is true, and unlocks it
 * when the trigger is false.
 * @param {boolean} trigger - Whether to lock the scroll
 * @example
 *
 * import React from 'react';
 * import { useLockScroll } from './useLockScroll';
 *
 * const MyComponent = () => {
 *   const [isOpen, setIsOpen] = React.useState(false);
 *
 *   useLockScroll(isOpen);
 *
 *   return (
 *     <div>
 *       <button onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
 *       {isOpen && <div>Some content</div>}
 *     </div>
 *   );
 * };
 */
export function useLockScroll(trigger: boolean) {
  useEffect(() => {
    if (trigger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [trigger]);
}
