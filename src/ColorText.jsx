import React, {useState} from 'react';

const ColorText = () => {
    const [color, setColor] = useState('red');
    const changeColor = () => {
        setColor(color === 'red' ? 'green' : 'red');
    }
    const style = {
        color: color
    }
    return (
        <div>
            <button onClick = {changeColor}>Change color</button> 
            <p style = {style}>Этот текст может быть красным или зеленым</p>            
        </div>

    )
}
export default ColorText;


