import { parseISO, format } from 'date-fns';

const formatDate = (dateStr: string): string => {
  const isoDate = parseISO(dateStr);
  return format(isoDate, 'dd/MM/yyyy');
};

export default formatDate;
