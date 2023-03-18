import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.articles.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      profileId: 1,
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      status: 'draft',
      coverBanner: 'test.png',
      createdBy: 1,
      createdAt: '2023-03-18 00:00:00',
      updatedBy: 1,
      updatedAt: '2023-03-18 00:00:00',
    },
  });

  const post2 = await prisma.articles.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      profileId: 1,
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      status: 'posted',
      coverBanner: 'test.png',
      createdBy: 1,
      createdAt: '2023-03-18 00:00:00',
      updatedBy: 1,
      updatedAt: '2023-03-18 00:00:00',
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });
