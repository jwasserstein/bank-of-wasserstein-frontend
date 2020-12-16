import React, {Component} from 'react';
// import Balance from '../components/Balance';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';
import TransactionList from '../components/TransactionList';
import Navbar from './Navbar';
import TransactionButtons from '../components/TransactionButtons';
import './TransactionPage.css';

class TransactionPage extends Component {
	componentDidMount(){
		if(!this.props.lastUpdated){
			this.props.getTransactions(this.props.userId, localStorage.getItem('token'));
		}
	}
	
	render(){
		return (
			<div>
				<Navbar />
				<h2 className='TransactionPage-message'>Review your transactions.</h2>
				<TransactionButtons accountBalance={this.props.transactions[0] ? this.props.transactions[0].accountBalance : 0} />
				<TransactionList transactions={this.props.transactions} />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		transactions: state.transactionReducer.transactions
	};
}

export default connect(mapStateToProps, {getTransactions})(TransactionPage);