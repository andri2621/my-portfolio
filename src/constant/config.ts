import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { FaFileCode, FaPhoneAlt } from 'react-icons/fa';

import { FooterLinkProps, NavigationProps } from '@/types';

export const siteConfig = {
  name: 'Awandri',
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://awandri.com',
  socialLink: {
    github: {
      label: 'Github',
      name: 'github link',
      link: 'https://github.com/andri2621',
      tooltip: 'See my projects on Github!',
    },
    linkedin: {
      label: 'LinkedIn',
      name: 'linkedin link',
      link: 'https://www.linkedin.com/in/andisetiawan2621/',
      tooltip: 'Find me on LinkedIn!',
    },
    twitter: {
      label: 'Twitter',
      name: 'twitter link',
      link: 'https://twitter.com/andri2621',
      tooltip: 'Follow me on Twitter!',
    },
  },
};

export const NavigationData: NavigationProps[] = [
  {
    id: 1,
    label: 'Home',
    value: 'home',
    icon: AiFillHome,
    link: '/',
    isUnderConstruction: false,
  },
  {
    id: 2,
    label: 'Blogs',
    value: 'blogs',
    icon: BiSolidUser,
    link: '/blogs',
    isUnderConstruction: false,
  },
  {
    id: 3,
    label: 'Projects',
    value: 'projects',
    icon: FaFileCode,
    link: '/projects',
    isUnderConstruction: false,
  },
  {
    id: 4,
    label: 'Docs',
    value: 'docs',
    icon: FaFileCode,
    link: '/docs',
    isUnderConstruction: true,
  },
  {
    id: 5,
    label: 'About',
    value: 'about',
    icon: FaPhoneAlt,
    link: '/about',
    isUnderConstruction: false,
  },
  {
    id: 6,
    label: 'Guestbook',
    value: 'guestbook',
    icon: FaPhoneAlt,
    link: '/guestbook',
    isUnderConstruction: false,
  },
];

export const footerLink: FooterLinkProps[] = [
  {
    label: 'Source Code',
    name: 'Portfolio Source',
    link: 'https://github.com/andri2621/my-portfolio',
    underConstruction: false,
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

export const FEskills = [
  {
    label: 'NextJs',
    tooltip: 'Next JS',
  },
  {
    label: 'React',
    tooltip: 'React JS',
  },
  {
    label: 'Typescript',
    tooltip: 'Typescript',
  },
  {
    label: 'Redux',
    tooltip: 'Redux',
  },
  {
    label: 'mui',
    tooltip: 'MaterialUI',
  },
  {
    label: 'Bootstrap',
    tooltip: 'Bootstrap',
  },
  {
    label: 'Tailwind',
    tooltip: 'Tailwind',
  },
];

export const BEskills = [
  {
    label: 'Nodejs',
    tooltip: 'Node JS',
  },
  {
    label: 'Postgresql',
    tooltip: 'PostgreSQL',
  },
  {
    label: 'MongoDB',
    tooltip: 'MongoDB',
  },
  {
    label: 'Firebase',
    tooltip: 'Firebase',
  },
  {
    label: 'Prisma',
    tooltip: 'Prisma',
  },
];

export const currentLearn = [
  {
    label: 'Angular',
    tooltip: 'Learn Angular from Udemy course.',
    course: 'Udemy',
  },
];

export const POSTS_PER_PAGE = 6;
