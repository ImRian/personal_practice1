import { useState, useEffect } from 'react';
import moment from 'moment';

const useCalendar = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(moment().startOf('isoWeek'));

  useEffect(() => {
    setCurrentWeekStart(moment().startOf('isoWeek'));
  }, []);

  const currentWeek = Array.from({ length: 7 }, (_, i) => moment(currentWeekStart).add(i, 'days'));

  const nextWeek = () => {
    setCurrentWeekStart(prev => moment(prev).add(1, 'weeks'));
  };

  const previousWeek = () => {
    setCurrentWeekStart(prev => moment(prev).subtract(1, 'weeks'));
  };

  return { currentWeek, nextWeek, previousWeek };
};

export default useCalendar;
