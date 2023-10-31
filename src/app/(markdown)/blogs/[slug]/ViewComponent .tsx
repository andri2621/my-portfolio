'use client';

import useContentMeta from '@/hooks/useContentMeta';

const ViewComponent = ({ slug }: { slug: string }) => {
  const { views, isError } = useContentMeta(slug, {
    runIncrement: true,
  });

  if (isError) return null;

  return <div>Total Views: {views}</div>;
};

export default ViewComponent;
