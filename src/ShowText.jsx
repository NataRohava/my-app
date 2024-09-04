import React, {useState} from 'react';

const ShowText = () => {
    const [showText, setShowText] = useState(false);
    const handleClick = () => {
        setShowText((showText)=>!showText)
    }
    return <div>
        
        <button onClick = {handleClick}>
            показать/скрыть текст
        </button>
        {showText && <p>React</p>}
    </div>
}
export default ShowText;


