import * as React from 'react';

import { cn } from '@/lib/utils';

export default function InputSearch({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'input'>) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      inputRef.current?.focus();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className={cn('relative')}>
        <input
          className={cn(
            className,
            'pr-24',
            'h-10 w-full rounded-md bg-transparent',
            'border border-gray-300 dark:border-gray-600',
            'focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-0',
            'text-sm'
          )}
          ref={inputRef}
          {...rest}
        />
        <kbd
          className={cn(
            'absolute right-1.5 top-[.6rem]',
            'h-5 rounded px-1.5',
            'border border-gray-300 dark:border-gray-600',
            'pointer-events-none select-none',
            'font-mono text-[10px] font-medium'
          )}
        >
          <span
            className={cn(
              'flex items-center justify-center',
              'text-xs leading-relaxed'
            )}
          >
            Ctrl + K
          </span>
        </kbd>
      </div>
    </>
  );
}
