import { useEffect, useState } from 'react';
import { VisuallyHiddenPropsType } from './VisuallyHidden.type';
import { Span } from './VisuallyHidden.styled';

function VisuallyHidden({ children, ...delegated }: VisuallyHiddenPropsType) {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <Span data-testid="VisuallyHidden" {...delegated}>
      {children}
    </Span>
  );
}
export default VisuallyHidden;
