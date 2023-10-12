import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faContactBook,
  faFileCircleCheck,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

interface NavigationProps {
  id: number;
  label: string;
  value: string;
  icon: IconDefinition;
  link: string;
}

export const NavigationData: NavigationProps[] = [
  {
    id: 1,
    label: 'Home',
    value: 'home',
    icon: faHouse,
    link: '#home',
  },
  {
    id: 2,
    label: 'About',
    value: 'about',
    icon: faUser,
    link: '#about',
  },
  {
    id: 3,
    label: 'Portfolio',
    value: 'portfolio',
    icon: faFileCircleCheck,
    link: '#portfolio',
  },
  {
    id: 4,
    label: 'Contact',
    value: 'contact',
    icon: faContactBook,
    link: '#contact',
  },
];
