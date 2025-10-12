import type { Metadata } from 'next';
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: 'About Us | EventHub',
  description: 'Learn about EventHub\'s mission to connect people through amazing events and experiences.',
};

export default function About() {
  return (
    <AboutPage />
  );
}