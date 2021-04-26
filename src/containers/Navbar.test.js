import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../store/reducers';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';

let store;
beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
});

it('renders without crashing', () => {
    render(<Provider store={store}><Router><Navbar /></Router></Provider>);
});

it('renders header', () => {
    render(<Provider store={store}><Router><Navbar /></Router></Provider>);
    expect(screen.queryByText("BANK OF WASSERSTEIN")).toBeTruthy();
});

it('renders links', () => {
    render(<Provider store={store}><Router><Navbar /></Router></Provider>);
    expect(screen.queryByText("Home")).toBeTruthy();
    expect(screen.queryByText("Accounts")).toBeTruthy();
    expect(screen.queryByText("About")).toBeTruthy();
});

it('renders signed out buttons', () => {
    render(<Provider store={store}><Router><Navbar /></Router></Provider>);
    expect(screen.queryByText("Log In")).toBeTruthy();
    expect(screen.queryByText("Sign Up")).toBeTruthy();
});

it('renders signed in buttons', () => {
    store.dispatch({
        type: 'LOG_IN',
        userId: '123',
        username: 'Bob',
        joinDate: '2021-04-26T20:04:48.777Z',
        loggedInAt: Date.now()
    });
    render(<Provider store={store}><Router><Navbar /></Router></Provider>);
    expect(screen.queryByText("Bob")).toBeTruthy();
    expect(screen.queryByText("Sign Out")).toBeTruthy();
});

it('enables dropdown on burger click', () => {
    render(<Provider store={store}><Router><Navbar /></Router></Provider>);
    fireEvent.click(screen.getByTestId('burger'));
    expect(screen.getByTestId('header')).toHaveClass('active');
});