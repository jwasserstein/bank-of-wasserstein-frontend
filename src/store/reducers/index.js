import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {transactionReducer} from './transactions';

const rootReducer = combineReducers({
	authReducer,
	transactionReducer
});

export default rootReducer;