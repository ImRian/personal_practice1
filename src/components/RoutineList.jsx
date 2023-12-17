import React from 'react';
import RoutineItem from './RoutineItem';

const RoutineList = ({ routines, onSelectRoutine, onEditRoutine }) => {
  return (
    <div>
      <h3>루틴 목록</h3>
      <ul>
        {routines.map(routine => (
          <RoutineItem 
            key={routine.id} 
            routine={routine} 
            onSelectRoutine={onSelectRoutine} 
            onEditRoutine={onEditRoutine} />
        ))}
      </ul>
    </div>
  );
};

export default RoutineList;
