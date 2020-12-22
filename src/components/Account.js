import React from 'react';
import {Link} from 'react-router-dom';
import './Account.css';

const Account = props => (
    <Link className='Account-account' to={props.link}>
        <div className='Account-container'>
            <div className='Account-type'>
                {props.type} Account
            </div>
            <div className='Account-balance'>
                ${props.accountBalance.toFixed(2)}
            </div>
        </div>
    </Link>
);

export default Account;