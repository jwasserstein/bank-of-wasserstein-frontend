import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';
import Button from '../components/Button';
import Balance from '../components/Balance';
import ItemList from '../components/ItemList';
import Transaction from '../components/Transaction';
import './TransactionPage.css';

class TransactionPage extends Component {
	componentDidMount(){
		const accountId = this.props.match.params.accountId;
		if(!this.props.transactionReducer[accountId]?.lastUpdated){
			this.props.getTransactions(accountId);
		}
	}
	
	render(){
		const accountId = this.props.match.params.accountId;
		if(!this.props.transactionReducer[accountId]){
			return <div></div>;
		}
		
		const transactions = this.props.transactionReducer[accountId].transactions;

		return (
			<div>
				<h2 className='TransactionPage-message'>Review your transactions.</h2>
				<div className='TransactionPage-btn-container'>
					<Button to={`/accounts/${accountId}/transactions/new`}>New Transaction</Button>
					<Balance accountBalance={transactions[0] ? transactions[0].accountBalance : 0} />
				</div>
				<ItemList items={transactions} ItemComponent={Transaction} itemName='transactions' itemProps={{
					date: 'date',
					description: 'description',
					amount: 'amount',
					accountBalance: 'accountBalance',
					key: 'transactionNumber'
				}} />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		transactionReducer: state.transactionReducer
	};
}

export default connect(mapStateToProps, {getTransactions})(TransactionPage);