import {GET_TRANSACTIONS} from '../actionTypes';

const DEFAULT_STATE = {
	transactions: []
};

export function transactionReducer(state=DEFAULT_STATE, action){
	switch(action.type){
		case GET_TRANSACTIONS:
			return {...state, transactions: action.transactions}
		default:
			return state;
	}
}