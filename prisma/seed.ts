import { PrismaClient } from '@prisma/client';
import { promises } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

const getFileList = async (dirName: string) => {
  const files: string[] = [];
  const items = await promises.readdir(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files.push(...(await getFileList(join(dirName, item.name))));
    } else {
      files.push(join(dirName, item.name));
    }
  }

  return files;
};

async function getAllFileSlug() {
  const filePaths = await getFileList(
    join(process.cwd(), 'src', 'content', 'blogs')
  );

  const allBlogSlug = filePaths.map((path) => {
    const slug = path
      .replace(join(process.cwd(), 'src', 'content', 'blogs') + '/', '')
      .replace('.mdx', '')
      .split('/');
    return { slug: slug[0] };
  });

  return allBlogSlug;
}

async function main() {
  const allBlogs = await getAllFileSlug();

  for (const blog of allBlogs) {
    try {
      await prisma.contentMeta.upsert({
        where: { slug: blog.slug },
        update: {},
        create: {
          slug: blog.slug,
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// npx prisma db seed
// prisma generate && prisma db push && prisma db seed
