import {render, screen} from '@testing-library/react';
import App from './App';

describe.skip('iniital tests', () => {


    test('renders learn react link', () => {
        render(<App/>);
        //const linkElement = screen.getByText(/learn react/i);

        const linkElement = screen.getByRole('link',{name: /Learn React/i });

        expect(linkElement).toBeInTheDocument();

        //throw new Error('test failed')

    });

    test('visible paragraph', () => {

        render(<App/>);

        const para = screen.getByTestId('paragraph');
        expect(para).toBeVisible();

    })

})


