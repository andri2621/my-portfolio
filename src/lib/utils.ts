import clsx, { ClassValue } from 'clsx';
import { allBlogs, allProjects, Blog } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { twMerge } from 'tailwind-merge';

import { Icons } from '@/constant/IconsData';

import { ContentMeta } from '@/types/meta';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRemoteURL(source: any): boolean {
  return typeof source === 'string';
}

export function getAllBlogs() {
  const blogs = allBlogs
    .filter((blog) => blog.isPublished === true)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });

  return blogs ?? [];
}

export function getAllProjects() {
  const projects = allProjects
    .filter((project) => project.isPublished === true)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });

  return projects ?? [];
}

export function getAllBlogWithViews(blogs: Blog[], meta: ContentMeta[]) {
  const sortedBlogsWithView = blogs.map((blog) => {
    const blogMeta = meta
      ? meta.find((item) => item.slug === blog.slugAsParams)
      : null;
    return {
      ...blog,
      views: blogMeta ? blogMeta.views : 0,
      likes: blogMeta ? blogMeta.likes : 0,
      likesByUser: blogMeta ? blogMeta.likesByUser : 0,
    };
  });
  return sortedBlogsWithView;
}
