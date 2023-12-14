import React from 'react';
import { render } from '@testing-library/react';
import ActualProgress from './index';

describe('ActualProgress', () => {
    it('renders with the correct target and actual percentages', () => {
        const target = 50;
        const actualPercentage = 40;

        const { getByText } = render(
            <ActualProgress
                target={target}
                actualPercentage={actualPercentage}
            />
        );

        // Assert that the component renders the target and actual percentages
        expect(getByText(`Small target ${target}%`)).toBeInTheDocument();
        expect(getByText(`Actual ${actualPercentage}%`)).toBeInTheDocument();
        expect(
            getByText(`Difference ${Math.abs(target - actualPercentage)}%`)
        ).toBeInTheDocument();
    });
});
