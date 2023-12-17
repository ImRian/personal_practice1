import React, { useState } from "react";
import Calendar from "../components/Calendar";
import useCalendar from "../hooks/useCalendar";
import '../styles/RoutineManager.css';

const RoutineManager = () => {
  const { currentWeek, nextWeek, previousWeek } = useCalendar();
  const [routines, setRoutines] = useState({});
  const [newRoutineName, setNewRoutineName] = useState("");
  const [routineDays, setRoutineDays] = useState({
    mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false, everyday: false
  });

  const currentWeekKey = currentWeek[0]?.format('YYYY-MM-DD');

  const addRoutine = () => {
    if (!newRoutineName) return;
    const newRoutine = {
      name: newRoutineName,
      id: Date.now(),
      days: routineDays.everyday ? { mon: true, tue: true, wed: true, thu: true, fri: true, sat: true, sun: true } : { ...routineDays },
      status: {}
    };

    setRoutines(prevRoutines => ({
      ...prevRoutines,
      [currentWeekKey]: [...(prevRoutines[currentWeekKey] || []), newRoutine]
    }));

    setNewRoutineName("");
    resetRoutineDays();
  };

  const resetRoutineDays = () => {
    setRoutineDays({
      mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false, everyday: false
    });
  };

  const handleCheckboxChange = (day) => {
    if (day === "everyday") {
      const newEverydayValue = !routineDays.everyday;
      setRoutineDays({
        mon: newEverydayValue, tue: newEverydayValue, wed: newEverydayValue, thu: newEverydayValue,
        fri: newEverydayValue, sat: newEverydayValue, sun: newEverydayValue, everyday: newEverydayValue
      });
    } else {
      setRoutineDays({ ...routineDays, [day]: !routineDays[day], everyday: false });
    }
  };

  const handleRoutineStatusChange = (routineId, day, status) => {
    setRoutines(prevRoutines => {
      const weekRoutines = prevRoutines[currentWeekKey] || [];
      const updatedWeekRoutines = weekRoutines.map(routine => {
        if (routine.id === routineId) {
          const updatedStatus = { ...routine.status, [day]: status };
          return { ...routine, status: updatedStatus };
        }
        return routine;
      });

      return { ...prevRoutines, [currentWeekKey]: updatedWeekRoutines };
    });
  };

  const handleRoutineEdit = (routineId, newName) => {
    setRoutines(prevRoutines => {
      const weekRoutines = prevRoutines[currentWeekKey] || [];
      const updatedWeekRoutines = weekRoutines.map(routine => {
        if (routine.id === routineId) {
          return { ...routine, name: newName };
        }
        return routine;
      });

      return { ...prevRoutines, [currentWeekKey]: updatedWeekRoutines };
    });
  };

  return (
    <div className="routine-manager">
      <Calendar
        currentWeek={currentWeek}
        routines={routines}
        onSelectDay={(day) => console.log(day)}
        onNextWeek={nextWeek}
        onPreviousWeek={previousWeek}
        onRoutineStatusChange={handleRoutineStatusChange}
        onRoutineEdit={handleRoutineEdit}
      />
      <div className="routine-add-form">
        <input
          type="text"
          value={newRoutineName}
          onChange={(e) => setNewRoutineName(e.target.value)}
          placeholder="새 루틴 이름"
        />
        {Object.keys(routineDays).map(day => (
          <label key={day}>
            <input
              type="checkbox"
              checked={routineDays[day]}
              onChange={() => handleCheckboxChange(day)}
            /> {day === "everyday" ? "매일" : day.toUpperCase()}
          </label>
        ))}
        <button onClick={addRoutine}>루틴 추가</button>
      </div>
    </div>
  );
};

export default RoutineManager;
