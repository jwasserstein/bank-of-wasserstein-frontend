import React from 'react';
import {render, screen} from '@testing-library/react';
import Hero from './Hero';

it('renders without crashing', () => {
    render(<Hero />);
});

it('has main text', () => {
    render(<Hero />);
    screen.getByText('Banking Reimagined.');
    screen.getByText('Start saving for the future of your dreams.');
});

it('has image', () => {
    render(<Hero />);
    screen.getByAltText('coins growing');
});