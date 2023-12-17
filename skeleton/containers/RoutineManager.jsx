// import React, { useState } from "react";
// import Calendar from "../components/Calendar";
// import useCalendar from "../hooks/useCalendar";
// import '../styles/RoutineManager.css';

// const RoutineManager = () => {
//   const { currentWeek, nextWeek, previousWeek } = useCalendar();

//   // 루틴과 관련된 상태들입니다.
//   const [routines, setRoutines] = useState({}); // 루틴 목록을 저장합니다.
//   const [newRoutineName, setNewRoutineName] = useState(""); // 새 루틴 이름 입력을 위한 상태입니다.
//   const [routineDays, setRoutineDays] = useState({ // 루틴의 요일 선택 상태입니다.
//     mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false, everyday: false
//   });

//   // 현재 주의 시작 날짜를 키 값으로 사용합니다.
//   const currentWeekKey = currentWeek[0]?.format('YYYY-MM-DD');

//   // 새 루틴을 추가하는 함수입니다.
//   const addRoutine = () => {
//     // TODO: 새 루틴을 생성하고 routines 상태를 업데이트하는 로직을 작성하세요.
//     // 1. 새 루틴 객체를 생성합니다.
//     // 2. setRoutines 함수를 사용하여 routines 상태에 새 루틴을 추가합니다.
//   };

//   // 요일 선택 상태를 초기화하는 함수입니다.
//   const resetRoutineDays = () => {
//     setRoutineDays({
//       mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false, everyday: false
//     });
//   };

//    // 루틴의 요일 선택을 변경하는 함수입니다.
//    const handleCheckboxChange = (day) => {
//     if (day === "everyday") {
//       const newEverydayValue = !routineDays.everyday;
//       setRoutineDays({
//         mon: newEverydayValue, tue: newEverydayValue, wed: newEverydayValue, thu: newEverydayValue,
//         fri: newEverydayValue, sat: newEverydayValue, sun: newEverydayValue, everyday: newEverydayValue
//       });
//     } else {
//       setRoutineDays({ ...routineDays, [day]: !routineDays[day], everyday: false });
//     }
//   };

//   // 루틴의 상태(진행 상태)를 변경하는 함수입니다.
//   const handleRoutineStatusChange = (routineId, day, status) => {
//     // TODO: 특정 루틴의 상태를 업데이트하는 로직을 작성하세요.
//     // 1. routines 상태에서 해당 루틴을 찾습니다.
//     // 2. 선택된 요일의 상태를 업데이트합니다.
//     // 3. setRoutines 함수로 전체 routines 상태를 업데이트합니다.
//   };

//   // 루틴의 이름을 수정하는 함수입니다.
//   const handleRoutineEdit = (routineId, newName) => {
//     setRoutines(prevRoutines => {
//       const weekRoutines = prevRoutines[currentWeekKey] || [];
//       const updatedWeekRoutines = weekRoutines.map(routine => {
//         if (routine.id === routineId) {
//           return { ...routine, name: newName };
//         }
//         return routine;
//       });

//       return { ...prevRoutines, [currentWeekKey]: updatedWeekRoutines };
//     });
//   };

//   return (
//     <div className="routine-manager">
//       {/* Calendar 컴포넌트를 렌더링합니다. */}
//       <Calendar
//         currentWeek={currentWeek}
//         routines={routines}
//         onSelectDay={(day) => console.log(day)}
//         onNextWeek={nextWeek}
//         onPreviousWeek={previousWeek}
//         onRoutineStatusChange={handleRoutineStatusChange}
//         onRoutineEdit={handleRoutineEdit}
//       />

//       {/* 루틴 추가 폼을 렌더링합니다. */}
//       <div className="routine-add-form">
//         <input
//           type="text"
//           value={newRoutineName}
//           onChange={(e) => setNewRoutineName(e.target.value)}
//           placeholder="새 루틴 이름"
//         />
//         // 루틴의 요일 선택 체크박스를 렌더링합니다.
//         {Object.keys(routineDays).map(day => (
//           <label key={day}>
//           {/* TODO: 각 요일에 대한 체크박스를 구현하세요. */}
//           {/* 체크박스가 변경될 때, handleCheckboxChange 함수가 호출되도록 합니다. */}
//           {/* 체크 상태는 routineDays 상태에서 관리됩니다. */}
//           </label>
//         ))}
//         <button onClick={addRoutine}>루틴 추가</button>
//       </div>
//     </div>
//   );
// };

// export default RoutineManager;
