import type { Metadata } from 'next';
import { EventDetailsPage } from '@/components/EventDetailsPage';  // Named import
import { mockEvents } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Event Details | EventHub',
  description: 'View event details and book tickets',
};

export default function EventPage({ params }: { params: { id: string } }) {
  return <EventDetailsPage events={mockEvents} eventId={params.id} />;
}