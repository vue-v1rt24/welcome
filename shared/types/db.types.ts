type TypeBoolean = '0' | '1';
type TypeBooleanYesNo = 'да' | 'нет';

//
export type TypeDB = {
  id?: string; // *
  area?: { unit: string; value: string }; // Общая площадь / value число *
  apartments?: string; // Апартаменты / число 1 или 0 *
  buildingSeries?: string; // Тип дома / строка *
  buildingType?: string; // Материал стен / строка (кирпичный, панельный, блочный и т.д.) *
  buildingName?: string; // Жилой комплекс / строка *
  builtYear?: string; // Год постройки / число (2025) *
  category?: string; // категория / Тип строения *
  creationDate?: string; // дата (Дата создания)
  lastUpdateDate?: string; // дата (обновление записи)
  description?: string; // Описание
  floor?: string; // Этаж / число *
  floorsTotal?: string; // Этажность / число (общее количество этажей) *
  windowView?: string; // вид из окна
  parkingType?: string; // Парковка *
  balcony?: string; // Балкон, лоджия / строка *
  image?: string[]; // Изображения *
  // *
  location?: {
    address?: string; // Улица, Дом
    country?: string; // Страна
    latitude?: string;
    localityName?: string; // Город
    longitude?: string;
    region?: string;
    subLocalityName?: string; // Район
  };
  lotArea?: { unit: string; value: string }; // value число (Размер участка)
  manuallyAdded?: TypeBoolean; // строка "0" или "1" (добавлено вручную)
  mortgage?: TypeBoolean; // строка "0" или "1" (ипотека)
  payedAdv?: TypeBoolean; // строка "0" или "1" (Оплаченный платеж)
  utilitiesIncluded?: TypeBoolean; // строка "0" или "1" (коммунальные услуги включены в стоимость)
  phone?: TypeBoolean; // строка "0" или "1" (наличие телефона)
  internet?: TypeBoolean; // строка "0" или "1" (интернет)
  rubbishChute?: TypeBoolean; // строка "0" или "1" (мусоропровод)
  lift?: TypeBoolean; // строка "0" или "1" (лифт)
  price?: { currency?: string; value?: string }; // Цена / value число (стоимость жилья или помещения) *
  propertyType?: string; // (тип недвижимости)
  renovation?: string; // Состояние / строка (к примеру: косметический, дизайнерский) *
  type?: string; // строка
  dealStatus?: string; // статус сделки
  waterSupply?: TypeBooleanYesNo; // строка "да" или "нет" (водоснабжение)
  electricitySupply?: TypeBooleanYesNo; // строка "да" или "нет" (Электроснабжение)
  gasSupply?: TypeBooleanYesNo; // строка "да" или "нет" (Снабжение газом)
  heatingSupply?: TypeBooleanYesNo; // Отопление (Теплоснабжение) / строка "да" или "нет" *
  lotType?: string; // тип лота
  kitchenSpace?: { unit: string; value: string }; // Площадь кухни / value число *
  livingSpace?: { unit: string; value: string }; // Жилая площадь / value число *
  newFlat?: string; // число (если 1, то новостройка, если нет параметра, то вторичное) *
  garageType?: string; // Тип гаража
  purpose?: string; // цель
  rooms?: string; // число (количество комнат) *
  roomsType?: string; // Планировка / строка (тип квартиры: студия, распашонка, изолированная, смежно-изолированная, 2-х уровневая и др.) *
  ceilingHeight?: string; // Высота потолков / число *
  bathroomUnit?: string; // Санузел / строка (раздельный, совмещённый, туалет) *
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
