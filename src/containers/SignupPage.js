import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../store/actions/auth';
import Message from '../components/Message';
import Form from '../components/Form';
import './SignupPage.css';

class SignupPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			repeatPassword: '',
			loading: false,
			error: ''
		};
	}
	
	onChange = e => {
		this.setState({...this.state, [e.target.name]: e.target.value});
	}
	
	onSubmit = e => {
		e.preventDefault();
		this.setState({...this.state, loading: true});
		if(this.state.password !== this.state.repeatPassword){
			return this.setState({...this.state, loading: false, error: "Your passwords don't match"});
		}
		this.props.signUp(this.state.username, this.state.email, this.state.password)
			.then(() => {
				this.setState({...this.state, loading: false, error: ''});
				this.props.history.push('/transactions');
			})
			.catch(err => {
				this.setState({...this.state, loading: false, error: err});
			});
	}
	
	render() {
		const fields = [
			{label: 'Username', name: 'username', type: 'text', value: this.state.username},
			{label: 'Email', name: 'email', type: 'email', value: this.state.email},
			{label: 'Password', name: 'password', type: 'password', value: this.state.password},
			{label: 'Repeat Password', name: 'repeatPassword', type: 'password', value: this.state.repeatPassword},
		];

		return (
			<div>
				<h2 className='SignupPage-message'>Make an account.</h2>
				{this.state.error && (
					<Message>
						{this.state.error}
					</Message>
				)}
				<Form onSubmit={this.onSubmit} 
						onChange={this.onChange}
						fields={fields}
						loading={this.state.loading} />
			</div>
		);
	}
}

export default connect(null, {signUp})(SignupPage);