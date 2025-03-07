const NUMBER_FORMATTER = new Intl.NumberFormat('ru-RU');

export const formatNumber = (num: number) => {
  return NUMBER_FORMATTER.format(num);
};
