const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
