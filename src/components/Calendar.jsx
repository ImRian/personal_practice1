import React from 'react';
import moment from 'moment';

const Calendar = ({ currentWeek, routines, onSelectDay, onNextWeek, onPreviousWeek, onRoutineStatusChange }) => {
  const renderWeekTitle = () => {
    if (currentWeek.length === 0) {
      return '로딩 중...';
    }
  
    const start = currentWeek[0];
    const end = currentWeek[currentWeek.length - 1];
    return `${start.format('YYYY년 MM월 DD일')} - ${end.format('DD일')} 주간`;
  };

  const renderRoutinesForDay = (day) => {
    return routines.filter(routine => routine.days[moment(day).format('ddd').toLowerCase()] || routine.days.everyday)
      .map(routine => (
        <div key={`${routine.id}-${day}`}>
          {routine.name}
          <select
            value={routine.status[moment(day).format('ddd').toLowerCase()]}
            onChange={(e) => onRoutineStatusChange(routine.id, moment(day).format('ddd').toLowerCase(), e.target.value)}
          >
            <option value="">상태 선택</option>
            <option value="o">O</option>
            <option value="x">X</option>
            <option value="ing">진행중</option>
          </select>
        </div>
      ));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={onPreviousWeek}>&lt;</button>
        <h2 style={{ margin: '0 10px' }}>{renderWeekTitle()}</h2>
        <button onClick={onNextWeek}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            {currentWeek.map((day, index) => (
              <th key={index}>{day.format('ddd (MM/DD)')}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {currentWeek.map((day, index) => (
              <td key={index} onClick={() => onSelectDay(day)}>
                {renderRoutinesForDay(day)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
