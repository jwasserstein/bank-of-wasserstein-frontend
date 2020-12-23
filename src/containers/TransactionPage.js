import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';
import TransactionList from '../components/TransactionList';
import TransactionButtons from '../components/TransactionButtons';
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
				<TransactionButtons accountBalance={transactions[0] ? transactions[0].accountBalance : 0} accountId={accountId} />
				<TransactionList transactions={transactions} />
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