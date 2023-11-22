'use client';

import * as React from 'react';

import useScrollSpy from '@/hooks/useScrollSpy';

import TOCLink from '@/components/links/TOCLink';

type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

export default function TableOfContents() {
  const [toc, setToc] = React.useState<HeadingScrollSpy>();

  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, []);

  const activeSection = useScrollSpy();

  return (
    <div
      id='toc-container'
      className='hidden max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block'
    >
      {toc?.length ? (
        <>
          <h3 className='text-gray-900 dark:text-gray-100 md:text-xl'>
            Table of Contents
          </h3>
          <div className='mt-4 flex flex-col space-y-2 text-sm'>
            {toc.map(({ id, level, text }) => (
              <TOCLink
                id={id}
                key={id}
                activeSection={activeSection}
                level={level}
                minLevel={minLevel}
                text={text}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
