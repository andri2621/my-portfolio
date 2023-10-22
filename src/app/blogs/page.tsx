import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), 'src/app/tes');

  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Click the link below to navigate to a page generated by{' '}
        <code>next-mdx-remote</code>.
      </p>
      <ul>
        {blogs.map((blog) => {
          return (
            <li key={blog.slug}>
              <Link href={'blogs/' + blog.slug} passHref>
                {blog.meta.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
