import { FC } from 'react';
import { IContact } from '../../../data/contacts';
import { useModal } from '../../../hooks/useModal/useModal';
import { useContactsContext } from '../contexts/ContactsContext';
import { ContactForm } from './ContactForm';

interface ContactDetailCardProps {
  contact: IContact;
}

export const ContactDetailCard: FC<ContactDetailCardProps> = ({ contact }) => {
  const { RenderModal, show: showEditModal, hide: closeEditModal } = useModal({ title: 'Edit contact'});

  const { deleteContact, updateContact } = useContactsContext();

  const handleDelete = (id: string) => async () =>
    await deleteContact(id);

  return(<>
    <div className="rounded-lg shadow-lg flex items-center justify-between w-full p-2.5 hover:bg-gray-50">
      <span className="basis-1/4">{contact.name}</span>
      <span className="basis-1/4">{contact.phone || '-'}</span>
      <span className="basis-1/4">{contact.email || '-'}</span>
      <span className="basis-1/4">{contact.age ? `${contact.age} years old` : '-'}</span>
      <div className="flex gap-4">
        <span className="cursor-pointer text-2xl hover:text-slate-400" onClick={showEditModal}>✐</span>
        <span className="cursor-pointer text-2xl hover:text-slate-400" onClick={handleDelete(contact.id)}>𝕏</span>
      </div>
    </div>
    <RenderModal>
      <ContactForm onSubmit={updateContact} defaultContact={contact} close={closeEditModal}/>
    </RenderModal>
  </>);
}