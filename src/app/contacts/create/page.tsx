'use client';

import { ContactForm } from '@/components/ContactForm';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function CreateContactPage() {
  const handleSubmit = async (data: { name: string; email: string }) => {
    const response = await fetch('/api/contacts?id=123', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await response.json();

    console.log({ body });
  };

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
          Criar contato
        </h1>
      </header>

      <ContactForm onSubmit={handleSubmit} />
    </>
  );
}
