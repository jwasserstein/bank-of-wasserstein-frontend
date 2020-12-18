import React from 'react';
import dayjs from 'dayjs';
import './Transaction.css';

const Transaction = props => (
    <div className='TransactionPage-transaction'>
        <div>
            <div className='TransactionPage-recipient'>
                {props.description} 
            </div>
            <div className='TransactionPage-date'>
                {dayjs(props.date).format('MM/DD/YYYY h:mmA')} 
            </div>
        </div>
        <div>
            <div className='TransactionPage-amount'>
                ${props.amount.toFixed(2)}
            </div>
            <div className='TransactionPage-balance'>
                ${props.accountBalance.toFixed(2)}
            </div>
        </div>
    </div>
);

export default Transaction;