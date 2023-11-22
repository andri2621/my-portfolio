import React from 'react';
import { Link as CustomScroll } from 'react-scroll';

type LinkProps = {
  to: string;
  href: string;
  children: React.ReactNode;
  smooth?: boolean;
  activeClass?: string;
  spy?: boolean;
  hashSpy?: boolean;
  offset?: number;
  spyThrottle?: number;
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
  return <CustomScroll {...mergedProps}>{props.children}</CustomScroll>;
};

export default ReactScroll;
