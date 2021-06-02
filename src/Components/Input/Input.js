import React, {useState}from 'react'
import './style.css'

 /**
  * Factory function to create a ShallowWrapper for the App component.
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @returns {ShallowWrapper}
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
            <input class="inputContainer"
            name={inputValue} 
            onChange={updateInput}
            type={props.type}/>
        </div>
    )
}
export default Input;