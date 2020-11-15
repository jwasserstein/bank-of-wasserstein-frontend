import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn, logOut} from '../store/actions/auth';
import {Form, Input, Button, Table, Message} from 'semantic-ui-react';

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
				console.log('Error logging in: ', err);
			});
	}
	
	render() {
		return (
			<Table style={{width: '50%', margin: '0 auto'}}>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell textAlign='center'>
							<h3>Log In</h3>
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
							<Form onSubmit={this.onSubmit}>
								<Form.Field>
									<label>Username:</label>
									<input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} required/>
								</Form.Field>

								<Form.Field>
									<label>Password:</label>
									<input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} required/>
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

function mapStateToProps(state){
	return {
		...state,
	};
}

export default connect(mapStateToProps, {logIn, logOut})(LoginPage);