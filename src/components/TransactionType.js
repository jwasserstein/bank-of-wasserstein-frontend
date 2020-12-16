import React from 'react';
import './TransactionType.css';

const TransactionType = props => (
    <div className='NewTransactionPage-radio-container'>
        <input type='radio' id='deposit' className='NewTransactionPage-radio' value='deposit' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'deposit'}/>
        <label htmlFor='deposit'>Deposit</label>
        <input type='radio' id='withdrawal' className='NewTransactionPage-radio' value='withdrawal' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'withdrawal'}/>
        <label htmlFor='withdrawal'>Withdrawal</label>
        <input type='radio' id='transfer' className='NewTransactionPage-radio' value='transfer' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'transfer'}/>
        <label htmlFor='transfer'>Transfer</label>
        <input type='radio' id='generate' className='NewTransactionPage-radio' value='generate' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'generate'}/>
        <label htmlFor='generate'>Generate</label>
    </div>
);

export default TransactionType;