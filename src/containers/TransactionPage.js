import React, {Component} from 'react';
import Balance from '../components/Balance';
import Transaction from '../components/Transaction';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';

class TransactionPage extends Component {
	componentDidMount(){
		if(!this.props.transactions || !this.props.transactions.length){
			this.props.getTransactions(this.props.userId, localStorage.getItem('token'));
		}
	}
	
	render(){
		return (
			<div>
				<Balance />	
				<Transaction transactions={this.props.transactions} userId={this.props.userId}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		transactions: state.transactionReducer.transactions,
		userId: state.authReducer.userId
	};
}

export default connect(mapStateToProps, {getTransactions})(TransactionPage);