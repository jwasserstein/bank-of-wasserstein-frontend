import React from 'react';
import {Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';

const Balance = props => (
	<Segment textAlign='center' compact style={{margin: '0 auto 14px auto'}}>
		<span style={{fontWeight: 'bold'}}>Available Balance</span>: {props.lastTransaction ? '$' + props.lastTransaction.accountBalance : 'Loading...'}
	</Segment>
);

function mapStateToProps(state){
	return {
		lastTransaction: state.transactionReducer.transactions[0]
	};
}

export default connect(mapStateToProps)(Balance);