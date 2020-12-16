import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = props => (
    <div className='ErrorMessage'>{props.children}</div>
);

export default ErrorMessage;