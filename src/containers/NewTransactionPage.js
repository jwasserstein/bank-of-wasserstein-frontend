import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateTransactions, createTransaction} from '../store/actions/transactions';
import TransactionType from '../components/TransactionType';
import Navbar from './Navbar';
import NewTransactionForm from '../components/NewTransactionForm';
import Message from '../components/Message';
import './NewTransactionPage.css';

class NewTransactionPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			number: '',
			amount: '',
			counterparty: '',
			transactionType: 'deposit',
			err: '',
			loading: false
		};
		this.create = this.create.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	create(transaction){
		this.setState({...this.state, loading: true});
		this.props.createTransaction(transaction, this.props.userId, localStorage.getItem('token'))
			.then(() => {
				this.setState({...this.state, loading: false, err: ''});
				this.props.history.push('/transactions');
			})
			.catch(err => this.setState({...this.state, loading: false, err: err.message}));
	}

	onSubmit(e){
		e.preventDefault();
		switch(this.state.transactionType){
			case 'deposit':
				this.create({
					amount: this.state.amount,
					counterparty: 'Deposit',
					type: 'Deposit',
					description: 'Deposit'
				});
				break;
			case 'withdrawal':
				this.create({
					amount: -1*this.state.amount,
					counterparty: 'Withdrawal',
					type: 'Withdrawal',
					description: 'Withdrawal'
				});
				break;
			case 'transfer':
				this.create({
					amount: -1*this.state.amount,
					counterparty: this.state.counterparty,
					type: 'Transfer',
					description: 'Transfer to ' + this.state.counterparty
				});
				break;
			case 'generate':
				this.setState({...this.state, loading: true});
				this.props.generateTransactions(+this.state.number, this.props.userId, localStorage.getItem('token'))
					.then(() => {
						this.setState({...this.state, loading: false, err: ''});
						this.props.history.push('/transactions');
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
									loading={this.state.loading} onChange={this.onChange} onSubmit={this.onSubmit}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		userId: state.authReducer.userId
	}
}

export default connect(mapStateToProps, {generateTransactions, createTransaction})(NewTransactionPage);