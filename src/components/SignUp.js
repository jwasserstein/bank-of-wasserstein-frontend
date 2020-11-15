import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Form, Button} from 'semantic-ui-react';
import {signUp} from '../store/actions/auth';

class SignUp extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			repeatPassword: ''
		};
	}
	
	onChange = e => {
		this.setState({...this.state, [e.target.name]: e.target.value});
	}
	
	onSubmit = e => {
		e.preventDefault();
		if(this.state.password !== this.state.repeatPassword){
			return console.log("Passwords don't match");
		}
		this.props.signUp(this.state.username, this.state.email, this.state.password)
			.then(() => this.props.history.push('/'))
			.catch(err => console.log(err));
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
							<Form onSubmit={this.onSubmit}>
								<Form.Field>
									<label>Username:</label>
									<input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} required />
								</Form.Field>
								<Form.Field>
									<label>Email:</label>
									<input type='text' placeholder='email' name='email' value={this.state.email} onChange={this.onChange} required />
								</Form.Field>

								<Form.Field>
									<label>Password:</label>
									<input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} required />
								</Form.Field>
								<Form.Field>
									<label>Repeat Password:</label>
									<input type='password' placeholder='password' name='repeatPassword' value={this.state.repeatPassword} onChange={this.onChange} required />
								</Form.Field>

								<Button color='teal' type='submit'>Submit</Button>
							</Form>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		);
	}
}

function mapStateToProps(state){
	return {...state};
}

export default connect(mapStateToProps, {signUp})(SignUp);