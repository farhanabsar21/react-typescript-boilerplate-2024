import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../app/App';

// Mock the Users component
jest.mock('../components/common/Users', () => () => <div>Users Component</div>);

describe('App Component', () => {
  test('should render Home component for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
    expect(screen.getByText(/Users Component/i)).toBeInTheDocument();
  });

  test('should render NotFound component for a non-existent route', () => {
    render(
      <MemoryRouter initialEntries={['/some-random-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});
