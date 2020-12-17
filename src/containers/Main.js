import {Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import TransactionPage from './TransactionPage';
import withAuth from '../hocs/withAuth';
import SignupPage from './SignupPage';
import NewTransactionPage from './NewTransactionPage';
import LandingPage from './LandingPage';

const Main = () => (
	<Switch>
		<Route path='/transactions/new' component={withAuth(NewTransactionPage)} />
		<Route path='/signup' component={SignupPage} />
		<Route path='/login' component={LoginPage} />
		<Route path='/transactions' component={withAuth(TransactionPage)} />
		<Route path='/' component={LandingPage} />
	</Switch>
);

export default Main;