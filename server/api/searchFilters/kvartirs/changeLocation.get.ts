import prisma from '~/lib/prisma';

type TypeQuery = {
  localityName: string;
  subLocalityName: string;
  address: string;
};

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as TypeQuery;
  const table = getActiveTable();

  const res = await prisma[table].findMany({
    where: {
      category: 'квартира',
      AND: [
        {
          location: {
            path: ['localityName'],
            string_contains: query.localityName,
          },
        },
        {
          location: {
            path: ['subLocalityName'],
            string_contains: query.subLocalityName,
          },
        },
        {
          location: {
            path: ['address'],
            string_starts_with: query.address,
          },
        },
      ],
    },
    select: {
      location: true,
    },
  });

  //
  const city = new Set<string>();
  const subCity = new Set<string>();
  const address = new Set<string>();

  for (const { location } of res) {
    city.add(location.localityName);
    subCity.add(location.subLocalityName);
    address.add(location.address.match(/^[^,]+/)[0]);
  }

  //
  return {
    city: [...city],
    subCity: [...subCity],
    address: [...address],
  };
});
