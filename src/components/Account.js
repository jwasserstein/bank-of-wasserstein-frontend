import React from 'react';
import {Link} from 'react-router-dom';
import './Account.css';

const Account = props => (
    <Link className='AccountPage-account' to={props.link}>
        <div>
            <div className='AccountPage-type'>
                {props.type} Account
            </div>
        </div>
        <div>
            <div className='AccountPage-balance'>
                ${props.accountBalance.toFixed(2)}
            </div>
        </div>
    </Link>
);

export default Account;