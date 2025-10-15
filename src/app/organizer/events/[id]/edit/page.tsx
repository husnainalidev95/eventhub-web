import { Metadata } from 'next';
import EditEventPage from '@/components/EditEventPage';

export const metadata: Metadata = {
  title: 'Edit Event | EventHub',
  description: 'Edit your event details and settings on EventHub.',
  keywords: ['edit event', 'update event', 'event management', 'modify event'],
  openGraph: {
    title: 'Edit Event | EventHub',
    description: 'Update your event with comprehensive management tools.',
    type: 'website',
  },
  robots: {
    index: false, // Private organizer page
    follow: false,
  },
};

interface EditEventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditEventRoute({ params }: EditEventPageProps) {
  const { id } = await params;
  return <EditEventPage eventId={id} />;
}