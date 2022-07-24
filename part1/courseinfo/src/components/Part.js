import React from 'react'

export default function Part({name, exercise}) {
  return (
    <div>
        <h3>{name}</h3>
        <p>Excercises: {exercise}</p>
    </div>
  )
}
