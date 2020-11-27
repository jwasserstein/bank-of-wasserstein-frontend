import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';
import {Menu, Button} from 'semantic-ui-react';

const Banner = props => (
	<Menu color='teal'>
		<Menu.Item as={Link} to='/' header>Bank of Wasserstein</Menu.Item>
		<Menu.Menu position='right'>
				{props.authReducer.username ? 
					[<Menu.Item as={Link} to='/' key='username'>{props.authReducer.username}</Menu.Item>,
					<Menu.Item as={Link} to='/login' onClick={props.logOut} key='signout'>Sign Out</Menu.Item>] :
					[<Menu.Item as={Link} to='/login' key='signin'>Sign In</Menu.Item>,
					 <Menu.Item as={Link} to='/signup' key='signup'><Button color='teal'>Sign Up</Button></Menu.Item>]}
		</Menu.Menu>
	</Menu>
);

function mapStateToProps(state){
	return {...state};
}

export default connect(mapStateToProps, {logOut})(Banner);