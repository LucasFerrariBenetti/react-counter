import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export function Index() {

    const [count, setCount] = useState<number>(0);

    function handle_onClickIncrement() {
        setCount(count+1);
    }
    function handle_onClickDecrease() {
        setCount(count-1);
    }
    function handle_onClickReset() {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handle_onClickIncrement}>Increment</button> 
            <button onClick={handle_onClickDecrease}>Decrease</button>
            <button onClick={handle_onClickReset}>Reset</button>
        </div>
    );
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);