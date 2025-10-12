'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  CreditCard,
  Users,
  Calendar,
  MessageSquare,
  Mail,
  Shield,
  Ticket,
  Settings,
  Phone,
  Clock
} from 'lucide-react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: Ticket, title: 'Booking & Tickets', count: 12, id: 'booking' },
    { icon: CreditCard, title: 'Payments & Refunds', count: 8, id: 'payments' },
    { icon: Users, title: 'Account & Profile', count: 10, id: 'account' },
    { icon: Calendar, title: 'Event Organizers', count: 15, id: 'organizers' },
    { icon: Shield, title: 'Safety & Security', count: 6, id: 'safety' },
    { icon: Settings, title: 'Technical Support', count: 9, id: 'technical' }
  ];

  const generalFAQs = [
    {
      question: 'How do I book tickets for an event?',
      answer: 'To book tickets, browse events on our platform, select the event you\'re interested in, choose your ticket type and quantity, then proceed to checkout. You\'ll need to create an account or log in to complete your booking. After payment, you\'ll receive a confirmation email with your tickets.',
      category: 'booking'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, Apple Pay, and Google Pay. All transactions are securely processed and encrypted for your safety.',
      category: 'payments'
    },
    {
      question: 'Can I get a refund for my tickets?',
      answer: 'Refund policies vary by event and are set by the event organizer. You can view the specific refund policy on each event\'s page before booking. Generally, refunds are available up to 7 days before the event, but some events may have different policies.',
      category: 'payments'
    },
    {
      question: 'How do I access my tickets?',
      answer: 'Your tickets are available in the "My Bookings" section of your account. You can access them via email confirmation or by logging into your EventHub account. Tickets can be displayed on your mobile device or printed as a PDF.',
      category: 'booking'
    },
    {
      question: 'How do I create an account?',
      answer: 'Click the "Sign Up" button in the top right corner of any page. You can register with your email address or use Google/Facebook login. After creating your account, you\'ll receive a confirmation email to verify your address.',
      category: 'account'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take your privacy and security seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent. Read our Privacy Policy for more details.',
      category: 'safety'
    },
    {
      question: 'How do I list an event on EventHub?',
      answer: 'To list an event, create an organizer account and go to your dashboard. Click "Create Event" and fill out all the required information including event details, ticket types, and pricing. Once submitted, our team will review and approve your event within 24 hours.',
      category: 'organizers'
    },
    {
      question: 'What are the fees for event organizers?',
      answer: 'EventHub charges a small service fee per ticket sold, which covers payment processing and platform usage. The exact fee depends on your event type and ticket price. You can see a full breakdown during the event creation process.',
      category: 'organizers'
    }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      available: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Contact Us',
      available: true,
      link: '/contact'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us Mon-Fri, 9AM-6PM EST',
      action: '+1 (555) 123-4567',
      available: true,
      link: 'tel:+15551234567'
    }
  ];

  const filteredFAQs = generalFAQs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How can we <span className="text-blue-600">help you?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to common questions, get support, and learn how to make the most of EventHub.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Need immediate help?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <action.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                  {action.link ? (
                    <Link href={action.link}>
                      <Button variant="outline" className="w-full">
                        {action.action}
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="w-full">
                      {action.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.count} articles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="booking">Booking</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="booking">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.filter(faq => faq.category === 'booking').map((faq, index) => (
                    <AccordionItem key={index} value={`booking-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="payments">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.filter(faq => faq.category === 'payments').map((faq, index) => (
                    <AccordionItem key={index} value={`payments-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="account">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.filter(faq => faq.category === 'account').map((faq, index) => (
                    <AccordionItem key={index} value={`account-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}