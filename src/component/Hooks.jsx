import React from 'react';
import useCounter from './useCounter';

function Hooks() {
    const [counter, increment, decrement, reset] = useCounter(10, 5);

    return (
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default Hooks;