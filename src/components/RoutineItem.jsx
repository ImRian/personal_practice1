import React from 'react';

const RoutineItem = ({ routine, onSelectRoutine }) => {
  return (
    <li onClick={() => onSelectRoutine(routine)}>
      {routine.name}
    </li>
  );
};

export default RoutineItem;
