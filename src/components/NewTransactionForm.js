import React from 'react';
import './NewTransactionForm.css';

const NewTransactionForm = props => {
    return (
        <form className='NewTransactionForm-form' onSubmit={props.onSubmit}>
            {['deposit', 'withdrawal', 'transferAnotherUser', 'transferBetweenAccounts'].includes(props.transactionType) && ([
                <label key='label' htmlFor='amount'>Amount:</label>,
                <input key='input' type='number' className='NewTransactionForm-field' name='amount' 
                        id='amount' placeholder='Amount' min='0.01' step='0.01' value={props.amount} 
                        onChange={props.onChange} autoComplete='off' required />
            ])}

            {['transferAnotherUser'].includes(props.transactionType) && ([
                <label key='label-counterparty' htmlFor='counterparty'>Counterparty:</label>,
                <input key='input-counterparty' type='text' className='NewTransactionForm-field' name='counterparty' 
                        id='counterparty' placeholder='Counterparty' value={props.counterparty} 
                        onChange={props.onChange} autoComplete='off' required />
            ])}
            {['transferAnotherUser'].includes(props.transactionType) && ([
                <label key='label-accountType' htmlFor='accountTypeAnotherUser'>Account Type:</label>,
                <div className='NewTransactionForm-radio-container'>
                    <div>
                        <input type='radio' id='Checking' className='NewTransactionForm-radio' value='Checking' name='accountTypeAnotherUser' 
                            onChange={props.onChange} checked={props.accountTypeAnotherUser === 'Checking'} />
                        <label htmlFor='Checking'>Checking</label>
                    </div>
                    <div>
                        <input type='radio' id='Savings' className='NewTransactionForm-radio' value='Savings' name='accountTypeAnotherUser' 
                            onChange={props.onChange} checked={props.accountTypeAnotherUser === 'Savings'} />
                        <label htmlFor='Savings'>Savings</label>
                    </div>
                    <div>
                        <input type='radio' id='Investing' className='NewTransactionForm-radio' value='Investing' name='accountTypeAnotherUser' 
                            onChange={props.onChange} checked={props.accountTypeAnotherUser === 'Investing'} />
                        <label htmlFor='Investing'>Investing</label>
                    </div>
                </div>
            ])}
            {['transferBetweenAccounts'].includes(props.transactionType) && ([
                <label key='label-accountType' htmlFor='accountTypeBetweenAcc'>Account Type:</label>,
                <div className='NewTransactionForm-radio-container'>
                    <div>
                        <input type='radio' id='Checking' className='NewTransactionForm-radio' value='Checking' name='accountTypeBetweenAcc' 
                            onChange={props.onChange} checked={props.accountTypeBetweenAcc === 'Checking'} disabled={!props.enabledAccounts.includes('Checking')}/>

                        <label htmlFor='Checking' className={!props.enabledAccounts.includes('Checking') ? 'NewTransactionForm-disabled': ''}>Checking</label>
                    </div>
                    <div>
                        <input type='radio' id='Savings' className='NewTransactionForm-radio' value='Savings' name='accountTypeBetweenAcc' 
                            onChange={props.onChange} checked={props.accountTypeBetweenAcc === 'Savings'} disabled={!props.enabledAccounts.includes('Savings')}/>
                            
                        <label htmlFor='Savings' className={!props.enabledAccounts.includes('Savings') ? 'NewTransactionForm-disabled': ''}>Savings</label>
                    </div>
                    <div>
                        <input type='radio' id='Investing' className='NewTransactionForm-radio' value='Investing' name='accountTypeBetweenAcc' 
                            onChange={props.onChange} checked={props.accountTypeBetweenAcc === 'Investing'} disabled={!props.enabledAccounts.includes('Investing')}/>
                            
                        <label htmlFor='Investing' className={!props.enabledAccounts.includes('Investing') ? 'NewTransactionForm-disabled': ''}>Investing</label>
                    </div>
                </div>
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
}

export default NewTransactionForm;