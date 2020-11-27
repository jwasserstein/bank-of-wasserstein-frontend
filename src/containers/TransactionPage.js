import React, {Component} from 'react';
import Balance from '../components/Balance';
import Transaction from '../components/Transaction';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';

class TransactionPage extends Component {
	componentDidMount(){
		if(!this.props.lastUpdated){
			this.props.getTransactions(this.props.userId, localStorage.getItem('token'));
		}
	}
	
	render(){
		return (
			<div>
				<Balance transactions={this.props.transactions} lastUpdated={this.props.lastUpdated}/>
				<Transaction transactions={this.props.transactions} userId={this.props.userId} lastUpdated={this.props.lastUpdated}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		transactions: state.transactionReducer.transactions,
		userId: state.authReducer.userId,
		lastUpdated: state.transactionReducer.lastUpdated
	};
}

export default connect(mapStateToProps, {getTransactions})(TransactionPage);