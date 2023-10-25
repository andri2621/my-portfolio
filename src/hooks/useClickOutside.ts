import * as React from 'react';

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handler();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handler]);
}
