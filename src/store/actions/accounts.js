import {GET_ACCOUNTS} from '../actionTypes';
import {apiCall} from '../../services/api';

export function getAccounts(){
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try  {
                const resp = await apiCall('get', '/accounts', {});
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

export function createAccount(accountType){
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                const resp = await apiCall('post', '/accounts', {type: accountType});
                if(resp.error){
                    return reject(new Error(resp.error));
                }
                dispatch({
                    type: GET_ACCOUNTS,
                    accounts: resp
                });
                return resolve();
            } catch(err) {
                return reject(err);
            }
        })
    }
}