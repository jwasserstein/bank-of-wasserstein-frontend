import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateTransactions, createTransaction} from '../store/actions/transactions';
import {Button, Tab, Form} from 'semantic-ui-react';

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
	
	onChange(e){
		this.setState({...this.state, [e.target.name]: e.target.value});
	}
	
	render() {
		const panes = [{menuItem: 'Deposit', render: () => {}},
					   {menuItem: 'Withdrawl', render: () => {}},
					   {menuItem: 'Transfer', render: () => (
							<Tab.Pane>
								<Form onSubmit={this.create}>
									<Form.Field>
										<Form.Input name='amount' value={this.state.amount} onChange={this.onChange} placeholder='Amount...' label='Amount:' />
									</Form.Field>
									<Form.Field>
										<Form.Input name='recipient' value={this.state.recipient} onChange={this.onChange} placeholder='Recipient...' label='Recipient:' />
									</Form.Field>
									<Form.Field>
										<Form.Input name='description' value={this.state.description} onChange={this.onChange} placeholder='Description...' label='Description:' />
									</Form.Field>
									<Button color='teal' type='submit' loading={this.state.loading}>Create</Button>
								</Form>
							</Tab.Pane>
						)},
						{menuItem: 'Automatically Generate Transactions', render: () => (
							<Tab.Pane>
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