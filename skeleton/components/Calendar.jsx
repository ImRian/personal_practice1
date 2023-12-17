// import React from 'react';
// import moment from 'moment';
// import '../styles/Calendar.css'; // CSS 파일 임포트

// const Calendar = ({ currentWeek, routines, onSelectDay, onNextWeek, onPreviousWeek, onRoutineStatusChange, onRoutineEdit }) => {

//   // 주간 타이틀을 렌더링하는 함수입니다
//   const renderWeekTitle = () => {
//     if (currentWeek.length === 0) {
//       return '로딩 중...';
//     }
//     // TODO: 현재 주간을 표시하는 로직 구현해 보세요
//     // 이 공간을 채워 넣으시면 됩니다
//   };

//   // 현재 주의 키 값 계산
//   const currentWeekKey = currentWeek[0]?.format('YYYY-MM-DD');

//   // 각 요일에 해당하는 루틴을 렌더링하는 함수입니다.
//   const renderRoutinesForDay = (day) => {
//   // 현재 주간의 키 값을 이용해 해당 요일의 루틴을 찾습니다.
//   // TODO: 주어진 'day'에 해당하는 루틴을 'routines' 객체에서 필터링합니다.

//   // 각 루틴에 대해 다음을 수행합니다:
//   // 1. 루틴 이름을 수정할 수 있는 입력 필드를 렌더링합니다.
//   //    사용자가 입력 필드를 변경하면 onRoutineEdit 함수가 호출되어야 합니다.
//   // 2. 루틴의 진행 상태(예: 'O', 'X', '진행중')를 선택할 수 있는 드롭다운을 렌더링합니다.
//   //    사용자가 선택을 변경하면 onRoutineStatusChange 함수가 호출되어야 합니다.
//   // TODO: 각 루틴에 대한 입력 필드와 드롭다운을 렌더링하는 코드를 작성하세요.
// };


// return (
//   <div>
//     <div className="week-navigation">
//       <button onClick={onPreviousWeek}>&lt;</button>
//       <h2>{renderWeekTitle()}</h2>
//       <button onClick={onNextWeek}>&gt;</button>
//     </div>
//     <table>
//       <thead>
//         <tr>
//           {currentWeek.map((day, index) => (
//             <th key={index}>{day.format('ddd (MM/DD)')}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {currentWeek.map((day, index) => (
//             <td key={index}>
//               {renderRoutinesForDay(day)}
//             </td>
//           ))}
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );
// };

// export default Calendar;