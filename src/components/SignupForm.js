import React from 'react';
import './SignupForm.css';

const SignupForm = props => (
    <form className='SignupForm-form' onSubmit={props.onSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' className='SignupForm-field' value={props.username} onChange={props.onChange} name='username' id='username' placeholder='Username' autoComplete='off' required autofocus/>
        <label htmlFor='email'>Email:</label>
        <input type='email' className='SignupForm-field' value={props.email} onChange={props.onChange} name='email' id='email' placeholder='Email' autoComplete='off' required />
        <label htmlFor='password'>Password:</label>
        <input type='password' className='SignupForm-field' value={props.password} onChange={props.onChange} name='password' id='password' placeholder='Password' autoComplete='off' required />
        <label htmlFor='repeatPassword'>Repeat Password:</label>
        <input type='password' className='SignupForm-field' value={props.repeatPassword} onChange={props.onChange} name='repeatPassword' id='repeatPassword' placeholder='Repeat Password' autoComplete='off' required />
        <button type='submit' className='SignupForm-btn'>
            {props.loading ? 'Loading...' : 'Submit'}
        </button>
    </form>
);

export default SignupForm;