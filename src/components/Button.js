import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

const Button = props => {
    const classes = props.className ? `Button ${props.className}` : 'Button';
    if(props.form){
        return <button type='submit' className={classes + ' Button-form'}>{props.children}</button>;
    } else {
        return <Link className={classes} to={props.to} onClick={props.onClick}>{props.children}</Link>;
    }
};

export default Button