import {Route} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import TransactionPage from '../containers/TransactionPage';

const Main = () => (
	<div>
		<Route exact path='/' component={TransactionPage} />
		<Route exact path='/login' component={LoginPage} />
	</div>
);

export default Main;