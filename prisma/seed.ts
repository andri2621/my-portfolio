import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const responses = await prisma.contentMeta.upsert({
    where: { slug: 'weekend' },
    update: {},
    create: {
      slug: 'weekend',
    },
  });

  // eslint-disable-next-line no-console
  console.log(responses);
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
