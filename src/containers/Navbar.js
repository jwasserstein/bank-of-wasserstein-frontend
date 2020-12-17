import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';
import './Navbar.css';

class Navbar extends Component{
	constructor(props){
		super(props);
		this.state = {menuActive: ''};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(){
		if(this.state.menuActive === ''){
			this.setState({menuActive: 'active'});
		} else {
			this.setState({menuActive: ''});
		}
	}

	render() {
		return (
			<header className={'Navbar ' + this.state.menuActive}>
				<Link to='/landing' className='Navbar-brand'><h1>BANK OF WASSERSTEIN</h1></Link>
				<div className='Navbar-burger' onClick={this.toggleMenu}>
					<span className='Navbar-bar'></span>
					<span className='Navbar-bar'></span>
					<span className='Navbar-bar'></span>
				</div>
				{this.props.username ?
					<div className='Navbar-links'>
						<Link to='/' className='Navbar-login-btn'>{this.props.username}</Link>
						<Link to='/login' className='Navbar-signup-btn' onClick={this.props.logOut}>Sign Out</Link>
					</div> : 
					<div className='Navbar-links'>
						<Link to='/login' className='Navbar-login-btn'>Log In</Link>
						<Link to='/signup' className='Navbar-signup-btn'>Sign Up</Link>
					</div>}
			</header>
		);
	}
} 

function mapStateToProps(state){
	return {
		username: state.authReducer.username
	};
}

export default connect(mapStateToProps, {logOut})(Navbar);