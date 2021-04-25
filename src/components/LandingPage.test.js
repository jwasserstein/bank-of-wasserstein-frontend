import React from 'react';
import {render} from '@testing-library/react';
import LandingPage from './LandingPage';
import {BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    render(<Router><LandingPage /></Router>);
});