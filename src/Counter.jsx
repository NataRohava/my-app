import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return <div>
        {
            count
        }
        <button onClick = { ()=>setCount (count+1)}>
            Click
        </button>
    </div>
}
export default Counter;


