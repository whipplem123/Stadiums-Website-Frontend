import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders stadium map', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('StadiumsMap').length).toBe(1);
});
