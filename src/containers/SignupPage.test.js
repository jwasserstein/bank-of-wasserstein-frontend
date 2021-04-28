import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import SignupPage from './SignupPage';

let store;
beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
});

it('renders without crashing', () => {
    render(<Provider store={store}><SignupPage history={{}} /></Provider>);
});

it('handles user input into fields', () => {
    render(<Provider store={store}><SignupPage history={{}} /></Provider>);

    const username = screen.getByLabelText('Username:');
    fireEvent.change(username, {target: {value: 'Hello World!'}});
    expect(username).toHaveValue('Hello World!');

    const password = screen.getByLabelText('Password:');
    fireEvent.change(password, {target: {value: 'Goodbye World!'}});
    expect(password).toHaveValue('Goodbye World!');

    const repeatPassword = screen.getByLabelText('Repeat Password:');
    fireEvent.change(repeatPassword, {target: {value: 'Hello Again World!'}});
    expect(repeatPassword).toHaveValue('Hello Again World!');
});

it('sends api request on submit', async () => {
    render(<Provider store={store}><SignupPage history={{}} /></Provider>);

    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({json: () => Promise.resolve({})});
    });

    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
});

it('redirects on successful login', async () => {
    const history = {
        push: jest.fn()
    };
    render(<Provider store={store}><SignupPage history={history} /></Provider>);

    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({json: () => Promise.resolve({token: 123})});
    });

    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(history.push).toBeCalledTimes(1));
});

it("shows an error if passwords don't match", async () => {
    render(<Provider store={store}><SignupPage history={{}} /></Provider>);

    const username = screen.getByLabelText('Username:');
    fireEvent.change(username, {target: {value: 'Bob'}});
    const password = screen.getByLabelText('Password:');
    fireEvent.change(password, {target: {value: 'thisisapassword'}});
    const repeatPassword = screen.getByLabelText('Repeat Password:');
    fireEvent.change(repeatPassword, {target: {value: 'somethingelse'}});

    fireEvent.click(screen.getByText('Submit'));
    expect(screen.queryByText("Your passwords don't match")).toBeTruthy();
});