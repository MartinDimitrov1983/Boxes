import React from 'react';
import { render, screen } from '@testing-library/react';
import ActualProgress from './index';

describe('ActualProgress', () => {
    it('renders with the correct target and actual percentages', () => {
        const target = 50;
        const actualPercentage = 40;

        render(
            <ActualProgress
                target={target}
                actualPercentage={actualPercentage}
            />
        );

        // Assert that the component renders the target and actual percentages
        expect(screen.getByText(`Small target ${target}%`)).toBeInTheDocument();
        expect(screen.getByText(`Actual ${actualPercentage}%`)).toBeInTheDocument();
        expect(
            screen.getByText(`Difference ${Math.abs(target - actualPercentage)}%`)
        ).toBeInTheDocument();
    });
});
