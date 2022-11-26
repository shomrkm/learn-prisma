import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.user.createMany({
    data: [
      { name: 'Shotaro', age: 10, email: 'Shotaro@test1.com', isAdmin: true },
      { name: 'Shotaro', age: 20, email: 'Shotaro@test2.com', isAdmin: false },
      { name: 'Shotaro', age: 30, email: 'Shotaro@test3.com', isAdmin: true },
      { name: 'Hitomi', age: 30, email: 'Hitomi@test1.com', isAdmin: false },
    ],
  });
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: 'Shotaro',
          age: { lt: 25 },
          isAdmin: true,
        },
        {
          email: { contains: 'Hitomi' },
        },
      ],
    },
    select: {
      name: true,
      email: true,
      userPreference: { select: { id: true } },
    },
  });
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
