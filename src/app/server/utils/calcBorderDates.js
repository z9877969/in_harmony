import { addSeconds, subSeconds } from 'date-fns';

export const calcBorderDates = ({ minDate, maxDate }) => {
  const dates = {
    ...(minDate && { prev: subSeconds(new Date(minDate), 1) }),
    ...(maxDate && { next: addSeconds(new Date(maxDate), 1) }),
  };
  const timeStamps = {
    ...(minDate && {
      prev: Math.floor(dates.prev.getTime() / 1000).toString(),
    }),
    ...(maxDate && {
      next: Math.floor(dates.next.getTime() / 1000).toString(),
    }),
  };

  return timeStamps;
};
