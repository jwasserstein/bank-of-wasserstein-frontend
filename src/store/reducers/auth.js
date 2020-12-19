import {LOG_OUT, LOG_IN} from '../actionTypes';

const DEFAULT_STATE = {
	userId: '',
	username: '',
	email: ''
}

export function authReducer(state=DEFAULT_STATE, action){
	switch (action.type){
		case LOG_IN:
			return {...state, userId: action.id, username: action.username, email: action.email, joinDate: action.joinDate, loggedInAt: Date.now()};
		case LOG_OUT:
			return {...state, userId: '', username: '', email: '', joinDate: 0, loggedInAt: 0};
		default: 
			return state;
	}
}