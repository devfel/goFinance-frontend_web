// Format the values to show as the appropriated currency
const formatValue = (value: number): string =>
  Intl.NumberFormat('fr-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(value);

export default formatValue;
