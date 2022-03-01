import React from 'react'

function Person({person}) {
  return (
    
        <h2>
             i am {person.name}. i am {person.age} years old. i know {person.skill}
        </h2>
  )
}

export default Person