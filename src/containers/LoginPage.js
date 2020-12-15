import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn} from '../store/actions/auth';
import LoginForm from '../components/LoginForm';
import Navbar from './Navbar';
import ErrorMessage from '../components/ErrorMessage';
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
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({...this.state, loading: false, error: err});
			});
	}
	
	render() {
		return (
			<main>
				<Navbar />
				<h2 className='LoginPage-message' key='LoginPage-message'>Log in to Bank of Wasserstein.</h2>
				<LoginForm onSubmit={this.onSubmit} 
							username={this.state.username}
							password={this.state.password} 
							onChange={this.onChange} 
							loading={this.state.loading} />
				{this.state.error && (
					<ErrorMessage>
						{this.state.error}
					</ErrorMessage>
				)}
			</main>
		);
	}
}

export default connect(null, {logIn})(LoginPage);