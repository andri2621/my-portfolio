import { promises, readFileSync } from 'fs';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import CustomImage from '@/components/CustomImage';
import CustomLink from '@/components/links/CustomLink';

import { ContentType, PickFrontmatter } from '@/types/frontmatters';

export async function getFileBySlug(type: ContentType, slug: string) {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'content', type, `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(
        join(process.cwd(), 'src', 'content', `${slug}.mdx`),
        'utf8'
      );

  const rawMDX = source;

  if (!rawMDX) return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    publishedAt: string;
    tags: string[];
  }>({
    source: rawMDX,
    components: {
      CustomLink,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          // rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            // {
            //   // behavior: 'wrap',
            //   properties: {
            //     className: ['hash-anchor'],
            //   },
            // },
          ],
        ],
      },
    },
  });

  const blogPostObj = {
    meta: {
      title: frontmatter.title,
      publishedAt: frontmatter.publishedAt,
      tags: frontmatter.tags,
    },
    content,
    rawMDX,
  };

  return blogPostObj;
}

const getFileList = async (dirName: string) => {
  let files: string[] = [];
  const items = await promises.readdir(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...(await getFileList(`${dirName}/${item.name}`))];
    } else {
      files.push(`${dirName}/${item.name}`);
    }
  }

  return files;
};

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = await getFileList(join(process.cwd(), 'src', 'content', type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, absolutePath) => {
    const source = readFileSync(absolutePath, 'utf8');
    const { data } = matter(source);

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: absolutePath
          .replace(join(process.cwd(), 'src', 'content', type) + '/', '')
          .replace('.mdx', ''),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}

export async function tesGetData(type: ContentType, slug: string) {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'content', type, `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(
        join(process.cwd(), 'src', 'content', `${type}.mdx`),
        'utf8'
      );

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        // rehypeHighlight,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ],
    },
    scope: data,
  });

  return {
    content: mdxSource,
    meta: data,
  };
}

export async function getPostByName(
  type: ContentType,
  slug: string
): Promise<BlogPost | undefined> {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'content', type, `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(
        join(process.cwd(), 'src', 'content', `${type}.mdx`),
        'utf8'
      );

  if (!source) return undefined;

  const rawMDX = source;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    publishedAt: string;
    tags: string[];
  }>({
    source: rawMDX,
    components: {
      CustomLink,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          // rehypeHighlight,
          rehypeSlug,
          () =>
            rehypePrettyCode({
              theme: 'github-dark',
            }),
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['hash-anchor'],
              },
            },
          ],
        ],
        remarkPlugins: [remarkGfm],
        format: 'mdx',
      },
    },
  });

  const blogPostObj = {
    meta: {
      title: frontmatter.title,
      publishedAt: frontmatter.publishedAt,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
}

export const loadBlogPost = (slug: string) => {
  const rawContent = readFile('blogs', slug);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
};

function readFile(type: ContentType, slug: string) {
  const file = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'content', type, `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(
        join(process.cwd(), 'src', 'content', `${type}.mdx`),
        'utf8'
      );

  return file;
}
