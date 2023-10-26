import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Icons } from '@/constant/IconsData';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getIcon(iconName: string) {
  const Icon = Icons[iconName.toLowerCase()];
  if (Icon) {
    return Icon;
  } else {
    return null;
  }
}
