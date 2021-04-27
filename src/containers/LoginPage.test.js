import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from '../store/reducers';
import LoginPage from './LoginPage';

let store;
beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
});

it('renders without crashing', () => {
    render(<Provider store={store}><LoginPage history={{}} /></Provider>);
});

it('has a title', () => {
    render(<Provider store={store}><LoginPage history={{}} /></Provider>);
    expect(screen.queryByText('Log in to Bank of Wasserstein.')).toBeTruthy();
});

it('has the correct form fields', () => {
    render(<Provider store={store}><LoginPage history={{}} /></Provider>);
    expect(screen.queryByLabelText('Username:')).toBeTruthy();
    expect(screen.queryByLabelText('Password:')).toBeTruthy();
});

it('handles user input correctly', () => {
    render(<Provider store={store}><LoginPage history={{}} /></Provider>);
    const username = screen.getByLabelText('Username:');
    const password = screen.getByLabelText('Password:');
    fireEvent.change(username, {target: {value: 'Hello World!'}});
    fireEvent.change(password, {target: {value: 'Goodbye World!'}});
    expect(username).toHaveValue('Hello World!');
    expect(password).toHaveValue('Goodbye World!');
});

it('handles errors correctly', async () => {
    render(<Provider store={store}><LoginPage history={{}} /></Provider>);
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve({error: "It didn't work"})
        });
    });
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => expect(screen.queryByText("It didn't work")).toBeTruthy());
});

it('redirects on successful login', async () => {
    const history = {
        push: jest.fn()
    };
    render(<Provider store={store}><LoginPage history={history} /></Provider>);
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve({token: "123"})
        });
    });
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => expect(history.push).toBeCalled());
});