import { Metadata } from 'next';
import OrganizerDashboard from '@/components/OrganizerDashboard';

export const metadata: Metadata = {
  title: 'Organizer Dashboard | EventHub',
  description: 'Manage your events and track performance with EventHub organizer dashboard.',
  keywords: ['organizer', 'dashboard', 'events', 'analytics', 'revenue', 'event management'],
  openGraph: {
    title: 'Organizer Dashboard | EventHub',
    description: 'Manage your events and track performance with comprehensive analytics.',
    type: 'website',
  },
  robots: {
    index: false, // Private dashboard
    follow: false,
  },
};

export default function OrganizerPage() {
  return <OrganizerDashboard />;
}