const formatter = new Intl.NumberFormat('ru-RU', {
  currency: 'rub',
  style: 'currency',
});

export const formatPrice = (price: number) => {
  return formatter.format(price);
};
