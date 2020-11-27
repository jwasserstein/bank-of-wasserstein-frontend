import React from 'react';
import {Segment, Placeholder} from 'semantic-ui-react';

const Balance = props => (
	<Segment textAlign='center' compact style={{margin: '0 auto 14px auto'}}>
			<span style={{fontWeight: 'bold'}}>Available Balance</span>: {props.lastTransaction ? '$' + props.lastTransaction.accountBalance : (<Placeholder>
											<Placeholder.Paragraph>
												<Placeholder.Line />
											</Placeholder.Paragraph>
										</Placeholder>)}
	</Segment>
);

export default Balance;