import prisma from '~/lib/prisma';

/* 
{
    "newFlat": "[\"0\",\"1\"]", // число (если 1, то новостройка, если нет параметра, то вторичное)
    "priceOt": "1",
    "priceDo": "2",
    "rooms": "0",
    "areaOt": "3",
    "areaDo": "4",
    "locationCity": "Ставрополь",
    "locationStreet": "Мира улица",
    "locationArea": "Ленинский"
}
 */

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const table = getActiveTable();

  // Построение запроса
  const newQuery = {};

  //
  const res = await prisma.realty.findMany({
    where: {
      category: 'квартира',
      newFlat: { in: [0, 1] },
      price: {
        gte: 1_000_000,
        lte: 6_500_000,
      },
      rooms: 1,
      area: { gte: 20, lte: 50 },
      AND: [
        // { category: 'квартира' },
        // { newFlat: { in: [0, 1] } },
        /* {
          price: {
            gte: 1_000_000,
            lte: 6_500_000,
          },
        }, */
        // { rooms: 1 },
        // { roomsType: 'студия' },
        // { area: { gte: 20, lte: 50 } },
        {
          location: {
            path: ['localityName'],
            equals: 'Ставрополь',
          },
        },
        {
          location: {
            path: ['subLocalityName'],
            equals: 'Ленинский',
          },
        },
        {
          location: {
            path: ['address'],
            string_starts_with: 'Ленина улица',
          },
        },
      ],
    },
  });

  //
  return res;
});
