import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { FaFileCode, FaPhoneAlt } from 'react-icons/fa';

import { FooterLinkProps, NavigationProps } from '@/types/config';

export const siteConfig = {
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://awandri.com',
};

export const NavigationData: NavigationProps[] = [
  {
    id: 1,
    label: 'Home',
    value: 'home',
    icon: AiFillHome,
    link: '/',
  },
  {
    id: 2,
    label: 'Blogs',
    value: 'blogs',
    icon: BiSolidUser,
    link: '/blogs',
  },
  {
    id: 3,
    label: 'Projects',
    value: 'projects',
    icon: FaFileCode,
    link: '/projects',
  },
  {
    id: 4,
    label: 'Docs',
    value: 'docs',
    icon: FaFileCode,
    link: '/docs',
  },
  {
    id: 5,
    label: 'About',
    value: 'about',
    icon: FaPhoneAlt,
    link: '/about',
  },
];

export const footerLink: FooterLinkProps[] = [
  {
    label: 'Source Code',
    name: 'Portfolio Source',
    link: '',
    underConstruction: true,
  },

  {
    label: 'Blogs',
    name: 'Blogs Route',
    link: '/blogs',
    underConstruction: false,
  },

  {
    label: 'Projects',
    name: 'Projects Route',
    link: '/projects',
    underConstruction: false,
  },

  {
    label: 'Docs',
    name: 'Documentation Route',
    link: '/docs',
    underConstruction: false,
  },

  {
    label: 'OG Generator',
    name: 'OG Generator',
    link: 'https://og.awandri.com',
    underConstruction: false,
  },
];

export const socialLink = [
  {
    label: 'Github',
    name: 'github link',
    link: 'https://github.com/andri2621',
    tooltip: 'See my projects on Github!',
  },
  {
    label: 'LinkedIn',
    name: 'linkedin link',
    link: 'https://www.linkedin.com/in/andisetiawan2621/',
    tooltip: 'Find me on LinkedIn!',
  },
  {
    label: 'Twitter',
    name: 'twitter link',
    link: 'https://twitter.com/andri2621',
    tooltip: 'Follow me on Twitter!',
  },
];
