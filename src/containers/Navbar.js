import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';
import './Navbar.css';

const Navbar = props => (
	<header className='Navbar'>
		<Link to='/landing'><h1 className='Navbar-brand'>BANK OF WASSERSTEIN</h1></Link>
		{props.username ?
			<div>
				<Link to='/' className='Navbar-login-btn'>{props.username}</Link>
				<Link to='/login' className='Navbar-signup-btn' onClick={props.logOut}>Sign Out</Link>
			</div> : 
			<div>
				<Link to='/login' className='Navbar-login-btn'>Log In</Link>
				<Link to='/signup' className='Navbar-signup-btn'>Sign Up</Link>
			</div>}
	</header>
);

function mapStateToProps(state){
	return {
		username: state.authReducer.username
	};
}

export default connect(mapStateToProps, {logOut})(Navbar);