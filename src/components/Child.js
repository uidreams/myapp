import React from 'react'

export default function Child(props) {
    return (
        <div>
            <button onClick={() => props.btnHandler('Arjun')}>get parent name</button>
        </div>
    )
}
