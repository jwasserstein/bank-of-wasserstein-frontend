import React from 'react';
import './Account.css';

const Account = props => (
    <a className='AccountPage-account' href={props.link}>
        <div>
            <div className='AccountPage-type'>
                {props.type} 
            </div>
        </div>
        <div>
            <div className='AccountPage-balance'>
                $0.00
            </div>
        </div>
    </a>
);

export default Account;