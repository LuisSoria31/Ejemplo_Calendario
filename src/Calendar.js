// src/Calendar.js
import React, { useState } from 'react';
import dayjs from 'dayjs';
import './Calendar.css';

const Calendar = ({
  headerStyle = {},
  dayOfWeekStyle = {},
  dayStyle = {},
  selectedDayStyle = {},
  emptyDayStyle = {},
  buttonStyle = {},
}) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState(null);

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.startOf('month').day();

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
    setSelectedDay(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return daysOfWeek.map((day) => (
      <div key={day} style={dayOfWeekStyle} className="day-of-week">
        {day}
      </div>
    ));
  };

  const renderDaysInMonth = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} style={emptyDayStyle} className="empty-day" />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          style={selectedDay === i ? selectedDayStyle : dayStyle}
          className="day"
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <header style={headerStyle} className="calendar-header">
        <button onClick={handlePreviousMonth} style={buttonStyle}>
          Anterior
        </button>
        <h2>{currentDate.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth} style={buttonStyle}>
          Siguiente
        </button>
      </header>
      <div className="days-of-week">{renderDaysOfWeek()}</div>
      <div className="days-in-month">{renderDaysInMonth()}</div>
    </div>
  );
};

export default Calendar;
