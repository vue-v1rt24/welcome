import prisma from '~/lib/prisma';
import { TypeAdvancedFilter } from '~/server/types/pages/kvartirs.types';

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as TypeAdvancedFilter;
  const table = getActiveTable();

  // Построение запроса для отправки в БД
  const resDataTable = await prisma[table].findMany({
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
      buildingName: query.buildingName.length ? query.buildingName : undefined,
      ceilingHeight: query.ceilingHeight.length ? +query.ceilingHeight : undefined,
      bathroomUnit: query.bathroomUnit.length ? query.bathroomUnit : undefined,
      floor: query.floor.length ? +query.floor : undefined,
      renovation: query.renovation.length ? query.renovation : undefined,
      roomsType: query.roomsType.length ? query.roomsType : undefined,
      balcony: query.balcony.length ? query.balcony : undefined,
      buildingSeries: query.buildingSeries.length ? query.buildingSeries : undefined,
      buildingType: query.buildingType.length ? query.buildingType : undefined,
      heatingSupply: query.heatingSupply.length ? query.heatingSupply : undefined,
      parkingType: query.parkingType.length ? query.parkingType : undefined,
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
    city.add(item.location.localityName);
    subCity.add(item.location.subLocalityName);
    address.add(item.location.address.match(/^[^,]+/)[0]);

    if (item.buildingName && item.buildingName !== null) {
      buildingName.add(item.buildingName);
    }

    if (item.ceilingHeight && item.ceilingHeight !== null) {
      ceilingHeight.add(item.ceilingHeight + '');
    }

    if (item.bathroomUnit && item.bathroomUnit !== null) {
      bathroomUnit.add(item.bathroomUnit);
    }

    if (item.floor && item.floor !== null) {
      floor.add(item.floor + '');
    }

    if (item.renovation && item.renovation !== null) {
      renovation.add(item.renovation);
    }

    if (item.roomsType && item.roomsType !== null) {
      roomsType.add(item.roomsType);
    }

    if (item.balcony && item.balcony !== null) {
      balcony.add(item.balcony);
    }

    if (item.buildingSeries && item.buildingSeries !== null) {
      buildingSeries.add(item.buildingSeries);
    }

    if (item.buildingType && item.buildingType !== null) {
      buildingType.add(item.buildingType);
    }

    if (item.heatingSupply && item.heatingSupply !== null) {
      heatingSupply.add(item.heatingSupply);
    }

    if (item.heatingSupply && item.heatingSupply !== null) {
      parkingType.add(item.heatingSupply);
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
