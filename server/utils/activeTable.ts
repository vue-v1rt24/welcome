import { TypeNamesTableDb } from '#shared/types/db.types';

let nameActiveTable: TypeNamesTableDb = 'realty';

export const setActiveTable = (nameTable: TypeNamesTableDb) => {
  nameActiveTable = nameTable;
};

export const getActiveTable = () => nameActiveTable;
