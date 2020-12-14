// Format the values to show Canadian Dollars as currency
const formatValue = (value: number): string =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  }).format(value);

export default formatValue;
