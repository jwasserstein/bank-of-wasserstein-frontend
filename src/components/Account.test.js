import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import {BrowserRouter as Router} from 'react-router-dom';
import Account from './Account';

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
});

it('renders without crashing', () => {
    ReactDOM.render(<Router><Account link='/test' type='Checking' accountBalance={15.34} /></Router>, container);
});

it('displays the correct balance', () => {
    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Checking' accountBalance={0} /></Router>, container);
    });
    let node = document.querySelector("[data-testid='account-balance']");
    expect(node.textContent).toBe('$0.00');

    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Checking' accountBalance={15.34} /></Router>, container);
    });
    node = document.querySelector("[data-testid='account-balance']");
    expect(node.textContent).toBe('$15.34');

    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Checking' accountBalance={452734652564.32} /></Router>, container);
    });
    node = document.querySelector("[data-testid='account-balance']");
    expect(node.textContent).toBe('$452734652564.32');

    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Checking' accountBalance={-17.24} /></Router>, container);
    });
    node = document.querySelector("[data-testid='account-balance']");
    expect(node.textContent).toBe('$-17.24');
});

it('displays the correct account type', () => {
    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Checking' accountBalance={0} /></Router>, container);
    });
    let node = document.querySelector("[data-testid='account-type']");
    expect(node.textContent).toBe('Checking Account');
    
    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Savings' accountBalance={0} /></Router>, container);
    });
    node = document.querySelector("[data-testid='account-type']");
    expect(node.textContent).toBe('Savings Account');

    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Investing' accountBalance={0} /></Router>, container);
    });
    node = document.querySelector("[data-testid='account-type']");
    expect(node.textContent).toBe('Investing Account');
});

it('uses the correct link', () => {
    act(() => {
        ReactDOM.render(<Router><Account link='/test' type='Investing' accountBalance={0} /></Router>, container);
    });
    let node = document.querySelector("[data-testid='account']");
    expect(node.getAttribute('href')).toBe('/test');
});