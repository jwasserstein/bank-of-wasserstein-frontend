import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';
import {Segment, Statistic, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';

class ShowTransactionPage extends Component {
	componentDidMount(){
		if(!this.props.transactions || !this.props.transactions.length){
			this.props.getTransactions(this.props.userId, localStorage.token);
		}
	}
	
	render() {
		const transaction = this.props.transactions.filter(t => t.transactionNumber == this.props.match.params.transactionId)[0];
		
		if(transaction){
			return (
				<div style={{textAlign: 'center'}}>
					<Segment compact style={{margin: '0 auto'}}>
						<h3 style={{textAlign: 'center'}}>Transaction Details</h3>
						<Statistic size='mini'>
							<Statistic.Value>{dayjs(transaction.date).format('MM/DD/YYYY h:mA')}</Statistic.Value>
							<Statistic.Label>Date</Statistic.Label>
						</Statistic>
						<Statistic size='mini'>
							<Statistic.Value>${transaction.amount.toFixed(2)}</Statistic.Value>
							<Statistic.Label>Amount</Statistic.Label>
						</Statistic>
						<Statistic size='mini'>
							<Statistic.Value>${transaction.accountBalance.toFixed(2)}</Statistic.Value>
							<Statistic.Label>Account Balance</Statistic.Label>
						</Statistic>

						<h3 style={{textAlign: 'center'}}>Description</h3>
						<div>{transaction.description}</div>

						<h3 style={{textAlign: 'center'}}>Receiving Account</h3>
						<div><strong>Account Number</strong>: {transaction.receivingAccount}</div>
						<div><strong>Routing Number</strong>: {transaction.receivingRouting}</div>
					</Segment>
					<Link to='/' className='ui teal button' style={{marginTop: '10px'}}>Back</Link>					
				</div>
			);
		} else {
			return (
				<div>Loading...</div>
			);
		}
		
	}
}

function mapStateToProps(state){
	return {
		transactions: state.transactionReducer.transactions,
		userId: state.authReducer.userId
	}
}

export default connect(mapStateToProps, {getTransactions})(ShowTransactionPage);