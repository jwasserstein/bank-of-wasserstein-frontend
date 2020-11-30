import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateTransactions, createTransaction} from '../store/actions/transactions';
import {Button, Tab, Form, Message} from 'semantic-ui-react';

class NewTransactionPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			numTransactions: '',
			amount: '',
			recipient: '',
			description: '',
			err: '',
			loading: false
		};
		this.generate = this.generate.bind(this);
		this.create = this.create.bind(this);
		this.deposit = this.deposit.bind(this);
		this.withdrawal = this.withdrawal.bind(this);
		this.transfer = this.transfer.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	
	generate(e) {
		e.preventDefault();
		this.setState({...this.state, loading: true});
		this.props.generateTransactions(+this.state.numTransactions, this.props.userId, localStorage.getItem('token'))
			.then(() => {
				this.setState({...this.state, loading: false, err: ''});
				this.props.history.push('/');
			})
			.catch(err => this.setState({...this.state, loading: false, err: err.message}));
	}
	
	create(e){
		e.preventDefault();
		this.setState({...this.state, loading: true});
		this.props.createTransaction({
			amount: this.state.amount,
			recipient: this.state.recipient,
			description: this.state.description
		}, this.props.userId, localStorage.getItem('token'))
			.then(() => {
				this.setState({...this.state, loading: false, err: ''});
				this.props.history.push('/');
			})
			.catch(err => this.setState({...this.state, loading: false, err: err.message}));
	}
	
	deposit(e){
		this.setState({...this.state, 
					   recipient: 'Deposit',
					   description: 'Deposit'}, () => this.create(e));
	}
	
	withdrawal(e){
		this.setState({...this.state, 
					   recipient: 'Withdrawal', 
					   description: 'Withdrawal',
					   amount: -1*Math.abs(this.state.amount)}, () => this.create(e));
	}
	
	transfer(e){
		this.setState({...this.state, 
					   description: 'Transfer to ' + this.state.recipient,
					   amount: -1*Math.abs(this.state.amount)}, () => this.create(e));
	}
	
	onChange(e){
		this.setState({...this.state, [e.target.name]: e.target.value});
	}
	
	render() {
		const panes = [{menuItem: 'Deposit', render: () => (
							<Tab.Pane>
								{this.state.err && (<Message negative>{this.state.err}</Message>)}
								<p>Deposit money into your account.</p>
								<Form onSubmit={this.deposit}>
									<Form.Field>
										<Form.Input name='amount' value={this.state.amount} onChange={this.onChange} placeholder='Amount...' label='Amount:' />
									</Form.Field>
									<Button color='teal' type='submit' loading={this.state.loading}>Deposit</Button>
								</Form>
							</Tab.Pane>
						)},
					   {menuItem: 'Withdrawal', render: () => (
							<Tab.Pane>
							   	<p>Withdraw money into your account.</p>
							    {this.state.err && (<Message negative>{this.state.err}</Message>)}
								<Form onSubmit={this.withdrawal}>
									<Form.Field>
										<Form.Input name='amount' value={this.state.amount} onChange={this.onChange} placeholder='Amount...' label='Amount:' />
									</Form.Field>
									<Button color='teal' type='submit' loading={this.state.loading}>Withdrawal</Button>
								</Form>
							</Tab.Pane>
					   )},
					   {menuItem: 'Transfer', render: () => (
							<Tab.Pane>
							    {this.state.err && (<Message negative>{this.state.err}</Message>)}
							 	<p>Transfer money to another user.</p>
								<Form onSubmit={this.transfer}>
									<Form.Field>
										<Form.Input name='amount' value={this.state.amount} onChange={this.onChange} placeholder='Amount...' label='Amount:' />
									</Form.Field>
									<Form.Field>
										<Form.Input name='recipient' value={this.state.recipient} onChange={this.onChange} placeholder='Recipient...' label='Recipient:' />
									</Form.Field>
									<Button color='teal' type='submit' loading={this.state.loading}>Transfer</Button>
								</Form>
							</Tab.Pane>
						)},
						{menuItem: 'Automatically Generate Transactions', render: () => (
							<Tab.Pane>
								{this.state.err && (<Message negative>{this.state.err}</Message>)}
								<p>Automatically generate transactions with fake data.</p>
								<Form onSubmit={this.generate}>
									<Form.Field>
										<Form.Input name='numTransactions' value={this.state.numTransactions} onChange={this.onChange} placeholder='Number of transactions to generate...' label='Number of Transactions:' />
									</Form.Field>
									<Button color='teal' type='submit' loading={this.state.loading}>Generate</Button>
								</Form>
							</Tab.Pane>
						)}];
		return (<div>
					<Tab panes={panes} />
				</div>);
	}
}

function mapStateToProps(state){
	return {
		userId: state.authReducer.userId
	}
}

export default connect(mapStateToProps, {generateTransactions, createTransaction})(NewTransactionPage);