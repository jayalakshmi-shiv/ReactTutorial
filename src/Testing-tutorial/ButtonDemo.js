import { grey } from '@material-ui/core/colors';
import React, { useState } from 'react';


const Button = () => {
    const [buttonColor, setButtonColor] = useState('red');
    const [disabled, setDisabled] = useState(false);
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
    return (
        <div>
            <button 
            disabled={disabled}
            style={{backgroundColor: disabled?'gray': buttonColor }} 
            onClick={() => setButtonColor(newButtonColor)}>Change to {newButtonColor} </button>

            <input type="checkbox" 
            id="disable-button-checkbox" 
            defaultChecked={disabled} 
            aria-checked={disabled} 
            onChange={(e) =>{setDisabled(e.target.checked)}} />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    )
}

export default Button;