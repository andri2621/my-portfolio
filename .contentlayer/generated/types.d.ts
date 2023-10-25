// NOTE This file is auto-generated by Contentlayer

import type {
  Markdown,
  MDX,
  ImageFieldData,
  IsoDateTimeString,
} from 'contentlayer/core';
import * as Local from 'contentlayer/source-files';

export { isType } from 'contentlayer/client';

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString };

/** Document types */
export type Authors = {
  /** File path relative to `contentDirPath` */
  _id: string;
  _raw: Local.RawDocumentData;
  type: 'Authors';
  title: string;
  description?: string | undefined;
  avatar: string;
  twitter: string;
  /** MDX file body */
  body: MDX;
  slug: string;
  slugAsParams: string;
  readingTime: string;
  wordCount: number;
};

export type Blogs = {
  /** File path relative to `contentDirPath` */
  _id: string;
  _raw: Local.RawDocumentData;
  type: 'Blogs';
  title: string;
  description?: string | undefined;
  publishedAt: IsoDateTimeString;
  lastUpdated?: IsoDateTimeString | undefined;
  isPublished: boolean;
  banner: string;
  authors: string[];
  /** MDX file body */
  body: MDX;
  slug: string;
  slugAsParams: string;
  readingTime: string;
  wordCount: number;
};

export type Docs = {
  /** File path relative to `contentDirPath` */
  _id: string;
  _raw: Local.RawDocumentData;
  type: 'Docs';
  title: string;
  description?: string | undefined;
  published: boolean;
  /** MDX file body */
  body: MDX;
  slug: string;
  slugAsParams: string;
  readingTime: string;
  wordCount: number;
};

export type Projects = {
  /** File path relative to `contentDirPath` */
  _id: string;
  _raw: Local.RawDocumentData;
  type: 'Projects';
  title: string;
  description?: string | undefined;
  /** MDX file body */
  body: MDX;
  slug: string;
  slugAsParams: string;
  readingTime: string;
  wordCount: number;
};

/** Nested types */

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes;
export type AllTypeNames = DocumentTypeNames | NestedTypeNames;

export type DocumentTypes = Authors | Blogs | Docs | Projects;
export type DocumentTypeNames = 'Authors' | 'Blogs' | 'Docs' | 'Projects';

export type NestedTypes = never;
export type NestedTypeNames = never;

export type DataExports = {
  allDocuments: DocumentTypes[];
  allProjects: Projects[];
  allDocs: Docs[];
  allBlogs: Blogs[];
  allAuthors: Authors[];
};

export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes;
  documentTypeMap: DocumentTypeMap;
  documentTypeNames: DocumentTypeNames;
  nestedTypes: NestedTypes;
  nestedTypeMap: NestedTypeMap;
  nestedTypeNames: NestedTypeNames;
  allTypeNames: AllTypeNames;
  dataExports: DataExports;
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Authors: Authors;
  Blogs: Blogs;
  Docs: Docs;
  Projects: Projects;
};

export type NestedTypeMap = {};
