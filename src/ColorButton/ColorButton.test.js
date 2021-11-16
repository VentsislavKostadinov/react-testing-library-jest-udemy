import {render, screen, fireEvent} from '@testing-library/react';

import ColorButton from "./ColorButton";
import {replaceCamelWithSpaces} from "./ColorButton";


describe.skip('change button color', () => {

   // render(<ColorButton/>);
    //let colorButton = screen.getByRole('button', { name: 'Change to green'});

    test('Button has correct initial color', () => {

        // if there is describe() write render() there for reusing in all the tests
        render(<ColorButton/>);
        let colorButton = screen.getByRole('button', { name: 'Change to green'});
        expect(colorButton).toHaveStyle({backgroundColor: 'red'})
    });


    test('Button has correct initial text', () => {

        // if there is describe() write render() there for reusing in all the tests
        render(<ColorButton/>);
        let colorButton = screen.getByRole('button', { name: 'Change to green'});
       expect(colorButton).toHaveTextContent('Change to green');
    })

    test('Button turns green when clicked', () => {
        render(<ColorButton/>);
        let colorButton = screen.getByRole('button', { name: 'Change to green'});
        console.log(colorButton.textContent)
        console.log('colorButton: ', colorButton.style._values) // still - change to green

        // fire event
        fireEvent.click(colorButton);

        console.log('colorButton: ', colorButton.textContent)
        console.log('colorButton: ', colorButton.style._values)

        expect(colorButton).toHaveStyle({backgroundColor: 'green'})
        expect(colorButton.textContent).toBe('Change to red');

        console.log(colorButton.textContent); // change to red

    })

    test('initial conditions  - disable and enable button on checkbox', () => {
       render(<ColorButton/>); // returns color button back to red after render()
        let colorButton = screen.getByRole('button', {name: 'Change to green'});

        // check the checkbox starts out unchecked
        const checkbox = screen.getByRole('checkbox', {label: 'disable-button-checkbox'});
        console.log(checkbox)

        // disable button
        fireEvent.click(checkbox);
        expect(colorButton).toBeDisabled();

        // enable button
        fireEvent.click(checkbox);
        expect(colorButton).toBeEnabled();
    })

})

describe.skip('disable button turns gray', () => {

    test('disable button has gray background and reverts to red', () => {
        render(<ColorButton/>);

        let colorButton = screen.getByRole('button', {name: 'Change to green'});

        // check the checkbox starts out unchecked
        const checkbox = screen.getByRole('checkbox', {label: 'disable-button-checkbox'});

        // disable button
        fireEvent.click(checkbox);
        expect(colorButton).toHaveStyle('background-color: gray');

        // enable button
        fireEvent.click(checkbox);
        expect(colorButton).toHaveStyle('background-color: red');

    })

    test('Clicked disable button has gray background and reverts to green', () => {
        render(<ColorButton/>);

        let colorButton = screen.getByRole('button', {name: 'Change to green'});

        // check the checkbox starts out unchecked
        const checkbox = screen.getByRole('checkbox', {label: 'disable-button-checkbox'});

        // change button to green
        fireEvent.click(colorButton);
        console.log(colorButton.textContent)

        // disable button
        fireEvent.click(checkbox);
        expect(colorButton).toHaveStyle('background-color: gray');

        // enable button
        fireEvent.click(checkbox);
        expect(colorButton).toHaveStyle('background-color: green');

    })
})

describe('spaces before camel-case capital letters', () => {


    test('Works for no inner capital letters', () => {
        render(<ColorButton/>);
        const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});
        console.log(colorButton.style._values)

        //expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

        // click button
        //fireEvent.click(colorButton);

        // expect background color to be MidnightBlue
       // expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

       // expect(replaceCamelWithSpaces('Red')).toBe('Red');

    });

    test('Works for one inner capital letter', () => {
        //expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');

    });

    test('Works for multiple capital letters', () => {
        //expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');

    });

})






