import React from 'react';
import Transaction from './Transaction';
import './TransactionList.css';

const TransactionList = props => (
    <div className="TransactionPage-container">
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
    </div>
);

export default TransactionList;