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
