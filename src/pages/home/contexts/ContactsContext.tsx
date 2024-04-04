import { createContext, useContext } from 'react';
import { UseContacts } from '../../../hooks/useContacts/useContacts';

export const ContactsContext = createContext<UseContacts | null>(null);

export const useContactsContext = (): UseContacts => {
  const context = useContext(ContactsContext);
  if (!context) {
      throw new Error('useContactsContext needs a ContactsContext');
  }
  return context;
};