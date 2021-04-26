import React from 'react';
import {render, screen} from '@testing-library/react';
import Transaction from './Transaction';

it('renders without crashing', () => {
    render(<Transaction description='This is a transaction' date='2021-04-25T15:46:40.693Z' amount={173.29} accountBalance={5632.98} />);
});

it('shows the correct description', () => {
    render(<Transaction description='This is a transaction' date='2021-04-25T15:46:40.693Z' amount={173.29} accountBalance={5632.98} />);
    const transaction = screen.queryByText('This is a transaction');
    expect(transaction).toBeTruthy();
});

it('shows the correct amount', () => {
    render(<Transaction description='This is a transaction' date='2021-04-25T15:46:40.693Z' amount={173.29} accountBalance={5632.98} />);
    const amount = screen.queryByText('$173.29');
    expect(amount).toBeTruthy();
});

it('shows the correct date', () => {
    render(<Transaction description='This is a transaction' date='2021-04-25T15:46:40.693Z' amount={173.29} accountBalance={5632.98} />);
    const date = screen.queryByText('04/25/2021 11:46AM');
    expect(date).toBeTruthy();
});

it('shows the correct accountBalance', () => {
    render(<Transaction description='This is a transaction' date='2021-04-25T15:46:40.693Z' amount={173.29} accountBalance={5632.98} />);
    const accountBalance = screen.queryByText('$5632.98');
    expect(accountBalance).toBeTruthy();
});