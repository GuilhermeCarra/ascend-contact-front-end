import { useState, useEffect } from 'react';
import { IContact, apiFetchAllContacts, apiDeleteContact, apiUpdateContact, apiAddContact  } from '../../data/contacts';

const byName = (a: IContact, b: IContact) => {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

export interface UseContacts {
  contacts: IContact[];
  addContact: (contact: IContact) => Promise<void>;
  deleteContact: (contactId: string) => Promise<void>;
  updateContact: (contact: IContact) => Promise<void>;
  isLoading: boolean;
}

export const useContacts = (): UseContacts => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true)
      const result = await apiFetchAllContacts();
      setContacts(result.sort(byName));
      setIsFetched(true);
      setIsLoading(false)
    };
    if (!isFetched) {
      fetchContacts();
    }
  }, [isFetched]);

  const addContact = async (contact: IContact) => {
    setIsLoading(true)
    try {
      await apiAddContact(contact);
    } catch {
      setIsLoading(false)
      throw new Error();
    }
    setIsFetched(false);
  }

  const deleteContact = async (contactId: string) => {
    setIsLoading(true)
    try {
      await apiDeleteContact(contactId);
    } catch {
      setIsLoading(false)
      throw new Error();
    }
    setIsFetched(false);
  }

  const updateContact = async (contact: IContact) => {
    setIsLoading(true)
    try {
      await apiUpdateContact(contact);
    } catch (e) {
      setIsLoading(false)
      throw new Error();
    }
    setIsFetched(false);
  }

  return {
    contacts,
    addContact,
    deleteContact,
    updateContact,
    isLoading
  };
};
