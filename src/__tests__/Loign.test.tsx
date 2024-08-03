// src/__tests__/SignIn.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login';
import { useAuthStore } from '../stores/useAuthStore';

jest.mock('../stores/useAuthStore');

const mockSetUser = jest.fn();

beforeEach(() => {
  (useAuthStore as jest.Mock).mockReturnValue({ setUser: mockSetUser });
});

test('renders Sign In page and handles submit', () => {
  render(<Login />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /sign in/i });

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  // Simulate successful login
  expect(mockSetUser).toHaveBeenCalled();
});
