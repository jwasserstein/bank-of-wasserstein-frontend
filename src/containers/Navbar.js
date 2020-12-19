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
			<div>
				<div style={{height: '30px'}}></div>
				<header className={'Navbar ' + this.state.menuActive}>
					<div className='Navbar-burger' onClick={this.toggleMenu}>
						<span className='Navbar-bar'></span>
						<span className='Navbar-bar'></span>
						<span className='Navbar-bar'></span>
					</div>

					<Link to='/' className='Navbar-brand'><h1>BANK OF WASSERSTEIN</h1></Link>
					<div className='Navbar-links-left'>
						<Link to='/' className='Navbar-link'>Home</Link>
						<Link to='/transactions' className='Navbar-link'>Transactions</Link>
						<Link to='/about' className='Navbar-link'>About</Link>
					</div>
					{this.props.username ?
						<div className='Navbar-links-right'>
							<Link to='/profile' className='Navbar-link'>{this.props.username}</Link>
							<Link to='/login' className='Navbar-link Navbar-signup-btn' onClick={this.props.logOut}>Sign Out</Link>
						</div> : 
						<div className='Navbar-links-right'>
							<Link to='/login' className='Navbar-link'>Log In</Link>
							<Link to='/signup' className='Navbar-link Navbar-signup-btn'>Sign Up</Link>
						</div>}
				</header>
			</div>
		);
	}
} 

function mapStateToProps(state){
	return {
		username: state.authReducer.username
	};
}

export default connect(mapStateToProps, {logOut})(Navbar);