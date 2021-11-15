import { render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();


});

test('visible paragraph', () => {

  render(<App />);

  const para = screen.getByTestId('paragraph');
  expect(para).toBeVisible();

})
