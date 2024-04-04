import { FC, useState } from 'react';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';
import { SecondaryButton } from '../../../components/buttons/SecondaryButton';
import { Input } from '../../../components/inputs/Input';
import { IContact } from '../../../data/contacts';
import { ContactRequest } from '../../../types/Contact';
import { FormErrors } from '../../../types/FormErrors';

interface ContactFormProps {
  defaultContact?: IContact;
  onSubmit: (contact: IContact) => Promise<void>;
  close: () => void;
}

export const ContactForm: FC<ContactFormProps> = ({ defaultContact, onSubmit, close }) => {
  const [request] = useState<ContactRequest>(new ContactRequest({ ...defaultContact }));
  const [formErrors, setFormErrors] = useState<FormErrors | undefined>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { errors, contact } = request.validate();
    setFormErrors(errors);
    if (errors || !contact) {
      return;
    }
    try {
      await onSubmit(contact)
    } catch {
      setFormErrors(errors => ({ ...errors, name: 'Name is already in use' }))
      return;
    }
    close();
  }

  return (
    <form className="flex flex-column gap-2.5 w-100" onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        type="text"
        defaultValue={defaultContact?.name}
        onChange={e => request.setName(e.target.value)}
        error={formErrors?.name}
      />
      <Input
        name="phone"
        label="Phone number"
        type="tel"
        defaultValue={defaultContact?.phone}
        onChange={e => request.setPhone(e.target.value)}
        error={formErrors?.phoneNumber}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        defaultValue={defaultContact?.email}
        onChange={e => request.setEmail(e.target.value)}
        error={formErrors?.email}
      />
      <Input
        name="age"
        label="Age"
        type="number"
        defaultValue={defaultContact?.age}
        onChange={e => request.setAge(e.target.value)}
        error={formErrors?.age}
      />
      <div className="flex gap-2.5 pt-4 justify-end">
        <SecondaryButton type="button" onClick={close}>Cancel</SecondaryButton>
        <PrimaryButton type="submit">Send</PrimaryButton>
      </div>
    </form>
  );
}