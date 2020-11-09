import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';
import './Banner.css';

const Banner = props => {
	return (
		<div className="banner">
			<div className="banner-left">
				<Link to='/'>BANK OF WASSERSTEIN</Link>
			</div>
			<div className="banner-right">
				{props.authReducer.username ? 
					<span><a className='name'>{props.authReducer.username}</a> | <Link to='/login' onClick={props.logOut}>Sign Out</Link></span> :
					<span><Link to='/login'>Sign In</Link></span>}
			</div>
		</div>
	);
}

function mapStateToProps(state){
	return {...state};
}

export default connect(mapStateToProps, {logOut})(Banner);