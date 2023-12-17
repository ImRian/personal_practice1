import React from 'react';
import RoutineItem from './RoutineItem';

const RoutineList = ({ routines, onSelectRoutine }) => {
  return (
    <div>
      <h3>루틴 목록</h3>
      <ul>
        {routines.map(routine => (
          <RoutineItem key={routine.id} routine={routine} onSelectRoutine={onSelectRoutine} />
        ))}
      </ul>
    </div>
  );
};

export default RoutineList;
