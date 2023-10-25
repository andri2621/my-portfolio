import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const MdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
      () =>
        rehypePrettyCode({
          theme: 'css-variables',
        }),
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['hash-anchor'],
          },
        },
      ],
    ],
  },
};
