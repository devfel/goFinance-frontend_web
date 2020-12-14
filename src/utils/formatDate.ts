// Format the values to show Date as a new JS date
const formatDate = (value: Date): string =>
  new Date(value).toLocaleDateString('fr-CA');

export default formatDate;
