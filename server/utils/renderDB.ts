import { parseStringPromise } from 'xml2js';
import prisma from '~/lib/prisma';
import { clearDB } from './clearDB';
import type { TypeRecordDb, TypeNamesTableDb } from '#shared/types/db.types';
import { toCamelCase } from '#shared/utils/toCamelCase.utils';
import { setActiveTable } from './activeTable';
import { Prisma } from '@prisma/client';

let iteration = true;
let isLoadApp = true;
let nameDB: TypeNamesTableDb = 'realty';

export const renderDB = async () => {
  // Очистка таблиц при первой загрузки
  if (isLoadApp) {
    await clearDB('realty');
    await clearDB('realtyTwo');
    isLoadApp = false;
  }

  // Смена таблиц
  if (iteration) {
    nameDB = 'realty';
    iteration = false;
  } else {
    nameDB = 'realtyTwo';
    iteration = true;
  }

  try {
    // Получение и парсинг xml файла
    const xml = await $fetch<XMLHttpRequest>('https://2bishop.ru/xml/yandex/26018_3.xml');

    const dataArr = (await parseStringPromise(xml, {
      trim: true,
      explicitRoot: false,
      explicitArray: false,
      ignoreAttrs: true,
      tagNameProcessors: [
        (name) => {
          return toCamelCase(name);
        },
      ],
    })) as TypeRecordDb;

    // return dataArr.offer;

    // Запись таблицы
    for (const offer of dataArr.offer) {
      await prisma[nameDB].create({
        data: {
          area: offer.area?.value ? +offer.area.value : null,
          balcony: offer.balcony?.length ? offer.balcony : null,
          category: offer.category?.length ? offer.category : null,
          description: offer.description?.length ? offer.description : null,
          image: offer.image,
          internet: offer.internet ? +offer.internet : 0,
          lift: offer.lift ? +offer.lift : 0,
          livingSpace: offer.livingSpace?.value ? +offer.livingSpace.value : null,
          location: offer.location,
          phone: offer.phone ? +offer.phone : 0,
          price: offer.price?.value ? +offer.price.value : null,
          type: offer.type?.length ? offer.type : null,
          url: offer.url?.length ? offer.url : null,
          videoReview: offer.videoReview?.length ? offer.videoReview : null,
        },
      });
    }

    // Очистка таблиц
    if (iteration) {
      clearDB('realty');
      setActiveTable('realtyTwo');
      // console.log('Очистка realty');
    } else {
      clearDB('realtyTwo');
      setActiveTable('realty');
      // console.log('Очистка realtyTwo');
    }

    // console.log('Текущая таблица: ', nameDB);
  } catch (error) {
    return error;
  }
};
