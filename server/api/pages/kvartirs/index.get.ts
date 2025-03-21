import prisma from '~/lib/prisma';

import type { TypeFrontFilter } from '~/server/types/pages/kvartirs.types';
import { EnumSort } from '~/shared/types/db.types';

// id крайнего запроса (для постраничной навигации)
let cursorId: string | null = null;

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
  // 0 - Студии; 1 - Однокомнатные; 2 - Двухкомнатные; 3 - Трёхкомнатные; 4 - Четырёхкомнатные и более; 5 - Трёх и более; 6 - Свободная планировка;
  if (query.rooms) {
    const roomsNumber = +query.rooms;
    if (roomsNumber === 0) {
      title = 'Квартиры студии';
      renderQueryDB.roomsType = 'студия';
    } else if (roomsNumber === 4) {
      title = 'Четырёхкомнатные и более';
      renderQueryDB.rooms = {
        gte: 4,
        lte: 10,
      };
    } else if (roomsNumber === 5) {
      title = 'Трёх и более';
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

  // Жилой комплекс (ЖК)
  if (query.buildingName) {
    renderQueryDB.buildingName = query.buildingName;
  }

  // Высота потолков
  if (query.ceilingHeight) {
    renderQueryDB.ceilingHeight = +query.ceilingHeight;
  }

  // Санузел
  if (query.bathroomUnit) {
    renderQueryDB.bathroomUnit = query.bathroomUnit;
  }

  // Этаж
  if (query.floor) {
    renderQueryDB.floor = +query.floor;
  }

  // Состояние
  if (query.renovation) {
    renderQueryDB.renovation = query.renovation;
  }

  // Планировка
  if (query.roomsType) {
    renderQueryDB.roomsType = query.roomsType;
  }

  // Балкон, лоджия
  if (query.balcony) {
    renderQueryDB.balcony = query.balcony;
  }

  // Тип дома
  if (query.buildingSeries) {
    renderQueryDB.buildingSeries = query.buildingSeries;
  }

  // Материал стен
  if (query.buildingType) {
    renderQueryDB.buildingType = query.buildingType;
  }

  // Отопление
  if (query.heatingSupply) {
    renderQueryDB.heatingSupply = query.heatingSupply;
  }

  // Парковка
  if (query.parkingType) {
    renderQueryDB.parkingType = query.parkingType;
  }

  // Апартаменты
  if (query.apartments) {
    renderQueryDB.apartments = +query.apartments;
  }
  // /Построение запроса

  // Сортировка
  const renderOrderBy: any = {};

  if (query.sort) {
    if (query.sort === EnumSort.default) {
      renderOrderBy.creationDate = 'desc';
    } else if (query.sort === EnumSort.new) {
      renderOrderBy.creationDate = 'desc';
    } else if (query.sort === EnumSort.deshevle) {
      renderOrderBy.price = 'asc';
    } else if (query.sort === EnumSort.dorozhe) {
      renderOrderBy.price = 'desc';
    }
  }

  // Сброс курсора постраничной навигации
  if (!query.more) {
    cursorId = null;
  }

  // Запрос
  const res = await prisma[table].findMany({
    take: 16,
    skip: cursorId ? 1 : 0,
    cursor: cursorId ? { id: cursorId } : undefined,
    where: renderQueryDB,
    orderBy: query.sort ? renderOrderBy : { creationDate: 'desc' },
    select: {
      id: true,
      image: true,
      price: true,
      rooms: true,
      area: true,
      floor: true,
      floorsTotal: true,
      location: true,
      salesAgent: true,
    },
  });

  // Установка курсора для постраничной навигации
  cursorId = res[15]?.id;
  // console.log(cursorId);

  //
  return {
    title,
    cursorId,
    res,
  };
});
