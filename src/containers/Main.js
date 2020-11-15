import {Route} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import TransactionPage from '../containers/TransactionPage';
import withAuth from '../hocs/withAuth';
import ShowTransactionPage from '../components/ShowTransactionPage';
import SignUp from '../components/SignUp';

const Main = () => (
	<div>
		<Route exact path='/' component={withAuth(TransactionPage)} />
		<Route exact path='/login' component={LoginPage} />
		<Route exact path='/transactions/:transactionId' component={ShowTransactionPage} />
		<Route exact path='/signup' component={SignUp} />
	</div>
);

export default Main;