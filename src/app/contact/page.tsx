import type { Metadata } from 'next';
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: 'Contact Us | EventHub',
  description: 'Get in touch with EventHub. We\'re here to help with any questions about events, bookings, or partnerships.',
};

export default function Contact() {
  return (
    <ContactPage />
  );
}