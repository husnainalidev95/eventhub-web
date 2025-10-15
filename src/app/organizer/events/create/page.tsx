import { Metadata } from 'next';
import CreateEventPage from '@/components/CreateEventPage';

export const metadata: Metadata = {
  title: 'Create Event | EventHub',
  description: 'Create and publish your event on EventHub platform.',
  keywords: ['create event', 'organize event', 'event management', 'publish event'],
  openGraph: {
    title: 'Create Event | EventHub',
    description: 'Create and publish your event with comprehensive management tools.',
    type: 'website',
  },
  robots: {
    index: false, // Private organizer page
    follow: false,
  },
};

export default function CreateEventRoute() {
  return <CreateEventPage />;
}