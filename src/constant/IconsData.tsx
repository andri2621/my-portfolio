import { IconType } from 'react-icons';
import {
  BiChevronDown as ChevronDown,
  BiChevronUp as ChevronUp,
  BiListUl as List,
  BiLogoAngular as Angular,
  BiLogoGithub as Github,
  BiLogoLinkedinSquare as Linkedin,
  BiLogoReact as React,
  BiLogoRedux as Redux,
  BiLogoSass as Scss,
  BiLogoTailwindCss as Tailwind,
  BiLogoTwitter as Twitter,
  // BiSolidGridAlt as Grid,
  BiTime as Time,
} from 'react-icons/bi';
import { FaCloudRain } from 'react-icons/fa';
import { HiViewGrid as Grid } from 'react-icons/hi';
import { IoClose as CloseX } from 'react-icons/io5';
import { SiPrisma as Prisma } from 'react-icons/si';
import { TbBrandNextjs as Next } from 'react-icons/tb';

type Icons = {
  [key: string]: IconType;
};

export const Icons: Icons = {
  react: React,
  angular: Angular,
  nextjs: Next,
  tailwind: Tailwind,
  redux: Redux,
  scss: Scss,
  prisma: Prisma,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  logo: FaCloudRain,
  time: Time,
  grid: Grid,
  list: List,
  close: CloseX,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
};
