import prisma from '~/lib/prisma';

import { TypeFrontFilter } from '~/server/types/pages/kvartirs.types';

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as TypeFrontFilter;
  const table = getActiveTable();
  let title = 'Квартиры';

  // Построение запроса для отправки в БД
  const renderQueryDB: any = {};

  // Новостройки или вторичное
  if (query.newFlat) {
    const arrNewFlat = JSON.parse(query.newFlat).map((item: string) => +item);
    renderQueryDB.newFlat = { in: arrNewFlat };
  }

  // Стоимость
  if (query.priceOt || query.priceDo) {
    renderQueryDB.price = {
      gte: query.priceOt ? +query.priceOt : undefined,
      lte: query.priceDo ? +query.priceDo : undefined,
    };
  }

  // Тип квартиры (студия, однокомнатная, двухкомнатная и т.д.)
  // 0 - студия; 1 - однокомнатные; 2 - двухкомнатные; 3 - трёхкомнатные; 4 - четырёхкомнатные и более; 5 - трёхкомнатные и более; 6 - свободная планировка
  if (query.rooms) {
    const roomsNumber = +query.rooms;
    if (roomsNumber === 0) {
      title = 'Студии';
      renderQueryDB.roomsType = 'студия';
    } else if (roomsNumber === 4) {
      title = 'Четырёхкомнатные и более';
      renderQueryDB.rooms = {
        gte: 4,
        lte: 10,
      };
    } else if (roomsNumber === 5) {
      title = 'Трёхкомнатные и более';
      renderQueryDB.rooms = {
        gte: 3,
        lte: 10,
      };
    } else if (roomsNumber === 6) {
      title = 'Свободная планировка';
      renderQueryDB.roomsType = 'свободная';
    } else {
      title =
        roomsNumber === 1 ? 'Однокомнатные' : roomsNumber === 2 ? 'Двухкомнатные' : 'Трёхкомнатные';
      renderQueryDB.rooms = roomsNumber;
    }
  }

  // Площадь
  if (query.areaOt || query.areaDo) {
    renderQueryDB.area = {
      gte: query.areaOt ? +query.areaOt : undefined,
      lte: query.areaDo ? +query.areaDo : undefined,
    };
  }

  // Город, район, улица
  if (query.locationCity || query.locationArea || query.locationStreet) {
    renderQueryDB.AND = [];

    if (query.locationCity) {
      renderQueryDB.AND.push({
        location: {
          path: ['localityName'],
          equals: query.locationCity,
        },
      });
    }

    if (query.locationArea) {
      renderQueryDB.AND.push({
        location: {
          path: ['subLocalityName'],
          equals: query.locationArea,
        },
      });
    }

    if (query.locationStreet) {
      renderQueryDB.AND.push({
        location: {
          path: ['address'],
          string_starts_with: query.locationStreet,
        },
      });
    }
  }
  // /Построение запроса

  // Запрос
  const res = await prisma.realty.findMany({
    where: renderQueryDB,
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
    skip: 0,
    take: 16,
  });

  //
  return {
    title,
    res,
  };
});
