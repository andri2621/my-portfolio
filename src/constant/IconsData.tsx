import { IconType } from 'react-icons';
import {
  BiLogoAngular as Angular,
  BiLogoGithub as Github,
  BiLogoLinkedinSquare as Linkedin,
  BiLogoReact as React,
  BiLogoRedux as Redux,
  BiLogoSass as Scss,
  BiLogoTailwindCss as Tailwind,
  BiLogoTwitter as Twitter,
  BiTime as Time,
} from 'react-icons/bi';
import { FaCloudRain } from 'react-icons/fa';
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
};
