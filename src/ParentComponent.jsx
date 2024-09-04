import React, {useState} from 'react';
import ChildComponent from './ChildComponent';
import SiblingComponent from './SiblingComponent';

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount (count => (count+1))
    }
    const reset = () => {
        setCount (0)
    }
    const decrement = () => {
        setCount (count => (count-1))
    }
    const random = () => {
        const randomValue = Math.floor(Math.random()*10)+1;
        setCount(randomValue)
    }
    return (
        <div>
            {count}
            
            <button onClick = {increment}>Увеличить</button>
            <button onClick = {reset}>Сбросить</button>
            <button onClick = {random}>Случайное значение</button>
            <button onClick = {decrement}>Уменьшить</button>
            
            <ChildComponent count = {count} name = {"Nata"}/>
            <SiblingComponent/>
            

        </div>
    )
}
export default ParentComponent;


