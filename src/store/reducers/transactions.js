import {GET_TRANSACTIONS, REMOVE_TRANSACTIONS} from '../actionTypes';

const DEFAULT_STATE = {
	transactions: []
};

export function transactionReducer(state=DEFAULT_STATE, action){
	switch(action.type){
		case GET_TRANSACTIONS:
			return {...state, transactions: action.transactions, lastUpdated: Date.now()}
		case REMOVE_TRANSACTIONS:
			return {...state, transactions: [], lastUpdated: 0}
		default:
			return state;
	}
}