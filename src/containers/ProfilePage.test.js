import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {createStore} from 'redux';
import rootReducer from '../store/reducers';
import {Provider} from 'react-redux';
import ProfilePage from './ProfilePage';

let store;
beforeEach(() => {
    store = createStore(rootReducer);
});

it('renders without crashing', () => {
    render(<Provider store={store}><ProfilePage /></Provider>);
});

it('renders correct username and joinDate', () => {
    store.dispatch({
        type: 'LOG_IN',
        username: 'Bob',
        joinDate: '2021-04-27T11:00:51.694Z',
        id: '123',
        loggedInAt: 123
    });
    render(<Provider store={store}><ProfilePage /></Provider>);
    expect(screen.queryByText('Bob')).toBeTruthy();
    expect(screen.queryByText('04/27/2021 7:00AM')).toBeTruthy();
});

it('handles user input into fields', () => {
    store.dispatch({
        type: 'LOG_IN',
        username: 'Bob',
        joinDate: '2021-04-27T11:00:51.694Z',
        id: '123',
        loggedInAt: 123
    });
    render(<Provider store={store}><ProfilePage /></Provider>);

    const currPass = screen.getByLabelText('Current Password:');
    fireEvent.change(currPass, {target: {value: 'Hello World!'}});
    expect(currPass).toHaveValue('Hello World!');

    const newPass = screen.getByLabelText('New Password:');
    fireEvent.change(newPass, {target: {value: 'Goodbye World!'}});
    expect(newPass).toHaveValue('Goodbye World!');

    const repeatPass = screen.getByLabelText('Repeat New Password:');
    fireEvent.change(repeatPass, {target: {value: 'Hello Again World!'}});
    expect(repeatPass).toHaveValue('Hello Again World!');
});

it('sends API request on submit', async () => {
    store.dispatch({
        type: 'LOG_IN',
        username: 'Bob',
        joinDate: '2021-04-27T11:00:51.694Z',
        id: '123',
        loggedInAt: 123
    });
    render(<Provider store={store}><ProfilePage /></Provider>);

    const currPass = screen.getByLabelText('Current Password:');
    fireEvent.change(currPass, {target: {value: 'Hello World!'}});
    expect(currPass).toHaveValue('Hello World!');

    const newPass = screen.getByLabelText('New Password:');
    fireEvent.change(newPass, {target: {value: 'Goodbye World!'}});
    expect(newPass).toHaveValue('Goodbye World!');

    const repeatPass = screen.getByLabelText('Repeat New Password:');
    fireEvent.change(repeatPass, {target: {value: 'Goodbye World!'}});
    expect(repeatPass).toHaveValue('Goodbye World!');

    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({json: () => Promise.resolve({})});
    });
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
});

it("displays a message when passwords don't match", () => {
    store.dispatch({
        type: 'LOG_IN',
        username: 'Bob',
        joinDate: '2021-04-27T11:00:51.694Z',
        id: '123',
        loggedInAt: 123
    });
    render(<Provider store={store}><ProfilePage /></Provider>);

    const currPass = screen.getByLabelText('Current Password:');
    fireEvent.change(currPass, {target: {value: 'Hello World!'}});
    expect(currPass).toHaveValue('Hello World!');

    const newPass = screen.getByLabelText('New Password:');
    fireEvent.change(newPass, {target: {value: 'Goodbye World!'}});
    expect(newPass).toHaveValue('Goodbye World!');

    const repeatPass = screen.getByLabelText('Repeat New Password:');
    fireEvent.change(repeatPass, {target: {value: 'Hello Again World!'}});
    expect(repeatPass).toHaveValue('Hello Again World!');

    fireEvent.click(screen.getByText('Submit'));
    expect(screen.queryByText('New passwords must match')).toBeTruthy();
});

it("displays a message when password change is successful", async () => {
    store.dispatch({
        type: 'LOG_IN',
        username: 'Bob',
        joinDate: '2021-04-27T11:00:51.694Z',
        id: '123',
        loggedInAt: 123
    });
    render(<Provider store={store}><ProfilePage /></Provider>);

    const currPass = screen.getByLabelText('Current Password:');
    fireEvent.change(currPass, {target: {value: 'Hello World!'}});
    expect(currPass).toHaveValue('Hello World!');

    const newPass = screen.getByLabelText('New Password:');
    fireEvent.change(newPass, {target: {value: 'Goodbye World!'}});
    expect(newPass).toHaveValue('Goodbye World!');

    const repeatPass = screen.getByLabelText('Repeat New Password:');
    fireEvent.change(repeatPass, {target: {value: 'Goodbye World!'}});
    expect(repeatPass).toHaveValue('Goodbye World!');

    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({json: () => Promise.resolve({message: 'This is a response message'})});
    });
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(screen.queryByText('This is a response message')).toBeTruthy());
});

it("displays a message when password change is not successful", async () => {
    store.dispatch({
        type: 'LOG_IN',
        username: 'Bob',
        joinDate: '2021-04-27T11:00:51.694Z',
        id: '123',
        loggedInAt: 123
    });
    render(<Provider store={store}><ProfilePage /></Provider>);

    const currPass = screen.getByLabelText('Current Password:');
    fireEvent.change(currPass, {target: {value: 'Hello World!'}});
    expect(currPass).toHaveValue('Hello World!');

    const newPass = screen.getByLabelText('New Password:');
    fireEvent.change(newPass, {target: {value: 'Goodbye World!'}});
    expect(newPass).toHaveValue('Goodbye World!');

    const repeatPass = screen.getByLabelText('Repeat New Password:');
    fireEvent.change(repeatPass, {target: {value: 'Goodbye World!'}});
    expect(repeatPass).toHaveValue('Goodbye World!');

    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({json: () => Promise.resolve({error: 'Something went wrong'})});
    });
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(screen.queryByText('Something went wrong')).toBeTruthy());
});