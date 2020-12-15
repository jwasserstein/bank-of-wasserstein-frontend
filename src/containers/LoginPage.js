import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn} from '../store/actions/auth';
// import {Message} from 'semantic-ui-react';
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

		// return (
		// 	<Table style={{width: '50%', margin: '0 auto'}}>
		// 		<Table.Header>
		// 			<Table.Row>
		// 				<Table.HeaderCell textAlign='center'>
		// 					<h3>Log In</h3>
		// 				</Table.HeaderCell>
		// 			</Table.Row>
		// 		</Table.Header>
		// 		<Table.Body>
		// 			<Table.Row>
		// 				<Table.Cell>
		// 					{this.state.error && (
		// 						<Message negative>
		// 							{this.state.error}
		// 						</Message>
		// 					)}
		// 					<Form onSubmit={this.onSubmit} autoComplete='off'>
		// 						<Form.Field>
		// 							<label>Username:</label>
		// 							<Input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} required/>
		// 						</Form.Field>

		// 						<Form.Field>
		// 							<label>Password:</label>
		// 							<Input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} required/>
		// 						</Form.Field>

		// 						<Button color='teal' type='submit' loading={this.state.loading}>Submit</Button>
		// 					</Form>
		// 				</Table.Cell>
		// 			</Table.Row>
		// 		</Table.Body>
		// 	</Table>
		// );
	}
}

export default connect(null, {logIn})(LoginPage);