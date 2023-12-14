import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Box from './index';

const size = 'small';
const color = 'blue';
const dot = true;
const calculateSmallBoxes = () => {};
const opacity = 'opacity';
const id = 'box';

const BoxWithData = (props) => {
    return (
        <Box
            size={size}
            color={color}
            dot={dot}
            calculateSmallBoxes={calculateSmallBoxes}
            data-testid={id}
            {...props}
        />
    );
};
describe('Box', () => {
    it('renders with the correct size and color', () => {
        const { container } = render(<BoxWithData />);

        // Assert that the component renders with the correct size and color
        expect(container.querySelector('.box')).toHaveClass(size);
        expect(container.querySelector('.box')).toHaveClass(color);
    });

    it('renders a dot when "dot" prop is true', () => {
        const { container } = render(<BoxWithData />);

        // Assert that the component renders a dot when "dot" prop is true
        expect(container.querySelector('.dot')).toBeInTheDocument();
    });

    it('toggles opacity on click', () => {
        render(<BoxWithData />);

        // Initial state: opacity is true`
        expect(screen.getByTestId(id)).toHaveClass(opacity);

        // Click the box to toggle opacity
        fireEvent.click(screen.getByTestId(id));

        // After click: opacity is false
        expect(screen.getByTestId(id)).not.toHaveClass(opacity);

        // Click again to toggle back to true
        fireEvent.click(screen.getByTestId(id));

        // After second click: opacity is true
        expect(screen.getByTestId(id)).toHaveClass(opacity);
    });
});
