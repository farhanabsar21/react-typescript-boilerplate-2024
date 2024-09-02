// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders the welcome message', () => {
  // Render the App component
  render(<App />);

  // Query the heading element by its text
  const headingElement = screen.getByText(/welcome!/i);

  // Assertion to check if the heading is in the document
  expect(headingElement).toBeInTheDocument();
});
