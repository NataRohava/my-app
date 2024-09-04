import React, {useState} from 'react';

const InputText = () => {
    const [name, setName] = useState('');
    const changeName = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            <label>
                Введите свое имя:
                <input type="text" value={name} onChange ={changeName} />
            </label>
            <p>Hello,{name}!</p>                
        </div>

    )
}
export default InputText;


