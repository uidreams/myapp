import React from 'react'

// function Hello() {
//     return (
//         <div>
//             <h2>hello world</h2>
//         </div>
//     )
// }

const Hello = (props) => {
    console.log(props)
    return (
        <div>
        <h2>Hello World {props.type} and {props.course}</h2>
        {props.children}
        </div>
    )
}

export default Hello