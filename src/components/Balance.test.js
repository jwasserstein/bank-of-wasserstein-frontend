import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Balance from './Balance';

it('renders without crashing', () => {
    render(<Balance accountBalance={16}/>);
});

it('displays the correct amount', () => {
    render(<Balance accountBalance={0}/>);
    let node = screen.getByTestId('balance');
    expect(node.textContent).toBe('Balance: $0.00');
    cleanup();

    render(<Balance accountBalance={16}/>);
    node = screen.getByTestId('balance');
    expect(node.textContent).toBe('Balance: $16.00');
    cleanup();

    render(<Balance accountBalance={123456789.01}/>);
    node = screen.getByTestId('balance');
    expect(node.textContent).toBe('Balance: $123456789.01');
    cleanup();

    render(<Balance accountBalance={-24.66}/>);
    node = screen.getByTestId('balance');
    expect(node.textContent).toBe('Balance: $-24.66');
});