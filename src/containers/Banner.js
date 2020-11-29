import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';
import {Menu, Button} from 'semantic-ui-react';

const Banner = props => (
	<Menu>
		<Menu.Item as={Link} to='/' header>Bank of Wasserstein</Menu.Item>
		{props.username && [<Menu.Item as={Link} to='/transactions/new' key='newTransaction'>New Transaction</Menu.Item>]}
		
		<Menu.Menu position='right'>
				{props.username ? 
					[<Menu.Item as={Link} to='/' key='username'>{props.username}</Menu.Item>,
					<Menu.Item as={Link} to='/login' onClick={props.logOut} key='signout'>Sign Out</Menu.Item>] :
					[<Menu.Item as={Link} to='/login' key='signin'>Sign In</Menu.Item>,
					 <Menu.Item as={Link} to='/signup' key='signup'><Button color='teal'>Sign Up</Button></Menu.Item>]}
		</Menu.Menu>
	</Menu>
);

function mapStateToProps(state){
	return {
		username: state.authReducer.username
	};
}

export default connect(mapStateToProps, {logOut})(Banner);