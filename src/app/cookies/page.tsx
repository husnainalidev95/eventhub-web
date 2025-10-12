import { Metadata } from 'next';
import CookiePolicyPage from '@/components/CookiePolicyPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | EventHub',
  description: 'Learn how EventHub uses cookies and similar technologies to enhance your experience and improve our services.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'analytics', 'privacy', 'web technologies'],
  openGraph: {
    title: 'Cookie Policy | EventHub',
    description: 'Learn how EventHub uses cookies and similar technologies to enhance your experience.',
    type: 'website',
    url: '/cookies',
  },
  twitter: {
    card: 'summary',
    title: 'Cookie Policy | EventHub',
    description: 'Learn how EventHub uses cookies and similar technologies to enhance your experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Cookies() {
  return <CookiePolicyPage />;
}