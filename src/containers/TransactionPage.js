import './TransactionPage.css';

const TransactionPage = () => (
	<div>
		<div className='balance-container'>
			Available Balance: $1,000.00
		</div>
		
		<table className='transaction-container'>
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Amount</th>
					<th>Available Balance</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default TransactionPage;