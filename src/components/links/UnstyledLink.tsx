import Link, { LinkProps } from 'next/link';
import * as React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import { cn } from '@/lib/utils';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
  arrow?: boolean;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  (
    {
      children,
      href,
      openNewTab,
      className,
      nextLinkProps,
      arrow = true,
      ...rest
    },
    ref
  ) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          className={className}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={cn('cursor-newtab', 'inline-flex items-center', className)}
      >
        <div>{children}</div>
        {arrow && <GoArrowUpRight size={12} />}
      </Link>
    );
  }
);

export default UnstyledLink;
