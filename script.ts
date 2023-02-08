import { PrismaClient, Place } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.place.deleteMany();
  await prisma.place.createMany({
    data: [
      { body: 'test1', latitude: 39.6961687, longitude: 141.1232217 },
      { body: 'test2', latitude: 39.700226, longitude: 141.1388751 },
      { body: 'test3', latitude: 39.6975349, longitude: 141.1440678 },
    ],
  });
  await prisma.task.create({data:
    {title: 'test'}
  })

  // Obtain data within 500 meters from a specified position.
  const longitude = 141.1442678;
  const latitude = 39.6975649;
  const result =
    await prisma.$queryRaw<Place>`SELECT id, body FROM "Place" WHERE ST_DWithin(ST_MakePoint(longitude, latitude), ST_MakePoint(${longitude}, ${latitude})::geography, 500)`;
  console.log(result);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
