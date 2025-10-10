import { HomePage } from '@/components/HomePage';
import { mockEvents } from '@/lib/mock-data';

export default function Home() {
  return <HomePage events={mockEvents} />;
}
