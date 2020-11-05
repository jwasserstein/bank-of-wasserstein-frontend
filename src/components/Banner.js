import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css';

const Banner = props => {
	return (
		<div className="banner">
			<div className="banner-left">
				<Link to='/'>BANK OF WASSERSTEIN</Link>
			</div>
			<div className="banner-right">
				{props.user ? 
					<span><a className='name'>{props.user}</a> | <Link to='/login'>Sign Out</Link></span> :
					<span><Link to='/login'>Sign In</Link></span>}
					
			</div>
		</div>
	);
}

export default Banner;