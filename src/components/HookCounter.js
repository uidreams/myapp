import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);
    const initialCount = 0;
    const [counter, setCounter] = useState(initialCount);
    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCounter(prevCounter => prevCounter + 1)
        }
    }
    return (
        <div>
            <button onClick={() => { setCount(count+1) }}>Counter {count}</button>
            <p>Increment Five: {counter}</p>
            <button onClick={incrementFive}>Increment Five</button>
        </div>
    )
}

export default HookCounter
