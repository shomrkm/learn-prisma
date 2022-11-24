import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Hitomi',
  //     email: 'Hitomi@test.com',
  //     age: 33,
  //     isAdmin: false,
  //     userPreference: {
  //       create: {
  //         emailUpdates: false,
  //       },
  //     },
  //   },
  //   include: {
  //     userPreference: true,
  //   },
  // });

  const users = await prisma.user.findMany({
    where: { name: 'Shotaro' },
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
