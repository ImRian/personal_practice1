import React from 'react';
import RoutineManager from './containers/RoutineManager';
import './App.css'; // 필요에 따라 스타일 시트를 import

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>루틴 관리 앱</h1>
      </header>
      <main>
        <RoutineManager />
      </main>
    </div>
  );
};

export default App;
