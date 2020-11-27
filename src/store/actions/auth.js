import {LOG_IN, LOG_OUT, REMOVE_TRANSACTIONS} from '../actionTypes';
import {apiCall} from '../../services/api';

export function logIn(username, password) {
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
				const resp = await apiCall('post', 'https://testcontainer-sadjv2.run-us-west2.goorm.io/api/auth/signin', {username, password}, '');
				if(resp.error){ // refactor this to check for status code
					return reject(resp.error);
				}
				if(!resp.token){
					return reject('Error getting token');
				}
				localStorage.setItem('token', resp.token);
				dispatch({type: LOG_IN, ...resp});
				return resolve();
			} catch(err) {
				return reject(err.message);
			}
		});
	}
}

export function signUp(username, email, password){
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
				const resp = await apiCall('post', 'https://testcontainer-sadjv2.run-us-west2.goorm.io/api/auth/signup', {username, email, password}, '');
				if(resp.error){
					return reject(resp.error);
				}
				if(!resp.token){
					return reject('Error getting token');
				}
				localStorage.setItem('token', resp.token);
				dispatch({type: LOG_IN, ...resp});
				return resolve();
			} catch(err) {
				return reject(err.message);
			}
		});
	}
}

export function logOut() {
	return dispatch => {
		localStorage.removeItem('token');
		dispatch({type: LOG_OUT});
		dispatch({type: REMOVE_TRANSACTIONS});
	}
}