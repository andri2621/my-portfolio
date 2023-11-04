'use client';

import useContentMeta from '@/hooks/useContentMeta';

const SingleViewCounter = ({ slug }: { slug: string }) => {
  const { views } = useContentMeta(slug, {
    runIncrement: true,
  });

  return <div>{views ?? '---'} views</div>;
};

export default SingleViewCounter;
