import React from 'react';
import {render, screen} from '@testing-library/react';
import ItemList from './ItemList';

const NumberItem = ({value}) => <div>{value}</div>;

it('renders without crashing', () => {
    const items = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}];
    render(<ItemList items={items} itemProps={{value: 'value', key: 'value'}} ItemComponent={NumberItem} itemName='Numbers' />);
});

it('invokes the ItemComponent the correct number of times', () => {
    const NumberItemMock = jest.fn(NumberItem);
    const items = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}];
    render(<ItemList items={items} itemProps={{value: 'value', key: 'value'}} ItemComponent={NumberItemMock} itemName='Numbers' />);
    expect(NumberItemMock).toBeCalledTimes(5);
});

it('passes the correct props to ItemComponent', () => {
    const NumberItemMock = jest.fn(NumberItem);
    const items = [{value: 1, testProp: 'Hello World'}];
    render(<ItemList items={items} itemProps={{value: 'value', testProp: 'testProp', key: 'value'}} ItemComponent={NumberItemMock} itemName='Numbers' />);
    expect(NumberItemMock.mock.calls[0][0]).toEqual({value: 1, testProp: 'Hello World'});
});

it('handles an empty item array', () => {
    render(<ItemList items={[]} itemProps={{}} ItemComponent={NumberItem} itemName='Numbers' />);
    expect(screen.queryByText("You don't have any Numbers yet!")).toBeTruthy();
});