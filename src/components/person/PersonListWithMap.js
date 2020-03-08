import React from 'react'
import Person from './Person';

export default function PersonListWithMap() {
    const persons = [
        {
            id: 1,
            name: 'Kumar',
            skill: 'Coding'
        },
        {
            id: 2,
            name: 'Abhay',
            skill: 'Reading'
        },
        {
            id: 3,
            name: 'Arjun',
            skill: 'Playing'
        }

    ];
    const personList = persons.map(person => <Person key = {person.id} person = {person}/> )
    return (
        <div>
            <ul>
                {personList}
            </ul>
        </div>
    )
}
