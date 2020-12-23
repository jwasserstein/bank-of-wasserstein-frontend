import React from 'react';
import './RadioContainer.css';

const RadioContainer = ({radios, name, onChange}) => {
    const radioElements = radios.map(r => {
        return (
            <div key={r.label}>
                <input type='radio' id={r.label} className='RadioContainer-radio' value={r.label} name={name} 
                    onChange={onChange} checked={r.checked} disabled={r.disabled}/>
                <label htmlFor={r.label} className={r.disabled ? 'RadioContainer-disabled': ''}>{r.label}</label>
            </div>
        );
    });
    return (
        <div>
            <div className='RadioContainer-container'>
                {radioElements}
            </div>
        </div>
    )
};

export default RadioContainer;