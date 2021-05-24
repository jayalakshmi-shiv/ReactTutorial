import React from 'react'

const Button = (props) =>{
    return(
        <div>
        <button style={{width: '250px',height: '50px',background: 'cornflowerblue', color: 'white'}}
            onClick={props.loginDetails}
        > Login </button>
        </div>
    )
}

export default Button;
