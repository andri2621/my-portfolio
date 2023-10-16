import Link, { LinkProps } from 'next/link';
import React from 'react';
import { ScrollLink } from 'react-scroll';

type UnstyledLinkProps = {
  to: string;
  href: string;
  children: React.ReactNode;
  smooth: boolean;
  activeClass?: string;
  spy?: boolean;
  hashSpy?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const CustomLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, className, nextLinkProps, ...rest }, ref) => {
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
);

const ScrollableLink = ScrollLink(CustomLink);

export default ScrollableLink;
