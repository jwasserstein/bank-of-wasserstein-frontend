import {LOG_OUT, LOG_IN} from '../actionTypes';

const DEFAULT_STATE = {
	userId: '',
	username: '',
	email: ''
}

export function authReducer(state=DEFAULT_STATE, action){
	switch (action.type){
		case LOG_IN:
			return {...state, userId: action.id, username: action.username, email: action.email};
		case LOG_OUT:
			return {...state, userId: '', username: '', email: ''};
		default: 
			return state;
	}
}