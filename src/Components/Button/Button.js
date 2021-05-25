import React from 'react'
import './style.css'

const Button = (props) =>{
    return(
        <div>
            <button class="ButtonContainer" onClick={props.handleButton}> {props.buttonName} </button>
        </div>
    )
}

export default Button;


