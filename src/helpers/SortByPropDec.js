export const SortByPropDec = (array, propName) =>
  array.sort((a, b) => parseFloat(b[propName]) - parseFloat(a[propName]))
