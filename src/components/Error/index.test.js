import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './index';

describe('Error', () => {
    it('renders the error message', () => {
        const errorMessage = 'Test error message';
        render(<Error message={errorMessage} />);

        // Assert that the error message is rendered
        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
});
