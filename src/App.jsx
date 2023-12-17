import React from 'react';
import RoutineManager from './containers/RoutineManager';
import './styles/App.css'; 
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly 루틴 관리</h1>
      </header>
      <main>
        <RoutineManager />
      </main>
    </div>
  );
};

export default App;
