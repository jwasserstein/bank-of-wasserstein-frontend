import {GET_ACCOUNTS, REMOVE_ACCOUNTS} from '../actionTypes';

const DEFAULT_STATE = {
    accounts: []
};

export function accountReducer(state=DEFAULT_STATE, action){
    switch(action.type){
        case GET_ACCOUNTS:
            return {...state, accounts: action.accounts, lastUpdated: Date.now()}
        case REMOVE_ACCOUNTS:
            return {...state, accounts: [], lastUpdated: 0}
        default:
            return state;
    }
}