import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Vinod',
            age: 32,
            skill: 'Reactjs'
        },
        {
            id: 2,
            name: 'Ajay',
            age: 30,
            skill: 'Css'
        },
        {
            id: 3,
            name: 'Vikas',
            age: 34,
            skill: 'Backend'
        },
        {
            id: 4,
            name: 'Bikram',
            age: 35,
            skill: 'Frontend'
        },

    ]
    const NameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    const personList = persons.map((person) => <Person key={person.id} person={person}/>)
        return <div>{NameList}</div> 
 
}

export default NameList