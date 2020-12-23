import React from 'react';
import Balance from './Balance';
import Button from '../components/Button';
import './TransactionButtons.css'

const TransactionButtons = props => (
    <div className="TransactionButtons-btn-container">
        <Button to={`/accounts/${props.accountId}/transactions/new`}>New Transaction</Button>
        <Balance {...props} />
    </div>
);

export default TransactionButtons;