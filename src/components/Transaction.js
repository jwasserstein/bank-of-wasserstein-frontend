import React from 'react';
import dayjs from 'dayjs';
import './Transaction.css';

const Transaction = props => (
    <div className="TransactionPage-transaction">
        <div className='TransactionPage-recipient'>
            {props.description} 
            <span className='TransactionPage-amount'>${props.amount.toFixed(2)}</span>
        </div>
        <div className='TransactionPage-date'>
            {dayjs(props.date).format('MM/DD/YYYY h:mmA')} 
            <span className='TransactionPage-balance'>${props.accountBalance.toFixed(2)}</span>
        </div>
    </div>
);

export default Transaction;