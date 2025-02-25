export const toCamelCase = (str: string) => {
  return str.replace(/[\s-]+(.)/g, function (match, group) {
    return group.toUpperCase();
  });
};
