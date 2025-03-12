type TypeBoolean = '0' | '1';
type TypeBooleanYesNo = 'да' | 'нет';

//
export type TypeDB = {
  id?: string;
  area?: { unit: string; value: string }; // value число (общая площадь)
  buildingType?: string; // Тип здания
  buildingName?: string; // Название ЖК
  category?: string; // категория
  creationDate?: string; // дата (Дата создания)
  lastUpdateDate?: string; // дата (обновление записи)
  description?: string; // Описание
  floor?: string; // число (этаж)
  floorsTotal?: string; // число (общее количество этажей)
  windowView?: string; // вид из окна
  parkingType?: string; // тип парковки
  balcony?: string; // строка
  image?: string[]; // Изображения
  location?: {
    address?: string;
    country?: string;
    latitude?: string;
    localityName?: string;
    longitude?: string;
    region?: string;
    subLocalityName?: string;
  };
  lotArea?: { unit: string; value: string }; // value число (площадь участка)
  manuallyAdded?: TypeBoolean; // строка "0" или "1" (добавлено вручную)
  mortgage?: TypeBoolean; // строка "0" или "1" (ипотека)
  payedAdv?: TypeBoolean; // строка "0" или "1" (Оплаченный платеж)
  utilitiesIncluded?: TypeBoolean; // строка "0" или "1" (коммунальные услуги включены в стоимость)
  phone?: TypeBoolean; // строка "0" или "1" (наличие телефона)
  internet?: TypeBoolean; // строка "0" или "1" (интернет)
  rubbishChute?: TypeBoolean; // строка "0" или "1" (мусоропровод)
  lift?: TypeBoolean; // строка "0" или "1" (лифт)
  price?: { currency?: string; value?: string }; // value число (стоимость жилья или помещения)
  propertyType?: string; // (тип недвижимости)
  renovation?: string; // ремонт (к примеру косметический)
  type?: string;
  dealStatus?: string; // статус сделки
  waterSupply?: TypeBooleanYesNo; // строка "да" или "нет" (водоснабжение)
  electricitySupply?: TypeBooleanYesNo; // строка "да" или "нет" (Электроснабжение)
  gasSupply?: TypeBooleanYesNo; // строка "да" или "нет" (Снабжение газом)
  heatingSupply?: TypeBooleanYesNo; // строка "да" или "нет" (Теплоснабжение)
  lotType?: string; // тип лота
  kitchenSpace?: { unit: string; value: string }; // value число (Кухонное пространство)
  livingSpace?: { unit: string; value: string }; // value число (Жилое пространство)
  newFlat?: string; // число (если 1, то новостройка, если нет параметра, то вторичное)
  garageType?: string; // Тип гаража
  purpose?: string; // цель
  rooms?: string; // число (количество комнат)
  roomsType?: string; // строка (тип квартиры: студия, распашонка, изолированная, смежно-изолированная, 2-х уровневая и др.)
  ceilingHeight?: string; // число (высота потолка)
  bathroomUnit?: string; // число или строка (ванная комната)
  videoReview?: { onlineShow?: TypeBoolean; youtubeVideoReviewUrl?: string }; // onlineShow строка "0" или "1", youtubeVideoReviewUrl ссылка на видео /  (Видео обзор)
};

//
export type TypeRecordDb = {
  offer: TypeDB[];
};

// Название таблиц
export type TypeNamesTableDb = 'realty' | 'realtyTwo';

export enum EnumTableNames {
  realty = 'realty',
  realtyTwo = 'realtyTwo',
}
