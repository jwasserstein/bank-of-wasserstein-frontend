import React from 'react';
import dayjs from 'dayjs';
import './Transaction.css';

const Transaction = props => (
    <div className='Transaction-transaction'>
        <div className='Transaction-container'>
            <div>
                <div className='Transaction-recipient'>
                    {props.description} 
                </div>
                <div className='Transaction-date'>
                    {dayjs(props.date).format('MM/DD/YYYY h:mmA')} 
                </div>
            </div>
            <div>
                <div className='Transaction-amount'>
                    ${props.amount.toFixed(2)}
                </div>
                <div className='Transaction-balance'>
                    ${props.accountBalance.toFixed(2)}
                </div>
            </div>
        </div>
    </div>
);

export default Transaction;