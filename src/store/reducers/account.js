import {GET_ACCOUNTS, REMOVE_ACCOUNTS, UPDATE_BALANCE} from '../actionTypes';

const DEFAULT_STATE = {
    accounts: []
};

export function accountReducer(state=DEFAULT_STATE, action){
    switch(action.type){
        case GET_ACCOUNTS:
            return {...state, accounts: action.accounts, lastUpdated: Date.now()}
        case REMOVE_ACCOUNTS:
            return {...state, accounts: [], lastUpdated: 0}
        case UPDATE_BALANCE:
            const accounts = state.accounts.map(a => {
                if(a._id !== action.accountId) return a;
                return {...a, accountBalance: action.accountBalance, lastUpdated: Date.now()};
            });
            return {...state, accounts};
        default:
            return state;
    }
}