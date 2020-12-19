import React from 'react';
import './Form.css';

const Form = props => {
    const fields = props.fields.map(f => (
        <label htmlFor={f.name} key={f.name} className='Form-label'>
            {f.label}:
            <input type={f.type} className='Form-field' value={f.value} onChange={props.onChange} id={f.name} name={f.name} placeholder={f.label} autoComplete='off' required />
        </label>
    ));

    return (
        <form className='Form-form' onSubmit={props.onSubmit}>
            {fields}      
            <button type='submit' className='Form-btn'>
                {props.loading ? 'Loading...' : 'Submit'}
            </button>
        </form>
        );
};

export default Form;