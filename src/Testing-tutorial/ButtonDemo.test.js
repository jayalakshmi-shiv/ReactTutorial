import { render, screen, fireEvent } from '@testing-library/react';
import Button from './ButtonDemo';

test('button to have correct initial color', () => {
    render(<Button />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    //testing button click
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
})

test('initial conditions for button and checkbox', () => {
    render(<Button />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    expect(colorButton).toBeEnabled();

    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    expect(checkBox).not.toBeChecked();
})

test('checkbox disables button on first click and enables on second click', () => {
    render(<Button />);
    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })

    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
})

test('checkbox and button background behavior', () => {
    render(<Button />);
    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })

    // disable button -> button is gray -> enable button ->button is red
    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    //click button to change color -> disable button -> button is gray -> enable button -> button is blue
    fireEvent.click(colorButton);
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });



})
