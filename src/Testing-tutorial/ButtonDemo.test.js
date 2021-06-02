import { render, screen, fireEvent } from '@testing-library/react';
import Button , {replaceCamelWithCases} from './ButtonDemo';

test('button to have correct initial color', () => {
    render(<Button />);
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
    expect(colorButton).toHaveStyle({ backgroundColor: replaceCamelWithCases("MediumVioletRed") });

    //testing button click
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: replaceCamelWithCases("MidnightBlue") });
})

test('initial conditions for button and checkbox', () => {
    render(<Button />);
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
    expect(colorButton).toBeEnabled();

    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    expect(checkBox).not.toBeChecked();
})

test('checkbox disables button on first click and enables on second click', () => {
    render(<Button />);
    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })

    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
})

test('checkbox and button background behavior', () => {
    render(<Button />);
    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })

    // disable button -> button is gray -> enable button ->button is MediumVioletRed
    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });

    //click button to change color -> disable button -> button is gray -> enable button -> button is MidnightBlue
    fireEvent.click(colorButton);
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
})

describe('',()=>{
    test('Works for no inner capital letters',()=>{
        expect(replaceCamelWithCases('MediumVioletRed')).toBe('Medium Violet Red')
    })
    test('works for one inner capital letter',()=>{
        expect(replaceCamelWithCases('MidnightBlue')).toBe('Midnight Blue')
    })
    test('works for multiple inner capital letters',()=>{
        expect(replaceCamelWithCases('MediumVioletRed')).toBe('Medium Violet Red')
    })
})
