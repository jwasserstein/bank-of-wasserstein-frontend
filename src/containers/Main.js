import {Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import TransactionPage from './TransactionPage';
import withAuth from '../hocs/withAuth';
import ShowTransactionPage from './ShowTransactionPage';
import SignUpPage from './SignUpPage';
import NewTransactionPage from './NewTransactionPage';
import LandingPage from './LandingPage';

const Main = () => (
	<Switch>
		<Route path='/transactions/new' component={withAuth(NewTransactionPage)} />
		<Route path='/transactions/:transactionId' component={withAuth(ShowTransactionPage)} />
		<Route path='/signup' component={SignUpPage} />
		<Route path='/login' component={LoginPage} />
		<Route path='/landing' component={LandingPage} />
		<Route path='/' component={withAuth(TransactionPage)} />
	</Switch>
);

export default Main;