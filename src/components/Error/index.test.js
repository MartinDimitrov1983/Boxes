import React from 'react';
import { render } from '@testing-library/react';
import Error from './index';

describe('Error', () => {
    it('renders the error message', () => {
        const errorMessage = 'Test error message';
        const { getByText } = render(<Error message={errorMessage} />);

        // Assert that the error message is rendered
        expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
});
