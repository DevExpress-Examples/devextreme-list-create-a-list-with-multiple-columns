import { render } from '@testing-library/react';
import App from './App.tsx';

test('renders the tasks list', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.dx-list')).toBeTruthy();
});
