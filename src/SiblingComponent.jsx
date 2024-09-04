import React, {useState} from 'react';


const SiblingComponent = () => {
    const[text,setText] = useState('blablabla');
    const changeText = () => {
        setText ('Redev')
    }
    
    return (
        <div>
            
            <p>Текущий текст: {text}</p>
            <button onClick = {changeText}>Изменить текст</button>
            
        </div>               
        
    )
    
}
export default SiblingComponent;


