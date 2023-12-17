// import React from 'react';
// import moment from 'moment';

// const Calendar = ({ currentWeek, routines, onSelectDay, onNextWeek, onPreviousWeek, onRoutineStatusChange, onRoutineEdit }) => {

//   const Calendar = ({ currentWeek, routines, onSelectDay, onNextWeek, onPreviousWeek, onRoutineStatusChange, onRoutineEdit }) => {
//     const renderWeekTitle = () => {
//       if (currentWeek.length === 0) {
//         return '로딩 중...';
//       }
  
//       const start = currentWeek[0];
//       const end = currentWeek[currentWeek.length - 1];
//       return `${start.format('YYYY-MM-DD')} ~ ${end.format('MM-DD')} 주간`;
//     };
  
//     const currentWeekKey = currentWeek[0]?.format('YYYY-MM-DD');



//   // TODO: 주간별 루틴을 렌더링하는 함수를 작성하세요.
//   const renderRoutinesForDay = (day) => {
//     // 이 부분을 채워 넣으시면 됩니다.
//   };

//   return (
//     <div>
//       {/* 주간 타이틀과 변경 버튼을 렌더링합니다. */}
//       <div>
//         <button onClick={onPreviousWeek}>&lt;</button>
//         {renderWeekTitle()}
//         <button onClick={onNextWeek}>&gt;</button>
//       </div>

//       {/* 주간별 루틴 테이블을 렌더링합니다. */}
//       <table>
//         <thead>
//           <tr>
//             {/* TODO: 헤더 렌더링 로직을 작성하세요. */}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             {/* TODO: 각 요일별 루틴 렌더링 로직을 작성하세요. */}
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;