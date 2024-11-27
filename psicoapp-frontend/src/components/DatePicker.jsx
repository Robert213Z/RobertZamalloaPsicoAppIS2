import React from 'react';
import './DatePicker.css';

function DatePicker({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="date-picker"
    />
  );
}

export default DatePicker;
