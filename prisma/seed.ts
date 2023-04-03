import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const user = await prisma.users.upsert({
    where: { id: 1 },
    update: {},
    create: {
      username: 'testaccount',
      name: 'Test Account',
      emailAddress: 'test@test.com',
      emailVerified: true,
      authToken: 'test',
      session: 'test',
      sessionExpire: new Date(),
      lastLogin: new Date(),
      isActive: true,
    },
  });
  const countries = await prisma.countries.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Philippines',
      countryCode: '+63',
      iso2: 'PHP',
      iso3: 'PH',
    },
  });
  const profile1 = await prisma.profiles.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: 1,
      countryId: 1,
      firstName: 'Juan',
      lastName: 'Dela Cruz',
      displayName: 'JDC',
      emailAddress: 'jdelacruz@gmail.com',
    },
  });

  const post1 = await prisma.articles.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      profileId: 1,
      slug: 'prisma-adds-support-for-mongodb',
      bodyHtml:
        '<p>Support for MongoDB has been one of the most requested features since the initial release of...</p>',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      status: 'draft',
      coverBanner: 'test.png',
      createdBy: 1,
      createdAt: new Date('2023-03-18 00:00:00'),
      updatedBy: 1,
      updatedAt: new Date('2023-03-18 00:00:00'),
    },
  });
  const post2 = await prisma.articles.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      profileId: 1,
      slug: 'whats-new-in-prisma-q1-22',
      bodyHtml:
        '<p>Our engineers have been working hard, issuing new releases with many improvements...</p>',
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      status: 'posted',
      coverBanner: 'test.png',
      createdBy: 1,
      createdAt: new Date('2023-03-18 00:00:00'),
      updatedBy: 1,
      updatedAt: new Date('2023-03-18 00:00:00'),
    },
  });
  console.log({ user, profile1, post1, post2 });
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
