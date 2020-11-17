import React, {Component} from 'react';
import {Table, Placeholder} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getTransactions} from '../store/actions/transactions';
import dayjs from 'dayjs';
import {Link} from 'react-router-dom';

class Transaction extends Component {
	constructor(props){
		super(props);
		this.transactionRows = [];
		for(let i = 0; i < 10; i++){
			this.transactionRows.push(
				<Table.Row key={`loading-${i}`}>
					<Table.Cell>
						<Placeholder>
							<Placeholder.Paragraph>
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Table.Cell>
					<Table.Cell>
						<Placeholder>
							<Placeholder.Paragraph>
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Table.Cell>
					<Table.Cell>
						<Placeholder>
							<Placeholder.Paragraph>
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Table.Cell>
					<Table.Cell>
						<Placeholder>
							<Placeholder.Paragraph>
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Table.Cell>
				</Table.Row>
			);
		}
	}
	componentDidMount(){
		this.props.getTransactions(this.props.userId, localStorage.getItem('token'));
	}
	
	render(){
		if(this.props.transactions && this.props.transactions.length){
			this.transactionRows = this.props.transactions.map(t => (
				<Table.Row key={t.transactionNumber}>
					<Table.Cell>{dayjs(t.date).format('MM/DD/YYYY h:mA')}</Table.Cell>
					<Table.Cell>
						<Link to={`/transactions/${t.transactionNumber}`}>
							{t.description}
						</Link>
					</Table.Cell>
					<Table.Cell>{t.amount.toFixed(2)}</Table.Cell>
					<Table.Cell>{t.accountBalance.toFixed(2)}</Table.Cell>
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
					{this.transactionRows}
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