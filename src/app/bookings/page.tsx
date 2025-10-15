import { Metadata } from 'next';
import BookingsPage from '@/components/BookingsPage';

export const metadata: Metadata = {
  title: 'My Bookings | EventHub',
  description: 'View and manage your event tickets and bookings on EventHub.',
  keywords: ['bookings', 'tickets', 'events', 'my events', 'event management'],
  openGraph: {
    title: 'My Bookings | EventHub',
    description: 'View and manage your event tickets and bookings.',
    type: 'website',
    url: '/bookings',
  },
  twitter: {
    card: 'summary',
    title: 'My Bookings | EventHub',
    description: 'View and manage your event tickets and bookings.',
  },
  robots: {
    index: false, // Bookings are private, don't index
    follow: true,
  },
};

export default function Bookings() {
  return <BookingsPage />;
}