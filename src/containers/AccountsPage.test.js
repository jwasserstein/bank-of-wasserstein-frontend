import React from 'react';
import {render, screen} from '@testing-library/react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import {GET_ACCOUNTS} from '../store/actionTypes';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import AccountsPage from './AccountsPage';

let store;
beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
});

it('renders without crashing', () => {
    // don't need to populate store, default data is good enough
    render(<Provider store={store}><Router><AccountsPage /></Router></Provider>);
});

it('renders correct account types and balances', () => {
    const accounts = [
        {
            type: 'Checking',
            accountBalance: 280.13
        },
        {
            type: 'Savings',
            accountBalance: 1700.95
        }
    ];
    store.dispatch({type: GET_ACCOUNTS, accounts: accounts, lastUpdated: Date.now()}); // populate redux store
    render(<Provider store={store}><Router><AccountsPage /></Router></Provider>);
    expect(screen.queryByText('Checking Account')).toBeTruthy();
    expect(screen.queryByText('Savings Account')).toBeTruthy();
    expect(screen.queryByText('$280.13')).toBeTruthy();
    expect(screen.queryByText('$1700.95')).toBeTruthy();
});

it('renders correct overall balance', () => {
    const accounts = [
        {
            type: 'Checking',
            accountBalance: 280.13
        },
        {
            type: 'Savings',
            accountBalance: 1700.95
        }
    ];
    store.dispatch({type: GET_ACCOUNTS, accounts: accounts, lastUpdated: Date.now()}); // populate redux store
    render(<Provider store={store}><Router><AccountsPage /></Router></Provider>);
    expect(screen.getByTestId('balance')).toHaveTextContent('1981.08');
});

it('has new account button', () => {
    render(<Provider store={store}><Router><AccountsPage /></Router></Provider>);
    const newAccount = screen.queryByText('New Account');
    expect(newAccount).toBeTruthy();

    // Matches any prefix URL ending in /accounts/new such as http://localhost:3000/accounts/new
    expect(newAccount.href).toMatch(/^.*\/accounts\/new$/);
});

it('has a title', () => {
    render(<Provider store={store}><Router><AccountsPage /></Router></Provider>);
    expect(screen.queryByText('Select an account.')).toBeTruthy();
});