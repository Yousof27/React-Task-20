import { useState } from 'react';

function useCounter(initial = 0, value = 1) {

    const [counter, setCounter] = useState(initial);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(initial);

    return [counter, increment, decrement, reset];
}

export default useCounter;