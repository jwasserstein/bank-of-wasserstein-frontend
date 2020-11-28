import React, {Component} from 'react';
import {connect} from 'react-redux';

function withAuth(ComponentToRender){
	class Authenticate extends Component {
		componentDidMount(){
			if(!this.props.userId){
				this.props.history.push('/login');
			}
		}
		
		componentDidUpdate(){
			if(!this.props.userId){
				this.props.history.push('/login');
			}
		}
		
		render(){
			return <ComponentToRender />;
		}
	}
	
	function mapStateToProps(state){
		return {
			userId: state.authReducer.userId
		};
	}
	
	return connect(mapStateToProps)(Authenticate);
}

export default withAuth;