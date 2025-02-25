import prisma from '~/lib/prisma';
import { TypeNamesTableDb } from '~/shared/types/db.types';

export const clearDB = async (nameDB: TypeNamesTableDb = 'realty') => {
  return await prisma[nameDB].deleteMany();
};
