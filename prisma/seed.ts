/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
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

export async function deleteObsoleteData(newSlugs: any) {
  try {
    // Fetch all existing records from the contentMeta table
    const existingRecords = await prisma.contentMeta.findMany();

    // Identify slugs that need to be deleted
    const slugsToDelete = existingRecords
      .map((record) => record.slug)
      .filter((slug) => !newSlugs.includes(slug));

    // Delete records with slugs that are not present in the new set
    await Promise.all(
      slugsToDelete.map(async (slugToDelete) => {
        await prisma.contentMeta.deleteMany({
          where: {
            slug: slugToDelete,
          },
        });
        console.log(`Deleted record with slug: ${slugToDelete}`);
      })
    );
  } catch (error) {
    console.error('Error deleting obsolete data:', error);
  }
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
      console.error(error);
    }
  }

  // Call the function to delete obsolete data
  await deleteObsoleteData(allBlogs.map((blog) => blog.slug));
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
// "build": "contentlayer build && prisma generate && prisma db push && prisma db seed && next build",

// prisma.contentMeta.upsert({
//   where: { slug: blog.slugAsParams },
//   update: {},
//   create: {
//     slug: blog.slugAsParams,
//     createdAt: blog.publishedAt,
//   },
// }),
