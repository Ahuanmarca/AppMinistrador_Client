import { format } from 'date-fns';

export function formatDateTime(date: string, time: string) {
  const formattedTime = format(new Date(time), 'HH:mm');
  const formattedDate = format(new Date(date), 'yyyy-MM-dd');

  return formattedDate + ' ' + formattedTime;  
}
