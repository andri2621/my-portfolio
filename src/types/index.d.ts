import { IconType } from 'react-icons';

export type NavigationProps = {
  id: number;
  label: string;
  value: string;
  icon: IconType;
  link: string;
};

export type FooterLinkProps = {
  label: string;
  name: string;
  link: string;
  underConstruction?: boolean;
};

// Config from shadcn repo

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: IconType;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  // mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
