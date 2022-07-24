import React from 'react';

export default function Total({parts}) {
  const total = parts.reduce((total, part) => total + part.exercises, 0);
 
  return (
    <div>
      Total: {total} <br/>
++
    </div>
  )
}
