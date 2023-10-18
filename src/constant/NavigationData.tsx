import { IconType } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { FaFileCode, FaPhoneAlt } from 'react-icons/fa';

type NavigationProps = {
  id: number;
  label: string;
  value: string;
  icon: IconType;
  link: string;
};

export const NavigationData: NavigationProps[] = [
  {
    id: 1,
    label: 'Home',
    value: 'home',
    icon: AiFillHome,
    link: '#home',
  },
  {
    id: 2,
    label: 'About',
    value: 'about',
    icon: BiSolidUser,
    link: '#about',
  },
  {
    id: 3,
    label: 'Portfolio',
    value: 'portfolio',
    icon: FaFileCode,
    link: '#portfolio',
  },
  {
    id: 4,
    label: 'Contact',
    value: 'contact',
    icon: FaPhoneAlt,
    link: '#contact',
  },
];
