'use client';

import useContentMeta from '@/hooks/useContentMeta';

const SingleViewCounter = ({ slug }: { slug: string }) => {
  const { views } = useContentMeta(slug, {
    runIncrement: true,
  });

  return <div>Total Views: {views}</div>;
};

export default SingleViewCounter;
