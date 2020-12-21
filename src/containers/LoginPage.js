import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn} from '../store/actions/auth';
import Navbar from './Navbar';
import Message from '../components/Message';
import Form from '../components/Form';
import {getAccounts} from '../store/actions/accounts';
import './LoginPage.css';

class LoginPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			loading: false,
			error: ''
		};
	}
	
	onChange = e => {
		this.setState({...this.state, [e.target.name]: e.target.value});
	}
	
	onSubmit = e => {
		e.preventDefault();
		this.setState({...this.state, loading: true})
		this.props.logIn(e.target.username.value, e.target.password.value)
			.then(() => {
				this.setState({...this.state, loading: false, error: ''});
				this.props.history.push('/accounts');
			})
			.catch(err => {
				this.setState({...this.state, loading: false, error: err});
			});
	}
	
	render() {
		const fields = [
			{label: 'Username', name: 'username', type: 'text', value: this.state.username},
			{label: 'Password', name: 'password', type: 'password', value: this.state.password},	
		];

		return (
			<div>
				<Navbar />
				<h2 className='LoginPage-message' key='LoginPage-message'>Log in to Bank of Wasserstein.</h2>
				{this.state.error && (
					<Message color='red'>
						{this.state.error}
					</Message>
				)}
				<Form onSubmit={this.onSubmit} 
						onChange={this.onChange} 
						loading={this.state.loading}
						fields={fields}	/>
			</div>
		);
	}
}

export default connect(null, {logIn, getAccounts})(LoginPage);