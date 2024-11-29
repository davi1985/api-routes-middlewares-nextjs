'use client';

import { ContactForm } from '@/components/ContactForm';
import { Contact } from '@prisma/client';

export const EditContactForm = ({ contact }: { contact: Contact }) => {
  const handleSubmit = async (data: { name: string; email: string }) => {
    await fetch(`/api/contacts/${contact.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return <ContactForm contact={contact} onSubmit={handleSubmit} />;
};
