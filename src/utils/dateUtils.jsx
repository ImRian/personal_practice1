import moment from 'moment';

export const getWeekRangeString = (date) => {
  const startOfWeek = moment(date).startOf('isoWeek');
  const endOfWeek = moment(startOfWeek).add(6, 'days');
  return `${startOfWeek.format('YYYY년 MM월 DD일')} - ${endOfWeek.format('MM월 DD일')}`;
};

// 기타 날짜 관련 유틸리티 함수
