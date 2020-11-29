import {Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import TransactionPage from './TransactionPage';
import withAuth from '../hocs/withAuth';
import ShowTransactionPage from './ShowTransactionPage';
import SignUpPage from './SignUpPage';
import NewTransactionPage from './NewTransactionPage';

const Main = () => (
	<Switch>
		<Route path='/transactions/new' component={NewTransactionPage} />
		<Route path='/transactions/:transactionId' component={ShowTransactionPage} />
		<Route path='/signup' component={SignUpPage} />
		<Route path='/login' component={LoginPage} />
		<Route path='/' component={withAuth(TransactionPage)} />
	</Switch>
);

export default Main;