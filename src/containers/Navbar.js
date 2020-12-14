import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';
import './Navbar.css';

const Navbar = props => (
	<header>
		<Link to='/'><h1>BANK OF WASSERSTEIN</h1></Link>
		
		{props.username ?
			<div>
				<Link to='/' class='login-btn'>{props.username}</Link>
				<Link to='/login' class='signup-btn'>Sign Out</Link>
			</div> : 
			<div>
				<Link to='/login' class='login-btn'>Log In</Link>
				<Link to='/signup' class='signup-btn'>Sign Up</Link>
			</div>}
			
		
	</header>
);

function mapStateToProps(state){
	return {
		username: state.authReducer.username
	};
}

export default connect(mapStateToProps, {logOut})(Navbar);