import React from 'react';
import './TransactionType.css';

const TransactionType = props => (
    <div className='NewTransactionPage-radio-container'>
        <div>
            <input type='radio' id='deposit' className='NewTransactionPage-radio' value='deposit' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'deposit'}/>
            <label htmlFor='deposit'>Deposit</label>
        </div>
        <div>
            <input type='radio' id='withdrawal' className='NewTransactionPage-radio' value='withdrawal' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'withdrawal'}/>
            <label htmlFor='withdrawal'>Withdrawal</label>
        </div>
        <div>
            <input type='radio' id='transferAnotherUser' className='NewTransactionPage-radio' value='transferAnotherUser' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'transferAnotherUser'}/>
            <label htmlFor='transferAnotherUser'>Transfer to another user</label>
        </div>
        <div>
            <input type='radio' id='transferBetweenAccounts' className='NewTransactionPage-radio' value='transferBetweenAccounts' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'transferBetweenAccounts'}/>
            <label htmlFor='transferBetweenAccounts'>Transfer between my accounts</label>
        </div>
        <div>
            <input type='radio' id='generate' className='NewTransactionPage-radio' value='generate' name='transactionType' onChange={props.onChange} checked={props.transactionType === 'generate'}/>
            <label htmlFor='generate'>Generate</label>
        </div>
    </div>
);

export default TransactionType;