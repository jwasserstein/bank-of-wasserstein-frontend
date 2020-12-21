import React from 'react';
import {Link} from 'react-router-dom';
import Balance from './Balance';
import './TransactionButtons.css'

const TransactionButtons = props => (
    <div className="TransactionButtons-btn-container">
        <Link to={`/accounts/${props.accountId}/transactions/new`} className='TransactionButtons-btn'>New Transaction</Link>
        <Balance {...props} />
    </div>
);

export default TransactionButtons;