import type { Metadata } from 'next';
import CheckoutPage from '@/components/CheckoutPage';
import { mockEvents } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Checkout | EventHub',
  description: 'Complete your ticket booking',
};

export default async function Checkout({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <CheckoutPage eventId={id} events={mockEvents} />;
}