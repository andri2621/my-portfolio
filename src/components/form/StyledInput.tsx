import * as React from 'react';

import { cn } from '@/lib/utils';

export default function StyledInput({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      className={cn(
        className,
        'bg-base-100 h-10 w-full rounded-md',
        'border border-gray-300 dark:border-gray-600',
        'focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-0'
      )}
      {...rest}
    />
  );
}
