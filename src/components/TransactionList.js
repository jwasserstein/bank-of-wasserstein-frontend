import React from 'react';
import Transaction from './Transaction';
import './TransactionList.css';

const TransactionList = props => (
    <div className="TransactionList-container">
        {props.transactions && 
        props.transactions.map(t => 
            <Transaction 
                date={t.date}
                description={t.description}
                amount={t.amount}
                accountBalance={t.accountBalance} 
                key={t.transactionNumber}
            />
        )}
        {!props.transactions.length && (
            <div className='TransactionList-placeholder'>
                You don't have any transactions yet!
            </div>
        )}
    </div>
);

export default TransactionList;