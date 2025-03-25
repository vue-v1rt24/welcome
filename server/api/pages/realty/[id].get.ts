import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const table = getActiveTable();

  // Запрос
  const res = await prisma[table].findMany({
    where: {
      id,
    },
    select: {
      rooms: true,
      image: true,
      location: true,
      description: true,
      area: true,
      renovation: true,
      builtYear: true,
      floor: true,
      floorsTotal: true,
      buildingType: true,
      balcony: true,
      buildingSeries: true,
      price: true,
      salesAgent: true,
    },
  });

  //
  return res;
});
