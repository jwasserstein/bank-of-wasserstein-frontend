import {Segment, Table} from 'semantic-ui-react';

const TransactionPage = () => (
	<div>
		<Segment textAlign='center' compact style={{margin: '0 auto 14px auto'}}>
			<span style={{fontWeight: 'bold'}}>Available Balance</span>: $1,000.00
		</Segment>
		
		
		
		<Table celled striped>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Date</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell>Amount</Table.HeaderCell>
					<Table.HeaderCell>Available Balance</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>1</Table.Cell>
					<Table.Cell>2</Table.Cell>
					<Table.Cell>3</Table.Cell>
					<Table.Cell>4</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>5</Table.Cell>
					<Table.Cell>6</Table.Cell>
					<Table.Cell>7</Table.Cell>
					<Table.Cell>8</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>9</Table.Cell>
					<Table.Cell>10</Table.Cell>
					<Table.Cell>11</Table.Cell>
					<Table.Cell>12</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	</div>
);

export default TransactionPage;