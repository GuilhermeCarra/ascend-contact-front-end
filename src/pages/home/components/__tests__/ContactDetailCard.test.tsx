import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IContact } from '../../../../data/contacts';
import { ContactsContext } from '../../contexts/ContactsContext';
import { ContactDetailCard } from '../ContactDetailCard';

const renderTest = (mockContact: IContact) => {
  return render(
    <ContactsContext.Provider value={{} as any}>
      <ContactDetailCard contact={mockContact}/>
    </ContactsContext.Provider>
  );
}

const mockContact: IContact = {
  id: '1',
  name: 'James',
  age: 22,
  email: 'james@test.com',
  phone: '65911223344'
};

describe('ContactDetailCard', () => {
  it('should render Ok', async () => {
    renderTest(mockContact);

    expect(screen.getByText('James')).toBeInTheDocument();
    expect(screen.getByText('65911223344')).toBeInTheDocument();
    expect(screen.getByText('james@test.com')).toBeInTheDocument();
    expect(screen.getByText('22 years old')).toBeInTheDocument();
  })

  it('should render a placeholder when user doesn\'t have a property', async () => {
    renderTest({ ...mockContact, email: undefined});

    expect(screen.getByText('James')).toBeInTheDocument();
    expect(screen.getByText('65911223344')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('22 years old')).toBeInTheDocument();
  })
});
