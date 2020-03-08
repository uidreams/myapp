import React from 'react'

function Person({person}) {
    return (
        <div>
            <li>{person.name} expert in {person.skill}</li>
        </div>
    )
}

export default Person
