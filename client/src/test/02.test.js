import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
    test('renders correctly', () => {
        const { getByText } = render(<Home />);
        expect(getByText('Nav')).toBeInTheDocument();
    });

    test('form is not visible by default', () => {
        const { queryByText } = render(<Home />);
        expect(queryByText('Create')).toBeNull();
    });

    test('form is visible when button is clicked', () => {
        const { getByText } = render(<Home />);
        fireEvent.click(getByText('Create'));
        expect(getByText('Create')).toBeInTheDocument();
    });

    test('form is not visible when button is clicked twice', () => {
        const { getByText, queryByText } = render(<Home />);
        fireEvent.click(getByText('Create'));
        fireEvent.click(getByText('Create'));
        expect(queryByText('Create')).toBeNull();
    })
})
