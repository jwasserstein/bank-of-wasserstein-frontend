import {GET_TRANSACTIONS} from '../actionTypes';
import {apiCall} from '../../services/api';

export function getTransactions(userId, token){
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
				const resp = await apiCall('get', `https://testcontainer-sadjv2.run-us-west2.goorm.io/api/transactions/${userId}`, {}, token);
				if(resp.err){ //refactor this to use status code
					return reject(resp.err);
				}
				const transactions = resp.sort((a, b) => b.transactionNumber - a.transactionNumber);
				dispatch({
					type: GET_TRANSACTIONS,
					transactions
				});
				return resolve();
			} catch(err) {
				return reject(err.message);
			}
		});
	};
}