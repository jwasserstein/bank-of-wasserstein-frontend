import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

const Button = ({className, form, children, to, onClick}) => {
    const classes = className ? `Button ${className}` : 'Button';
    if(form){
        return <button type='submit' className={classes + ' Button-form'} onClick={onClick}>{children}</button>;
    } else {
        return <Link className={classes} to={to} onClick={onClick}>{children}</Link>;
    }
};

export default Button;