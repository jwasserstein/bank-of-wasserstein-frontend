import React from 'react';
import './Balance.css';

const Balance = props => {
	return (
		<div className="Balance">
            <strong>Balance</strong>: ${props.accountBalance.toFixed(2)}
        </div>
	);
}

export default Balance;