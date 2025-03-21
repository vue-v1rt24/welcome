import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  const table = getActiveTable();

  const res = await prisma[table].findMany({
    where: {
      category: 'квартира',
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
