import { format } from 'date-fns';

export const formatDate = (stringDate) => {
  const date = new Date(stringDate);
  return format(date, 'dd/MM/yyyy');
}