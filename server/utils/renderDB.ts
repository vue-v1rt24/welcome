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

    // console.log(dataArr.offer.length);

    // return dataArr.offer;

    // Запись таблицы
    for (const offer of dataArr.offer) {
      await prisma[nameDB].create({
        data: {
          area: offer.area?.value ? +offer.area.value : null,
          buildingType: offer.buildingType?.length ? offer.buildingType : null,
          buildingName: offer.buildingName?.length ? offer.buildingName : null,
          category: offer.category?.length ? offer.category : null,
          creationDate: offer.creationDate?.length ? offer.creationDate : null,
          lastUpdateDate: offer.lastUpdateDate?.length ? offer.lastUpdateDate : null,
          description: offer.description?.length ? offer.description : null,
          floor: offer.floor ? +offer.floor : null,
          floorsTotal: offer.floorsTotal ? +offer.floorsTotal : null,
          windowView: offer.windowView?.length ? offer.windowView : null,
          parkingType: offer.parkingType?.length ? offer.parkingType : null,
          balcony: offer.balcony?.length ? offer.balcony : null,
          image: offer.image?.length ? offer.image : Prisma.JsonNull,
          location: offer.location ? offer.location : Prisma.JsonNull,
          lotArea: offer.lotArea?.value ? +offer.lotArea.value : null,
          manuallyAdded: offer.manuallyAdded?.length ? +offer.manuallyAdded : 0,
          mortgage: offer.mortgage?.length ? +offer.mortgage : 0,
          payedAdv: offer.payedAdv?.length ? +offer.payedAdv : 0,
          utilitiesIncluded: offer.utilitiesIncluded?.length ? +offer.utilitiesIncluded : 0,
          phone: offer.phone?.length ? +offer.phone : 0,
          internet: offer.internet?.length ? +offer.internet : 0,
          rubbishChute: offer.rubbishChute?.length ? +offer.rubbishChute : 0,
          lift: offer.lift?.length ? +offer.lift : 0,
          price: offer.price?.value ? +offer.price.value : null,
          propertyType: offer.propertyType?.length ? offer.propertyType : null,
          renovation: offer.renovation?.length ? offer.renovation : null,
          type: offer.type?.length ? offer.type : null,
          dealStatus: offer.dealStatus?.length ? offer.dealStatus : null,
          waterSupply: offer.waterSupply?.length && offer.waterSupply === 'да' ? 1 : 0,
          electricitySupply:
            offer.electricitySupply?.length && offer.electricitySupply === 'да' ? 1 : 0,
          gasSupply: offer.gasSupply?.length && offer.gasSupply === 'да' ? 1 : 0,
          heatingSupply: offer.heatingSupply?.length && offer.heatingSupply === 'да' ? 1 : 0,
          lotType: offer.lotType?.length ? offer.lotType : null,
          kitchenSpace: offer.kitchenSpace?.value ? +offer.kitchenSpace.value : null,
          livingSpace: offer.livingSpace?.value ? +offer.livingSpace.value : null,
          newFlat: offer.newFlat ? +offer.newFlat : 0,
          garageType: offer.garageType?.length ? offer.garageType : null,
          purpose: offer.purpose?.length ? offer.purpose : null,
          rooms: offer.rooms?.length ? +offer.rooms : null,
          roomsType: offer.roomsType ? offer.roomsType : null,
          ceilingHeight: offer.ceilingHeight?.length ? +offer.ceilingHeight : null,
          bathroomUnit: offer.bathroomUnit?.length ? offer.bathroomUnit : null,
          videoReview: offer.videoReview?.youtubeVideoReviewUrl
            ? offer.videoReview.youtubeVideoReviewUrl
            : null,
        },
      });
    }

    // Очистка таблиц
    if (iteration) {
      clearDB('realty');
      setActiveTable('realtyTwo');
    } else {
      clearDB('realtyTwo');
      setActiveTable('realty');
    }
  } catch (error) {
    return error;
  }
};
