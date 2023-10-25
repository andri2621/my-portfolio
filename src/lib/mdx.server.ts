import {
  allAuthors,
  allBlogs,
  allDocs,
  allProjects,
} from 'contentlayer/generated';

import { ContentType } from '@/types/frontmatters';

export async function getSingleFileFromSlug(type: ContentType, slug: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contentTypesMap: Record<ContentType, any[]> = {
    blogs: allBlogs,
    projects: allProjects,
    docs: allDocs,
    authors: allAuthors,
  };

  // array file
  const contentArray = contentTypesMap[type] || [];

  if (!contentArray) {
    return null;
  }

  // return one file
  const contentItem = contentArray.find((item) => item.slugAsParams === slug);
  return contentItem || null;
}

export async function getAllFile(type: ContentType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contentTypesMap: Record<ContentType, any[]> = {
    blogs: allBlogs,
    projects: allProjects,
    docs: allDocs,
    authors: allAuthors,
  };

  // array file
  const contentArray = contentTypesMap[type] || [];

  if (!contentArray) {
    return null;
  }

  // return all files
  return contentArray || null;
}
