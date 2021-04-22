import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from 'react-dom/test-utils';

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
    ReactDOM.render(<Button form>test</Button>, container);
});

it('renders with text', () => {
    act(() => {
        ReactDOM.render(<Button form>Hello World!</Button>, container);
    });
    const node = document.querySelector("[data-testid='button']");
    expect(node.textContent).toBe('Hello World!');
});

it('renders without text', () => {
    act(() => {
        ReactDOM.render(<Button form></Button>, container);
    });
    const node = document.querySelector("[data-testid='button']");
    expect(node.textContent).toBe('');
});

it('renders <button>', () => {
    act(() => {
        ReactDOM.render(<Button className='Button-test' form onClick={() => null}>test</Button>, container);
    });
    const node = document.querySelector("[data-testid='button']");
    expect(node.nodeName).toBe('BUTTON');
    expect(node.textContent).toBe('test');
    expect(node.getAttribute('type')).toBe('submit');
    expect(node.getAttribute('class')).toBe('Button Button-test Button-form');
});

it('renders <a>', () => {
    act(() => {
        ReactDOM.render(<Router><Button className='Link-test' to='/test' onClick={() => null}>test</Button></Router>, container);
    });
    const node = document.querySelector("[data-testid='button']");
    expect(node.nodeName).toBe('A');
    expect(node.textContent).toBe('test');
    expect(node.getAttribute('href')).toBe('/test');
    expect(node.getAttribute('class')).toBe('Button Link-test');
});

it('invokes callback', () => {
    const callback = jest.fn();
    act(() => {
        ReactDOM.render(<Button className='Button-test' form onClick={callback}>Click Me!</Button>, container);
    });
    let node = document.querySelector("[data-testid='button']");
    node.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
        ReactDOM.render(<Router><Button className='Button-test' to='/test' onClick={callback}>Click Me!</Button></Router>, container);
    });
    node = document.querySelector("[data-testid='button']");
    node.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    expect(callback).toHaveBeenCalledTimes(2);
});