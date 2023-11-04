'use client';

import axios from 'axios';
import useSWR from 'swr';

import { contentMetaFlag } from '@/constant/env';

import { ContentMeta } from '@/types/meta';

async function fetcher(url: string) {
  const res = await axios.get(url);
  return res?.data?.data;
}

export default function useAllContentMeta() {
  //#region  //*=========== Get content views and likes ===========
  const {
    data,
    isLoading,
    error: isError,
  } = useSWR<Array<ContentMeta>>(
    contentMetaFlag ? `/api/content` : null,
    fetcher
  );

  // const allBlogsWithViews = blogs.map((blog) => {
  //   const blogMeta = data
  //     ? data.find((item) => item.slug === blog.slugAsParams)
  //     : null;
  //   return {
  //     ...blog,
  //     views: blogMeta ? blogMeta.views : 0,
  //     likes: blogMeta ? blogMeta.likes : 0,
  //     likesByUser: blogMeta ? blogMeta.likesByUser : 0,
  //   };
  // });

  return {
    data,
    isLoading,
    isError,
    // addLike,
  };
}
