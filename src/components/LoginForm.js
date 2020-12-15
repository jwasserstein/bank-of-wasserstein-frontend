import React from 'react';
import './LoginForm.css';

const LoginForm = props => (
    <form className='LoginForm-form' onSubmit={props.onSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' className='LoginForm-field' value={props.username} onChange={props.onChange} id='username' name='username' placeholder='Username' autoComplete='off' required autofocus />
        <label htmlFor='password'>Password:</label>
        <input type='password' className='LoginForm-field' value={props.password} onChange={props.onChange} id='password' name='password' placeholder='Password' autoComplete='off' required />
        <button type='submit' className='LoginForm-btn'>
            {props.loading ? 'Loading...' : 'Submit'}
        </button>
    </form>
);

export default LoginForm;