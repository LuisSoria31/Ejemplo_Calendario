// src/App.js
import React from 'react';
import Calendar from './Calendar';
import './Calendar.css';

function App() {
  const customStyles = {
    headerStyle: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#f0f0f0',
      border: 'none',
      borderRadius: '4px',
      padding: '5px 10px',
      fontSize: '0.9rem',
      cursor: 'pointer',
    },
    dayOfWeekStyle: {
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      padding: '8px 0',
    },
    dayStyle: {
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      padding: '15px 0',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    selectedDayStyle: {
      backgroundColor: '#4CAF50',
      color: 'white',
      borderRadius: '50%',
    },
    emptyDayStyle: {
      padding: '15px 0',
      textAlign: 'center',
      border: '1px solid transparent',
    },
  };

  return (
    <div className="App">
      <center>
      <h1>Calendario</h1>
      </center>
      <Calendar {...customStyles} />
    </div>
  );
}

export default App;
