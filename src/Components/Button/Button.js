import React from 'react'
import './style.css'

const Button = (props) =>{
    return(
        <div>
        <button class="ButtonContainer"onClick={props.loginDetails}> Login </button>
        </div>
    )
}

export default Button;
