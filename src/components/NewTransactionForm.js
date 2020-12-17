import React from 'react';
import './NewTransactionForm.css';

const NewTransactionForm = props => (
    <form className='NewTransactionForm-form' onSubmit={props.onSubmit}>
        {['deposit', 'withdrawal', 'transfer'].includes(props.transactionType) && ([
            <label key='label' htmlFor='amount'>Amount:</label>,
            <input key='input' type='number' className='NewTransactionForm-field' name='amount' 
                    id='amount' placeholder='Amount' min='0.01' step='0.01' value={props.amount} 
                    onChange={props.onChange} autoComplete='off' required />
        ])}

        {['transfer'].includes(props.transactionType) && ([
            <label key='label' htmlFor='counterparty'>Counterparty:</label>,
            <input key='input' type='text' className='NewTransactionForm-field' name='counterparty' 
                    id='counterparty' placeholder='Counterparty' value={props.counterparty} 
                    onChange={props.onChange} autoComplete='off' required />
        ])}

        {['generate'].includes(props.transactionType) && ([
            <label key='label' htmlFor='number'>Number:</label>,
            <input key='input' type='number' className='NewTransactionForm-field' name='number' 
                    id='number' placeholder='Number' min='1' step='1' value={props.number} 
                    onChange={props.onChange} autoComplete='off' required />
        ])}

        <button type='submit' className='NewTransactionForm-form-btn'>
            {props.loading ? 'Loading...' : 'Create Transaction'}
        </button>
    </form>
);

export default NewTransactionForm;