import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../store/actions/auth';
import SignupForm from '../components/SignupForm';
import Navbar from './Navbar';
import Message from '../components/Message';
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
				this.setState({...this.state, loading: false, error: err.message});
			});
	}
	
	render() {
		return (
			<div>
				<Navbar />
				<h2 className='SignupPage-message'>Make an account.</h2>
				{this.state.error && (
					<Message>
						{this.state.error}
					</Message>
				)}
				<SignupForm onSubmit={this.onSubmit} 
							onChange={this.onChange}
							username={this.state.username} 
							password={this.state.password}
							repeatPassword={this.state.repeatPassword}
							email={this.state.email}
							loading={this.state.loading}
							/>
			</div>
		);
	}
}

export default connect(null, {signUp})(SignupPage);