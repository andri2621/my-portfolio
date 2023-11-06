import { getFromLocalStorage } from '@/lib/utils';

export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

/**
 * Show command service on contents
 * @see GiscusComment.tsx
 */
export const commentFlag =
  isProd || process.env.NEXT_PUBLIC_FLAG_COMMENT === 'true';

/**
 * Get content meta from the database
 * @see useContentMeta.tsx
 */
export const contentMetaFlag =
  // isProd || process.env.NEXT_PUBLIC_FLAG_CONTENT_META === 'true';
  // process.env.NEXT_PUBLIC_FLAG_CONTENT_META === 'true';
  true;

/**
 * Increment content views
 * @see useContentMeta.tsx
 */
export const incrementMetaFlag =
  // isProd && getFromLocalStorage('incrementMetaFlag') !== 'false';
  getFromLocalStorage('incrementMetaFlag') !== 'false';
