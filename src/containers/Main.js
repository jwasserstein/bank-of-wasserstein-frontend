import {Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import TransactionPage from './TransactionPage';
import withAuth from '../hocs/withAuth';
import ShowTransactionPage from './ShowTransactionPage';
import SignUpPage from './SignUpPage';

const Main = () => (
	<div>
		<Route exact path='/' component={withAuth(TransactionPage)} />
		<Route exact path='/login' component={LoginPage} />
		<Route exact path='/transactions/:transactionId' component={ShowTransactionPage} />
		<Route exact path='/signup' component={SignUpPage} />
	</div>
);

export default Main;