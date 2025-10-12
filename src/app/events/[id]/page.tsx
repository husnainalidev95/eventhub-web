import type { Metadata } from 'next';
import { EventDetailsPage } from '@/components/EventDetailsPage';  // Named import
import { mockEvents } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Event Details | EventHub',
  description: 'View event details and book tickets',
};

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EventDetailsPage events={mockEvents} eventId={id} />;
}