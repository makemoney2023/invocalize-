import React from 'react';
import { render, screen } from '@testing-library/react';
import RequestDemoForm from '../components/RequestDemoForm';

describe('RequestDemoForm', () => {
  it('renders the form fields', () => {
    render(<RequestDemoForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/use case/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /request demo/i })).toBeInTheDocument();
  });
});
