import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Account from './Account';

it('renders without crashing', () => {
    render(<Router><Account link='/test' type='Checking' accountBalance={15.34} /></Router>);
});

it('displays the correct balance', () => {
    render(<Router><Account link='/test' type='Checking' accountBalance={0} /></Router>);
    let display = screen.getByTestId('account-balance');
    expect(display.textContent).toBe('$0.00');
    cleanup();
    
    render(<Router><Account link='/test' type='Checking' accountBalance={15.34} /></Router>);
    display = screen.getByTestId('account-balance');
    expect(display.textContent).toBe('$15.34');
    cleanup();

    render(<Router><Account link='/test' type='Checking' accountBalance={452734652564.32} /></Router>);
    display = screen.getByTestId('account-balance');
    expect(display.textContent).toBe('$452734652564.32');
    cleanup();

    render(<Router><Account link='/test' type='Checking' accountBalance={-17.24} /></Router>);
    display = screen.getByTestId('account-balance');
    expect(display.textContent).toBe('$-17.24');
});

it('displays the correct account type', () => {
    render(<Router><Account link='/test' type='Checking' accountBalance={0} /></Router>);
    let account = screen.getByTestId('account-type');
    expect(account.textContent).toBe('Checking Account');
    cleanup();
    
    render(<Router><Account link='/test' type='Savings' accountBalance={0} /></Router>);
    account = screen.getByTestId('account-type');
    expect(account.textContent).toBe('Savings Account');
    cleanup();

    render(<Router><Account link='/test' type='Investing' accountBalance={0} /></Router>);
    account = screen.getByTestId('account-type');
    expect(account.textContent).toBe('Investing Account');
});

it('uses the correct link', () => {
    render(<Router><Account link='/test' type='Investing' accountBalance={0} /></Router>);
    let link = screen.getByTestId('account');
    expect(link.getAttribute('href')).toBe('/test');
});