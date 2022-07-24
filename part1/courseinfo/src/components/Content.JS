import React from 'react';
import Part from './Part';

export default function Content({parts}) {
  console.log(parts)
  return (
    <div>
    {
      parts.map((_part, index) => <Part key={index} name={_part.name} exercise={_part.exercises}/>)
    }
    </div>
  )
}
