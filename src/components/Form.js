import React from 'react';
import Button from './Button';
import './Form.css';

const Form = props => {
    const fields = props.fields.map(f => (
        <label htmlFor={f.name} key={f.name} className='Form-label'>
            {f.label}:
            <input type={f.type} className='Form-field' value={f.value} onChange={props.onChange} id={f.name} 
            name={f.name} placeholder={f.label} autoComplete='off' autoCorrect='off' autoCapitalize='none' required />
        </label>
    ));

    return (
        <form className='Form-form' onSubmit={props.onSubmit}>
            {fields}      
            <Button form className='Form-btn'>
                {props.loading ? 'Loading...' : 'Submit'}
            </Button>
        </form>
        );
};

export default Form;