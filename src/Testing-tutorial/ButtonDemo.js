import React, { useState } from 'react';

export const replaceCamelWithCases = (colorName) =>{
    return colorName.replace(/\B([A-Z])\B/g, ' $1')
}


const Button = () => {
    const [buttonColor, setButtonColor] = useState('MediumVioletRed');
    const [disabled, setDisabled] = useState(false);
    const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
    return (
        <div>
            <button 
            disabled={disabled}
            style={{backgroundColor: disabled?'gray': buttonColor }} 
            onClick={() => setButtonColor(newButtonColor)}>Change to {replaceCamelWithCases (newButtonColor)} </button>

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