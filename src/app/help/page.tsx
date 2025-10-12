import type { Metadata } from 'next';
import HelpPage from "@/components/HelpPage";

export const metadata: Metadata = {
  title: 'Help & FAQ | EventHub',
  description: 'Find answers to common questions about EventHub. Get help with bookings, payments, account settings, and more.',
};

export default function Help() {
  return (
    <HelpPage />
  );
}