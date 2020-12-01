import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Form, Button, Message} from 'semantic-ui-react';
import {signUp} from '../store/actions/auth';

class SignUp extends Component {
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
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({...this.state, loading: false, error: err.message});
			});
	}
	
	render() {
		return (
			<Table style={{width: '50%', margin: '0 auto'}}>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell textAlign='center'>
							<h3>Sign Up</h3>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>
							{this.state.error && (
								<Message negative>
									{this.state.error}
								</Message>
							)}
							<Form onSubmit={this.onSubmit} autocomplete='off'>
								<Form.Field>
									<label>Username:</label>
									<input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} required />
								</Form.Field>
								<Form.Field>
									<label>Email:</label>
									<input type='email' placeholder='email' name='email' value={this.state.email} onChange={this.onChange} required />
								</Form.Field>

								<Form.Field>
									<label>Password:</label>
									<input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} required />
								</Form.Field>
								<Form.Field>
									<label>Repeat Password:</label>
									<input type='password' placeholder='password' name='repeatPassword' value={this.state.repeatPassword} onChange={this.onChange} required />
								</Form.Field>

								<Button color='teal' type='submit' loading={this.state.loading}>Submit</Button>
							</Form>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		);
	}
}

export default connect(null, {signUp})(SignUp);