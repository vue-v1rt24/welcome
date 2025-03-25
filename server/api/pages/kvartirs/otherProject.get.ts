import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  const table = getActiveTable();

  // Запрос
  const res = await prisma[table].findMany({
    take: 16,
    select: {
      id: true,
      image: true,
      price: true,
      rooms: true,
      area: true,
      floor: true,
      floorsTotal: true,
      location: true,
    },
  });

  //
  return res;
});
