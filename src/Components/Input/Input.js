import React, {useState}from 'react'

const Input = (props) =>{
    const [inputValue, setInputValue] = useState('');
    const updateInput = (e) =>{
        e.preventDefault();
        props.updateField({name:props.name, value:e.target.value})
        setInputValue(e.target.value)
    }
    
    return(
        <div>
            <input style={{width: '250px',height: '50px',border: '1px solid gray'}}
            name={inputValue} 
            onChange={updateInput}
            type={props.type}/>
        </div>
    )
}
export default Input;