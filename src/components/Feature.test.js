import React from 'react';
import {screen, render} from '@testing-library/react';
import Feature from './Feature';

it('renders without crashing', () => {
    const element = <Feature title='Hello World!' description='A nice greeting' 
                            img='https://www.image.com/image.jpg' alt='image' />;
    render(element);
});

it('uses the correct title', () => {
    let element = <Feature title='Hello World!' description='A nice greeting' 
                            img='https://www.image.com/image.jpg' alt='image' />;
    render(element);
    let title = screen.getByTestId('feature-title');
    expect(title.textContent).toBe('Hello World!');
});

it('uses the correct description', () => {
    let element = <Feature title='Hello World!' description='A nice greeting' 
                            img='https://www.image.com/image.jpg' alt='image' />;
    render(element);
    let description = screen.getByTestId('feature-description');
    expect(description.textContent).toBe('A nice greeting');
});

it('uses the correct image link', () => {
    let element = <Feature title='Hello World!' description='A nice greeting' 
                            img='https://www.image.com/image.jpg' alt='image' />;
    render(element);
    let image = screen.getByTestId('feature-image');
    expect(image.getAttribute('src')).toBe('https://www.image.com/image.jpg');
});

it('uses the correct alt text', () => {
    let element = <Feature title='Hello World!' description='A nice greeting' 
                            img='https://www.image.com/image.jpg' alt='image' />;
    render(element);
    let image = screen.getByTestId('feature-image');
    expect(image.getAttribute('alt')).toBe('image');
});