import { db } from '@/lib/db';

export const getContactsUseCase = async () => await db.contact.findMany();
