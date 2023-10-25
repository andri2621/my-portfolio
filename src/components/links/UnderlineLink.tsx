import * as React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          'animated-underline custom-link inline-flex items-center font-medium no-underline',
          'hover:text-primary',
          'focus-visible:ring-primary focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2',
          'border-b border-dotted border-black hover:border-black/0 dark:border-white dark:hover:border-white/0',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
