import React, {Component} from 'react';
import {connect} from 'react-redux';

function withAuth(ComponentToRender){
	class Authenticate extends Component {
		componentDidMount(){
			if(!this.props.authReducer.userId){
				console.log('Youre not logged in');
				this.props.history.push('/login');
			}
		}
		
		componentDidUpdate(){
			if(!this.props.authReducer.userId){
				console.log('Youre not logged in');
				this.props.history.push('/login');
			}
		}
		
		render(){
			return <ComponentToRender />;
		}
	}
	
	function mapStateToProps(state){
		return {...state};
	}
	
	return connect(mapStateToProps)(Authenticate);
}

export default withAuth;