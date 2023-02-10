import { PrismaClient, Place } from '@prisma/client';
import { create } from 'domain';
import { title } from 'process';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.task.deleteMany();
  await prisma.place.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: 'Shotaro Murakami',
      email: 'shotaro@test.com',
      createTask: {
        create: [
          {title: 'Shotaro\'s Task 1'},
          {title: 'Shotaro\'s Task 2'},
        ]
      }
    },
  });
  await prisma.task.create({ data: { title: 'Task with no user' } });

  const tasks = await prisma.task.findMany({ 
    where: {
      userId: user.id,
    },
    select: {
      title: true, 
      user: true
    },
  });
  console.log(tasks)

  // // Obtain data within 500 meters from a specified position.
  // const longitude = 141.1442678;
  // const latitude = 39.6975649;
  // const result =
  //   await prisma.$queryRaw<Place>`SELECT id, body FROM "Place" WHERE ST_DWithin(ST_MakePoint(longitude, latitude), ST_MakePoint(${longitude}, ${latitude})::geography, 500)`;
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
