import { FC } from 'react';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';
import { Spinner } from '../../../components/spinner/Spinner';
import { useModal } from '../../../hooks/useModal/useModal';
import { ContactDetailCard } from '../components/ContactDetailCard';
import { ContactForm } from '../components/ContactForm';
import { useContactsContext } from '../contexts/ContactsContext';

const HomePage: FC = () => {
  const { RenderModal, show, hide } = useModal({ title: 'Add new contact'});

  const { contacts, addContact, isLoading } = useContactsContext();

  return (
    <>
      <PrimaryButton onClick={show}>Add contact</PrimaryButton>
      <div className="flex flex-column gap-2.5 py-8">
        {contacts.map(contact => <ContactDetailCard key={contact.id} contact={contact}/>)}
      </div>
      <RenderModal>
        <ContactForm onSubmit={addContact} close={hide}/>
      </RenderModal>
      {isLoading && <Spinner/>}
    </>
  );
}

export default HomePage;