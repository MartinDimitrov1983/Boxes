import React from 'react';
import { render } from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
    it('renders the loading circle', () => {
        const { getByTestId } = render(
            <Loading data-testid="loading-circle" />,
        );

        // Assert that the loading circle is rendered
        expect(getByTestId('loading-circle')).toBeInTheDocument();
    });
});
