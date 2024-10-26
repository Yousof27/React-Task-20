import React from 'react';
import useCounter from './useCounter';

function Hooks() {

    const [counter, increment, decrement, reset] = useCounter(1, 3);

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default Hooks;