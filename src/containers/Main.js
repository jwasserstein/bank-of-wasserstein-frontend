import {Route} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import TransactionPage from '../components/TransactionPage';
import withAuth from '../hocs/withAuth';

const Main = () => (
	<div>
		<Route exact path='/' component={withAuth(TransactionPage)} />
		<Route exact path='/login' component={LoginPage} />
	</div>
);

export default Main;