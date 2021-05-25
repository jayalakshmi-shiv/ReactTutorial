import React, {useState}from 'react'
import './style.css'

 /**
  * Factory function to create a Input component.
  * @function Input
  * @param {object} props - name, value
  * @returns Input component
  */

const Input = (props) =>{
    const [inputValue, setInputValue] = useState('');
    const updateInput = (e) =>{
        e.preventDefault();
        props.updateField({name:props.name, value:e.target.value})
        setInputValue(e.target.value)
    }
    
    return(
        <div>
            <input class="InputContainer"
            name={inputValue} 
            onChange={updateInput}
            type={props.type}/>
        </div>
    )
}
export default Input;