export type TypeDB = {
  id: string;
  area?: { unit: string; value: string };
  balcony?: string;
  category?: string;
  description?: string;
  image?: string[];
  internet?: string;
  lift?: string;
  livingSpace?: { unit: string; value: string };
  location?: {
    address?: string;
    country?: string;
    latitude?: string;
    localityName?: string;
    longitude?: string;
    region?: string;
    subLocalityName?: string;
  };
  phone?: string;
  price?: { currency?: string; value?: string };
  type?: string;
  url?: string;
  videoReview?: string;
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
