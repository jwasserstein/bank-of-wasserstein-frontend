import React from 'react';
import {Segment, Placeholder} from 'semantic-ui-react';

const Balance = props => {
	let display;
	
	if(props.lastUpdated){
		if(props.transactions && props.transactions.length){
			display = '$' + props.transactions[0].accountBalance.toFixed(2);
		} else {
			display = '$0.00';
		}
	} else {
		display = (<Placeholder>
						<Placeholder.Paragraph>
							<Placeholder.Line />
						</Placeholder.Paragraph>
					</Placeholder>);
	}
	
	return (
		<Segment textAlign='center' compact style={{margin: '0 auto 14px auto'}}>
			<span style={{fontWeight: 'bold'}}>Available Balance</span>: {display}
		</Segment>
	);
}

export default Balance;