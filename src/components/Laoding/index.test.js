import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
    it('renders the loading circle', () => {
        render(<Loading data-testid="loading-circle" />);

        // Assert that the loading circle is rendered
        expect(screen.getByTestId('loading-circle')).toBeInTheDocument();
    });
});
