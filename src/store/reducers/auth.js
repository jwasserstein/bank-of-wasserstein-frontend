import {LOG_OUT, LOG_IN} from '../actionTypes';

const DEFAULT_STATE = {
	userId: '',
	username: '',
	joinDate: '',
	loggedInAt: 0
}

export function authReducer(state=DEFAULT_STATE, action){
	switch (action.type){
		case LOG_IN:
			return {...state, userId: action.id, username: action.username, joinDate: action.joinDate, loggedInAt: Date.now()};
		case LOG_OUT:
			return DEFAULT_STATE;
		default: 
			return state;
	}
}