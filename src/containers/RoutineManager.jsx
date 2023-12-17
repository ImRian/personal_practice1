import React, { useState } from "react";
import Calendar from "../components/Calendar";
import useCalendar from "../hooks/useCalendar";

const RoutineManager = () => {
  const { currentWeek, nextWeek, previousWeek } = useCalendar();
  const [routines, setRoutines] = useState([]);
  const [newRoutineName, setNewRoutineName] = useState("");
  const [routineDays, setRoutineDays] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
    everyday: false,
  });

  // 주 변경 시 루틴 목록 초기화
  const changeWeek = (changeWeekFunction) => {
    changeWeekFunction();
    setRoutines([]); // 루틴 목록 초기화
  };

  const addRoutine = () => {
    if (!newRoutineName) return;
    let daysToAdd = routineDays.everyday
      ? {
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: true,
          sun: true,
        }
      : routineDays;

    setRoutines([
      ...routines,
      { name: newRoutineName, id: Date.now(), days: daysToAdd, status: "" },
    ]);
    setNewRoutineName("");
    setRoutineDays({
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      everyday: false,
    });
  };

  const handleCheckboxChange = (day) => {
    if (day === "everyday") {
      const newEverydayValue = !routineDays.everyday;
      setRoutineDays({
        mon: newEverydayValue,
        tue: newEverydayValue,
        wed: newEverydayValue,
        thu: newEverydayValue,
        fri: newEverydayValue,
        sat: newEverydayValue,
        sun: newEverydayValue,
        everyday: newEverydayValue,
      });
    } else {
      setRoutineDays({
        ...routineDays,
        [day]: !routineDays[day],
        everyday: false,
      });
    }
  };

  const handleRoutineStatusChange = (routineId, day, status) => {
    const updatedRoutines = routines.map((routine) => {
      if (routine.id === routineId) {
        return { ...routine, status: { ...routine.status, [day]: status } };
      }
      return routine;
    });
    setRoutines(updatedRoutines);
  };

  return (
    <div>
      <Calendar
        currentWeek={currentWeek}
        routines={routines}
        onSelectDay={(day) => console.log(day)}
        onNextWeek={() => changeWeek(nextWeek)}
        onPreviousWeek={() => changeWeek(previousWeek)}
        onRoutineStatusChange={handleRoutineStatusChange}
      />
      <div>
        <input
          type="text"
          value={newRoutineName}
          onChange={(e) => setNewRoutineName(e.target.value)}
          placeholder="새 루틴 이름"
        />
        {Object.keys(routineDays).map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={routineDays[day]}
              onChange={() => handleCheckboxChange(day)}
            />
            {day === "everyday" ? "매일" : day.toUpperCase()}
          </label>
        ))}
        <button onClick={addRoutine}>루틴 추가</button>
      </div>
    </div>
  );
};

export default RoutineManager;
