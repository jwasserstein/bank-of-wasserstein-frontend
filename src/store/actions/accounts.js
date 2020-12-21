import {GET_ACCOUNTS, UPDATE_BALANCE} from '../actionTypes';
import {apiCall} from '../../services/api';

export function getAccounts(token){
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try  {
                const resp = await apiCall('get', '/accounts', {}, token);
                if(resp.error){
                    return reject(new Error(resp.error));
                }
                dispatch({
                    type: GET_ACCOUNTS,
                    accounts: resp
                });
                return resolve();
            } catch (err) {
                return reject(err);
            }
        });
    }
}