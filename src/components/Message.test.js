import React from 'react';
import {render, screen} from '@testing-library/react';
import Message from './Message';

it('renders without crashing', () => {
    render(<Message>Hello World</Message>);
});

it('displays the correct text', () => {
    render(<Message>Hello World</Message>);
    const message = screen.queryByText('Hello World');
    expect(message).toBeTruthy();
});

it('uses the default color red', () => {
    render(<Message>Hello World</Message>);
    const message = screen.getByText('Hello World');
    expect(message).toHaveClass('Message Message-red');
});

it('sets the color prop as a class', () => {
    render(<Message color='asuperdarkblue'>Hello World</Message>);
    const message = screen.getByText('Hello World');
    expect(message).toHaveClass('Message Message-asuperdarkblue');
});