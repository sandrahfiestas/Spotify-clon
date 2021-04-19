import React from 'react';

function time() {
  const date = new Date();
  const hours = date.getHours();
  let current = '';

  if (hours >= 0 && hours < 12) { current = 'Buenos días'; }
  if (hours >= 12 && hours < 18) { current = 'Buenas tardes'; }
  if (hours >= 18 && hours < 24) { current = 'Buenas noches'; }

  return (
    <p className="time-current">{current}</p>
  );
}

export default time;
