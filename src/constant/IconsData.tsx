import { IconType } from 'react-icons';
import {
  BiChevronDown as ChevronDown,
  BiChevronUp as ChevronUp,
  BiListUl as List,
  BiLogoAngular as Angular,
  BiLogoFirebase as Firebase,
  BiLogoGithub as Github,
  BiLogoLinkedinSquare as Linkedin,
  BiLogoMongodb as Mongodb,
  BiLogoNodejs as Nodejs,
  BiLogoPostgresql as Postgresql,
  BiLogoReact as React,
  BiLogoRedux as Redux,
  BiLogoSass as Scss,
  BiLogoTailwindCss as Tailwind,
  BiLogoTwitter as Twitter,
  BiLogoTypescript as Typescript,
  BiTime as Time,
} from 'react-icons/bi';
import { BsEye as Views } from 'react-icons/bs';
import { FaBootstrap as Bootstrap, FaCloudRain } from 'react-icons/fa';
import { HiViewGrid as Grid } from 'react-icons/hi';
import { IoClose as CloseX } from 'react-icons/io5';
import { LuConstruction as UnderConstruction } from 'react-icons/lu';
import { SiMui as MaterialUI, SiPrisma as Prisma } from 'react-icons/si';
import { TbBrandNextjs as Next } from 'react-icons/tb';

type Icons = {
  [key: string]: IconType;
};

export const Icons: Icons = {
  //FRONTEND
  react: React,
  angular: Angular,
  nextjs: Next,
  tailwind: Tailwind,
  bootstrap: Bootstrap,
  redux: Redux,
  scss: Scss,
  mui: MaterialUI,
  typescript: Typescript,
  //BACKEND
  nodejs: Nodejs,
  postgresql: Postgresql,
  mongodb: Mongodb,
  firebase: Firebase,
  //ORM
  prisma: Prisma,
  //SOCIAL
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  //COMMON USE
  logo: FaCloudRain,
  time: Time,
  grid: Grid,
  list: List,
  close: CloseX,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  views: Views,
  underConstruction: UnderConstruction,
};
