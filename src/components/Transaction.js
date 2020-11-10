import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';

class Transaction extends Component {
	componentDidMount(){
		this.props.getTransactions(this.props.userId, localStorage.getItem('token'));
	}
	
	render(){
		let transactionRows = 'Loading';
		if(this.props.transactions){
			transactionRows = this.props.transactions.map(t => (
				<Table.Row key={t.transactionNumber}>
					<Table.Cell>{t.date}</Table.Cell>
					<Table.Cell>{t.transactionType} {t.description}</Table.Cell>
					<Table.Cell>{t.description.split(' ')[0] === 'deposit' ? t.amount : '(' + t.amount + ')'}</Table.Cell>
					<Table.Cell>{t.accountBalance}</Table.Cell>
				</Table.Row>
			));
		}
		

		return (
			<Table celled striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Date</Table.HeaderCell>
						<Table.HeaderCell>Description</Table.HeaderCell>
						<Table.HeaderCell>Amount</Table.HeaderCell>
						<Table.HeaderCell>Available Balance</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{transactionRows}
				</Table.Body>
			</Table>
		);
	}
}

function mapStateToProps(state){
	return {
		transactions: state.transactionReducer.transactions,
		userId: state.authReducer.userId
	}
}

export default connect(mapStateToProps, {getTransactions})(Transaction);