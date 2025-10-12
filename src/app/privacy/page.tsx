import { Metadata } from 'next';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | EventHub',
  description: 'Learn how EventHub collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR', 'CCPA', 'user rights'],
  openGraph: {
    title: 'Privacy Policy | EventHub',
    description: 'Learn how EventHub collects, uses, and protects your personal information.',
    type: 'website',
    url: '/privacy',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | EventHub',
    description: 'Learn how EventHub collects, uses, and protects your personal information.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  return <PrivacyPolicyPage />;
}