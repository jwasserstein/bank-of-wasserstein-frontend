import {GET_TRANSACTIONS} from '../actionTypes';
import {apiCall} from '../../services/api';

export function getTransactions(userId, token){
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
				const resp = await apiCall('get', `https://bank-of-wasserstein-api.herokuapp.com/api/transactions/${userId}`, {}, token);
				if(resp.error){
					return reject(new Error(resp.error));
				}
				const transactions = resp.sort((a, b) => b.transactionNumber - a.transactionNumber);
				dispatch({
					type: GET_TRANSACTIONS,
					transactions
				});
				return resolve();
			} catch(err) {
				return reject(err);
			}
		});
	};
}

export function generateTransactions(num, userId, token){
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
				const resp = await apiCall('post', `https://bank-of-wasserstein-api.herokuapp.com/api/transactions/${userId}/generate/${num}`, {}, token);
				
				if(resp.error) {
					return reject(new Error(resp.error));
				}
				
				const transactions = resp.sort((a, b) => b.transactionNumber - a.transactionNumber);
				dispatch({
					type: GET_TRANSACTIONS,
					transactions
				});
				return resolve();
			} catch(err) {
				return reject(err);
			}
		});
	}
}

export function createTransaction(transaction, userId, token){
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
				const resp = await apiCall('post', `https://bank-of-wasserstein-api.herokuapp.com/api/transactions/${userId}`, transaction, token);
				
				if(resp.error){
					return reject(new Error(resp.error));
				}
				
				const transactions = resp.sort((a, b) => b.transactionNumber - a.transactionNumber);
				dispatch({
					type: GET_TRANSACTIONS,
					transactions
				});
				return resolve();
			} catch(err){
				return reject(err);
			}
		});
	}
}