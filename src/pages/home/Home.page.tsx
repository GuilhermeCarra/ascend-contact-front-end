import { FC } from 'react';
import { useContacts } from '../../hooks/useContacts/useContacts';
import Content from './components/Content';
import { ContactsContext } from './contexts/ContactsContext';

const HomePage: FC = () => {
  const userContactsResponse = useContacts();

  return (
    <ContactsContext.Provider value={userContactsResponse}>
      <Content/>
    </ContactsContext.Provider>
  );
}

export default HomePage;