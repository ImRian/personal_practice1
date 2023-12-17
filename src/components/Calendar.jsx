import React from 'react';
import moment from 'moment';
import '../styles/Calendar.css';

const Calendar = ({ currentWeek, routines, onSelectDay, onNextWeek, onPreviousWeek, onRoutineStatusChange, onRoutineEdit }) => {
  const renderWeekTitle = () => {
    if (currentWeek.length === 0) {
      return '로딩 중...';
    }

    const start = currentWeek[0];
    const end = currentWeek[currentWeek.length - 1];
    return `${start.format('YYYY-MM-DD')} ~ ${end.format('MM-DD')} 주간`;
  };

  const currentWeekKey = currentWeek[0]?.format('YYYY-MM-DD');

  const renderRoutinesForDay = (day) => {
    const dayRoutines = routines[currentWeekKey] || [];

    return dayRoutines.filter(routine =>
      routine.days && (routine.days[moment(day).format('ddd').toLowerCase()] || routine.days.everyday)
    ).map(routine => (
      <div key={`${routine.id}-${day}`}>
        <input 
          type="text" 
          value={routine.name} 
          onChange={(e) => onRoutineEdit(routine.id, e.target.value)}
          style={{ width: '70%', marginRight: '5px' }} 
        />
        <select
          value={routine.status[moment(day).format('ddd').toLowerCase()]}
          onChange={(e) => onRoutineStatusChange(routine.id, moment(day).format('ddd').toLowerCase(), e.target.value)}
        >
          <option value="">진행 상태</option>
          <option value="o">O</option>
          <option value="x">X</option>
          <option value="ing">진행중</option>
        </select>
      </div>
    ));
  };

  return (
    <div>
      <div className="week-navigation">
        <button onClick={onPreviousWeek}>&lt;</button>
        <h2>{renderWeekTitle()}</h2>
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
              <td key={index}>
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
