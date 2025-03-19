// Типизация для получения недвижимости (вывод на странице)
export type TypeFrontFilter = {
  newFlat: string;
  priceOt: string;
  priceDo: string;
  rooms: string;
  areaOt: string;
  areaDo: string;
  locationCity: string;
  locationStreet: string;
  locationArea: string;

  apartments: string; // число 0 или 1
  buildingName: string; // 'ЖД «Параллель»',
  ceilingHeight: string; // '2.7',
  bathroomUnit: string; // 'раздельный',
  floor: string; // '14',
  renovation: string; // 'дизайнерский',
  roomsType: string; // 'изолированная',
  balcony: string; // 'лоджия',
  buildingSeries: string; // 'Повышенной комфортности',
  buildingType: string; // 'кирпичный',
  heatingSupply: string; // 'Да / Нет',
  parkingType: string; // 'подземная'

  more: string;
};

// Для дополнительного фильтра (Открыть фильтр)
export type TypeAdvancedFilter = {
  localityName: string; // 'Ставрополь',
  subLocalityName: string; // 'Промышленный',
  address: string; // 'Партизанская улица',
  buildingName: string; // 'ЖД «Параллель»',
  ceilingHeight: string; // '2.7',
  bathroomUnit: string; // 'раздельный',
  floor: string; // '14',
  renovation: string; // 'дизайнерский',
  roomsType: string; // 'изолированная',
  balcony: string; // 'лоджия',
  buildingSeries: string; // 'Повышенной комфортности',
  buildingType: string; // 'кирпичный',
  heatingSupply: string; // 'Да / Нет',
  parkingType: string; // 'подземная'
};
