import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function CalendarWidget() {
  return <DayPicker month={ new Date(Date.now())} />
}
