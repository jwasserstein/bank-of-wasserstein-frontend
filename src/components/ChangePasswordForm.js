import React from 'react';
import './ChangePasswordForm.css';

const ChangePasswordForm = props => (
    <form className='ChangePasswordForm-form' onSubmit={props.onSubmit}>
        <label htmlFor='currentPassword'>Current Password:</label>
        <input id='currentPassword' type='password' className='ChangePasswordForm-field' value={props.currentPassword} onChange={props.onChange} name='currentPassword' placeholder='Current Password' autoComplete='off' required />
        <label htmlFor='newPassword'>New Password:</label>
        <input id='newPassword' type='password' className='ChangePasswordForm-field' value={props.newPassword} onChange={props.onChange} name='newPassword' placeholder='New Password' autoComplete='off' required />
        <label htmlFor='repeatNewPassword'>Repeat New Password:</label>
        <input id='repeatNewPassword' type='password' className='ChangePasswordForm-field' value={props.repeatNewPassword} onChange={props.onChange} name='repeatNewPassword' placeholder='Repeat New Password' autoComplete='off' required />
        <button type='submit' className='ChangePasswordForm-btn'>
            {props.loading ? 'Loading...' : 'Submit'}
        </button>
    </form> 
);

export default ChangePasswordForm;