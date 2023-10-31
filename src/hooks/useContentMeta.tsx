'use client';

import axios from 'axios';
import { useEffect, useRef } from 'react';
import useSWR from 'swr';

import { contentMetaFlag, incrementMetaFlag } from '@/constant/env';
import { cacheOnly } from '@/constant/swr';

async function fetcher(url: string) {
  const res = await axios.get(url);
  return res?.data?.data;
}

export default function useContentMeta(
  slug: string,
  { runIncrement = false }: { runIncrement?: boolean } = {}
) {
  const key = `/api/content`;

  //#region  //*=========== Get content cache ===========
  const { data: allContentMeta } = useSWR(
    contentMetaFlag ? key : null,
    fetcher,
    cacheOnly
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _preloadMeta = allContentMeta?.find((meta: any) => meta.slug === slug);
  const preloadMeta = _preloadMeta
    ? {
        contentLikes: _preloadMeta._count.likes,
        contentViews: _preloadMeta._count.views,
      }
    : undefined;
  //#endregion  //*======== Get content cache ===========

  const {
    data,
    error: isError,
    mutate,
  } = useSWR(`${key}?slug=${slug}`, fetcher, { fallbackData: preloadMeta });

  // to only make increment once
  const hasRunIncrementEffect = useRef(false);

  useEffect(() => {
    if (runIncrement && incrementMetaFlag && !hasRunIncrementEffect.current) {
      incrementViews(key, slug).then((fetched) => {
        mutate({
          ...fetched,
        });
      });
      hasRunIncrementEffect.current = true;
    }
  }, [mutate, runIncrement, slug, key]);

  return {
    isLoading: !isError && !data,
    isError,
    views: data?.views,
  };
}

async function incrementViews(key: string, slug: string) {
  const result = await axios
    .post(key, {
      slug: slug,
    })
    .then((res) => {
      return res?.data?.data;
    });

  return result;
}
