import { ContactForm } from '@/components/ContactForm';
import { db } from '@/lib/db';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { EditContactForm } from './EditContactForm';

const contact = {
  email: 'edit@jstack.com.br',
  name: 'Editing Contact...',
};

type CreateContactPageProps = {
  params: {
    contactId: string;
  };
};

export default async function EditContactPage({
  params,
}: CreateContactPageProps) {
  const { contactId } = params;

  const contact = await db.contact.findUnique({ where: { id: contactId } });

  if (!contact) {
    return redirect('/');
  }

  return (
    <>
      <header>
        <Link
          href="/"
          className="text-muted-foreground flex items-center gap-1 text-xs mb-2 dark:hover:text-sky-300 hover:text-sky-600"
        >
          <ArrowLeftIcon className="size-4" />
          <span>Voltar para a lista</span>
        </Link>
        <h1 className="font-semibold text-3xl tracking-tighter">
          Editar contato
        </h1>
      </header>

      <EditContactForm contact={contact} />
    </>
  );
}
