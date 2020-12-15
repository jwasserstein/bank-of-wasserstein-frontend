import React from 'react';
import {Link} from 'react-router-dom';
import './TransactionButtons.css'

const TransactionButtons = () => (
    <div className="TransactionPage-btn-container">
        <Link to='/transactions/new' className='TransactionPage-btn'>New Transaction</Link>
    </div>
);

export default TransactionButtons;