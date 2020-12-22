import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateTransactions, createTransaction} from '../store/actions/transactions';
import TransactionType from '../components/TransactionType';
import Navbar from './Navbar';
import NewTransactionForm from '../components/NewTransactionForm';
import Message from '../components/Message';
import {getAccounts} from '../store/actions/accounts';
import './NewTransactionPage.css';

class NewTransactionPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			number: '',
			amount: '',
			counterparty: '',
			transactionType: 'deposit',
			accountType: '',
			err: '',
			loading: false
		};
		this.create = this.create.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	create(transaction){
		const accountId = this.props.match.params.accountId;
		this.setState({...this.state, loading: true});
		return this.props.createTransaction(transaction, accountId)
			.then(() => {
				this.setState({...this.state, loading: false, err: ''});
				this.props.history.push(`/accounts/${accountId}`);
			})
			.catch(err => this.setState({...this.state, loading: false, err: err.message}));
	}

	onSubmit(e){
		e.preventDefault();
		const accountId = this.props.match.params.accountId;
		switch(this.state.transactionType){
			case 'deposit':
				this.create({
					amount: this.state.amount,
					type: 'Deposit',
					description: 'Deposit'
				});
				break;
			case 'withdrawal':
				this.create({
					amount: -1*this.state.amount,
					type: 'Withdrawal',
					description: 'Withdrawal'
				});
				break;
			case 'transferAnotherUser':
				this.create({
					amount: -1*this.state.amount,
					counterparty: this.state.counterparty,
					accountType: this.state.accountType,
					type: 'Transfer',
					description: 'Transfer to ' + this.state.counterparty
				});
				break;
			case 'transferBetweenAccounts':
				this.create({
					amount: -1*this.state.amount,
					counterparty: this.props.username,
					accountType: this.state.accountType,
					type: 'Transfer',
					description: `Transfer to my ${this.state.accountType} account`
				})
				.then(() => this.props.getAccounts());
				break;
			case 'generate':
				this.setState({...this.state, loading: true});
				this.props.generateTransactions(+this.state.number, accountId)
					.then(() => {
						this.setState({...this.state, loading: false, err: ''});
						this.props.history.push(`/accounts/${accountId}`);
					})
					.catch(err => this.setState({...this.state, loading: false, err: err.message}));
				break;
			default:
				this.setState({...this.state, err: "Couldn't process request"});
		}
	}
	
	onChange(e){
		this.setState({...this.state, [e.target.name]: e.target.value});
	}
	
	render() {
		return (
			<div>
				<Navbar />
				<h2 className='NewTransactionPage-message'>Select a transaction type.</h2>
				<TransactionType transactionType={this.state.transactionType} onChange={this.onChange} />
				<h2 className='NewTransactionPage-message'>Enter your transaction details.</h2>
				{this.state.err && (
					<Message>
						{this.state.err}
					</Message>
				)}
				<NewTransactionForm transactionType={this.state.transactionType} amount={this.state.amount} 
									counterparty={this.state.counterparty} number={this.state.number} 
									loading={this.state.loading} accountType={this.state.accountType} 
									onChange={this.onChange} onSubmit={this.onSubmit}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		username: state.authReducer.username
	};
}

export default connect(mapStateToProps, {generateTransactions, createTransaction, getAccounts})(NewTransactionPage);