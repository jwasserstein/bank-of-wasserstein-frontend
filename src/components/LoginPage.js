import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn, logOut} from '../store/actions/auth';
import './LoginPage.css';

class LoginPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	
	onChange = e => {
		this.setState({...this.state, [e.target.name]: e.target.value});
	}
	
	onSubmit = e => {
		e.preventDefault();
		this.props.logIn(e.target.username.value, e.target.password.value)
			.then(() => this.props.history.push('/'))
			.catch(err => console.log('Error logging in: ', err));
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label>Username: <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} /></label>
				<label>Password: <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} /></label>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}

function mapStateToProps(state){
	return {
		...state,
	};
}

export default connect(mapStateToProps, {logIn, logOut})(LoginPage);