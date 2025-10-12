import type { Metadata } from 'next';
import { Suspense } from 'react';
import { EventsListPage } from '@/components/EventsListPage';
import { mockEvents } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Events | EventHub',
  description: 'Discover amazing events in your city. Find and book tickets for concerts, conferences, workshops and more.',
};

function EventsListWrapper() {
  return <EventsListPage events={mockEvents} />;
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading events...</div>}>
      <EventsListWrapper />
    </Suspense>
  );
}