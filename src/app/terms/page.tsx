import { Metadata } from 'next';
import TermsOfServicePage from '@/components/TermsOfServicePage';

export const metadata: Metadata = {
  title: 'Terms of Service | EventHub',
  description: 'Read EventHub\'s Terms of Service to understand your rights and responsibilities when using our event booking platform.',
  keywords: ['terms of service', 'user agreement', 'terms and conditions', 'legal terms', 'platform rules'],
  openGraph: {
    title: 'Terms of Service | EventHub',
    description: 'Read EventHub\'s Terms of Service to understand your rights and responsibilities.',
    type: 'website',
    url: '/terms',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | EventHub',
    description: 'Read EventHub\'s Terms of Service to understand your rights and responsibilities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Terms() {
  return <TermsOfServicePage />;
}