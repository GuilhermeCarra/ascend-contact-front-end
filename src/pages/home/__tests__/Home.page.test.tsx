import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import HomePage from '../Home.page';

describe('Home.page', () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => JSON.stringify([{ name: 'Mcdon' }])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it('should render Ok', async () => {
    render(<HomePage/>);

    expect(screen.getByRole('button')).toHaveTextContent('Add contact');

    await waitFor(() => {
      expect(screen.getByText('Mcdon')).toBeInTheDocument();
    });
  })

  it('should open add contact modal', async () => {
    render(<HomePage/>);
    await userEvent.click(screen.getByText('Add contact'));

    expect(screen.getByRole('heading')).toHaveTextContent('Add new contact')
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Age')).toBeInTheDocument();
  })

  it('should show error when Name field is not filled', async () => {
    render(<HomePage/>)
    await userEvent.click(screen.getByText('Add contact'));
    await userEvent.click(screen.getByText('Send'));

    expect(screen.getByText('Required field')).toBeInTheDocument();
  })

});