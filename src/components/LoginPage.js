import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn, logOut} from '../store/actions/auth';
import {Form, Input, Button, Segment} from 'semantic-ui-react';

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
			<Segment style={{width: '50%', margin: '0 auto'}}>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<label>Username:</label>
						<input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} />
					</Form.Field>

					<Form.Field>
						<label>Password:</label>
						<input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} />
					</Form.Field>

					<Button type='submit'>Submit</Button>
				</Form>
			</Segment>
		);
	}
}

function mapStateToProps(state){
	return {
		...state,
	};
}

export default connect(mapStateToProps, {logIn, logOut})(LoginPage);