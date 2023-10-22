/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import path from 'path';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/app/tes'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join('src/app/tes', slug + '.mdx'),
    'utf8'
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    content,
    slug,
  };
}

export default function BlogPage({ params }: any) {
  const props = getPost(params);

  return (
    <div className='layout relative py-24'>
      <Link href='/blogs' legacyBehavior className='fixed left-0 top-0'>
        <a>👈 Go back</a>
      </Link>
      <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate  mx-auto'>
        <h1>{props.frontMatter.title}</h1>
        <MDXRemote source={props.content}></MDXRemote>
      </article>
    </div>
  );
}
