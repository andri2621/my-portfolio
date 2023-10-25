import React, { ReactNode } from 'react';
import { Link as CustomScroll } from 'react-scroll';

type LinkProps = {
  to: string;
  href: string;
  children: ReactNode;
  smooth?: boolean;
  activeClass?: string;
  spy?: boolean;
  hashSpy?: boolean;
  offset?: number;
  className?: string;
  onSetActive?: (to: string) => void;
};

const DefaultLinkProps: LinkProps = {
  to: '',
  href: '',
  children: '',
  smooth: true,
  spy: true,
  offset: 0,
  hashSpy: true,
};

const ReactScroll: React.FC<LinkProps> = (props) => {
  const mergedProps = { ...DefaultLinkProps, ...props };

  // Handle asynchronous rendering and return a Promise if necessary
  if (typeof window !== 'undefined') {
    return <CustomScroll {...mergedProps}>{props.children}</CustomScroll>;
  } else {
    return <></>; // Return an empty fragment when rendering on the server side
  }
};

export default ReactScroll;
