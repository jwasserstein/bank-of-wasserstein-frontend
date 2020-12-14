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
				<Link to='/' className='login-btn'>{props.username}</Link>
				<Link to='/login' className='signup-btn'>Sign Out</Link>
			</div> : 
			<div>
				<Link to='/login' className='login-btn'>Log In</Link>
				<Link to='/signup' className='signup-btn'>Sign Up</Link>
			</div>}
	</header>
);

function mapStateToProps(state){
	return {
		username: state.authReducer.username
	};
}

export default connect(mapStateToProps, {logOut})(Navbar);