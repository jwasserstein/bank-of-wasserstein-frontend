import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import Balance from './Balance';

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
    ReactDOM.render(<Balance accountBalance={16}/>, container);
});

it('displays the correct amount', () => {
    act(() => {
        ReactDOM.render(<Balance accountBalance={0}/>, container);
    });
    let node = document.querySelector("[data-testid='balance']");
    expect(node.textContent).toBe('Balance: $0.00');

    act(() => {
        ReactDOM.render(<Balance accountBalance={16}/>, container);
    });
    node = document.querySelector("[data-testid='balance']");
    expect(node.textContent).toBe('Balance: $16.00');

    act(() => {
        ReactDOM.render(<Balance accountBalance={123456789.01}/>, container);
    });
    node = document.querySelector("[data-testid='balance']");
    expect(node.textContent).toBe('Balance: $123456789.01');

    act(() => {
        ReactDOM.render(<Balance accountBalance={-24.66}/>, container);
    });
    node = document.querySelector("[data-testid='balance']");
    expect(node.textContent).toBe('Balance: $-24.66');
});