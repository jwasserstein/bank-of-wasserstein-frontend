import React from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import Button from './Button';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
    render(<Button form>test</Button>);
});

it('renders with text', () => {
    render(<Button form>Hello World!</Button>);
    const node = screen.getByTestId('button');
    expect(node.textContent).toBe('Hello World!');
});

it('renders without text', () => {
    render(<Button form></Button>);
    const node = screen.getByTestId('button');
    expect(node.textContent).toBe('');
});

it('renders <button>', () => {
    render(<Button className='Button-test' form onClick={() => null}>test</Button>);
    const node = screen.getByTestId('button');
    expect(node.nodeName).toBe('BUTTON');
    expect(node.textContent).toBe('test');
    expect(node).toHaveAttribute('type', 'submit');
    expect(node).toHaveClass('Button Button-test Button-form');
});

it('renders <a>', () => {
    render(<Router><Button className='Link-test' to='/test' onClick={() => null}>test</Button></Router>);
    const node = screen.getByTestId('button');
    expect(node.nodeName).toBe('A');
    expect(node.textContent).toBe('test');
    expect(node).toHaveAttribute('href', '/test');
    expect(node).toHaveClass('Button Link-test');
});

it('invokes callback', () => {
    const callback = jest.fn();
    render(<Button className='Button-test' form onClick={callback}>Click Me!</Button>);
    let node = screen.getByTestId('button');
    fireEvent.click(node);
    expect(callback).toHaveBeenCalledTimes(1);
    cleanup();

    render(<Router><Button className='Button-test' to='/test' onClick={callback}>Click Me!</Button></Router>);
    node = screen.getByTestId('button');
    fireEvent.click(node);
    expect(callback).toHaveBeenCalledTimes(2);
});