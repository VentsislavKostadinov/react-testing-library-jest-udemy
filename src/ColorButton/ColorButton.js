import React from "react";
import {useState}  from 'react';

export function replaceCamelWithSpaces(colorName) {

    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

const ColorButton = () => {

    const [ buttonColor, setButtonColor] = useState('red');
    const newColorButton = buttonColor ==='red' ? 'green' : 'red';

    const [disabled, setDisabled] = useState(false);

    const [secondButtonColor, setSecondButtonColor] = useState('MediumVioletRed')
   const newSecondColorButton = secondButtonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

    return (
        <div>
            <button style={{backgroundColor: disabled ? 'gray' : buttonColor}}
                     onClick={() => setButtonColor(newColorButton)}
                    disabled={disabled}

            >Change to {newColorButton}</button>

            <button style={{backgroundColor: newSecondColorButton}}
                    onClick={() => setSecondButtonColor(newSecondColorButton)}
            >Change to {replaceCamelWithSpaces(newSecondColorButton)}</button>

            <label htmlFor='disable-button-checkbox'/>
            <input
                id='disable-button-checkbox'
                aria-checked={disabled}
                defaultChecked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                type="checkbox" />
        </div>
    )
}

export default ColorButton;