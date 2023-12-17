import React from 'react';

const RoutineItem = ({ routine, onSelectRoutine, onEditRoutine }) => {
  return (
    <li>
      <span onClick={() => onSelectRoutine(routine)}>{routine.name}</span>
      <button onClick={() => onEditRoutine(routine.id, routine.name)}>Edit</button>
    </li>
  );
};

export default RoutineItem;
