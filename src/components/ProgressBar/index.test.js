import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './index';

const percentage = 50;
const text = 'Test Text';
const additionalText = 'Additional Text';
const textAbove = true;

const ProgressBarWithData = (props) => {
    return (
        <ProgressBar
            percentage={percentage}
            text={text}
            additionalText={additionalText}
            textAbove={textAbove}
            data-testid="progress-bar"
            {...props}
        />
    );
};

describe('ProgressBar', () => {
    it('renders with the correct percentage and text', () => {
        const { container } = render(<ProgressBarWithData />);
        expect(container.querySelector('.progressBar')).toHaveStyle(
            `width: ${percentage}%`
        );
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('renders additional text when provided', () => {
        render(<ProgressBarWithData textAbove={false} />);

        // Assert that the component renders additional text when provided
        expect(screen.getByText(additionalText)).toBeInTheDocument();
    });

    it('handles textAbove prop correctly', () => {
        render(<ProgressBarWithData />);

        // Assert that the top text is rendered when textAbove is true
        expect(screen.getByText(text)).toBeInTheDocument();

        // Assert that the bottom text is not rendered when textAbove is true
        expect(screen.queryByText(additionalText)).toBeNull();
    });

    it('updates progress on percentage prop change', () => {
        const percentageAfterRerender = 25;
        const { container, rerender } = render(<ProgressBarWithData />);

        // Initial state: progress is set to 50%
        expect(container.querySelector('.progressBar')).toHaveStyle(
            `width: ${percentage}%`
        );

        // Update the percentage prop to 25%
        rerender(<ProgressBarWithData percentage={percentageAfterRerender} />);

        // After update: progress is set to 25%
        expect(container.querySelector('.progressBar')).toHaveStyle(
            `width: ${percentageAfterRerender}%`
        );
    });
});
