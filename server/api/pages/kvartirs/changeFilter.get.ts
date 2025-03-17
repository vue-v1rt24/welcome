import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const table = getActiveTable();

  const resDataTable = await prisma.realty.findMany({
    where: {
      category: 'квартира',
    },
    select: {
      location: true,
      buildingName: true,
      ceilingHeight: true,
      bathroomUnit: true,
      floor: true,
      renovation: true,
      roomsType: true,
      balcony: true,
      buildingSeries: true,
      buildingType: true,
      heatingSupply: true,
      parkingType: true,
    },
  });

  //
  const city = new Set<string>(); // Город
  const subCity = new Set<string>(); // Район
  const address = new Set<string>(); // Улица
  const buildingName = new Set<string>(); // ЖК
  const ceilingHeight = new Set<string>(); // Высота потолков
  const bathroomUnit = new Set<string>(); // Санузел
  const floor = new Set<string>(); // Этаж
  const renovation = new Set<string>(); // Состояние
  const roomsType = new Set<string>(); // Планировка
  const balcony = new Set<string>(); // Балкон, лоджия
  const buildingSeries = new Set<string>(); // Тип дома
  const buildingType = new Set<string>(); // Материал стен
  const heatingSupply = new Set<string>(); // Отопление
  const parkingType = new Set<string>(); // Парковка

  for (const item of resDataTable) {
    if (item.location?.localityName) {
      city.add(item.location.localityName);
    }

    if (item.location?.subLocalityName) {
      subCity.add(item.location.subLocalityName);
    }

    if (item.location?.address) {
      address.add(item.location.address.match(/^[^,]+/)[0]);
    }

    if (item.buildingName) {
      buildingName.add(item.buildingName);
    }

    if (item.ceilingHeight) {
      ceilingHeight.add(item.ceilingHeight + '');
    }

    if (item.bathroomUnit) {
      bathroomUnit.add(item.bathroomUnit);
    }

    if (item.floor) {
      floor.add(item.floor + '');
    }

    if (item.renovation) {
      renovation.add(item.renovation);
    }

    if (item.roomsType) {
      roomsType.add(item.roomsType);
    }

    if (item.balcony) {
      balcony.add(item.balcony);
    }

    if (item.buildingSeries) {
      buildingSeries.add(item.buildingSeries);
    }

    if (item.buildingType) {
      buildingType.add(item.buildingType);
    }

    if (item.heatingSupply) {
      heatingSupply.add(item.heatingSupply);
    }

    if (item.parkingType) {
      parkingType.add(item.parkingType);
    }
  }

  //
  return {
    city: [...city],
    subCity: [...subCity],
    address: [...address],
    buildingName: [...buildingName],
    ceilingHeight: [...ceilingHeight],
    bathroomUnit: [...bathroomUnit],
    floor: [...floor],
    renovation: [...renovation],
    roomsType: [...roomsType],
    balcony: [...balcony],
    buildingSeries: [...buildingSeries],
    buildingType: [...buildingType],
    heatingSupply: [...heatingSupply],
    parkingType: [...parkingType],
  };
});
