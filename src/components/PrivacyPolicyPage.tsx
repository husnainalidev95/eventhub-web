'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, Users, Database, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 12, 2025";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, we collect your name, email address, phone number, and payment information. Event organizers may collect additional information necessary for event registration."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information about your device, including your IP address, browser type, operating system, and browsing behavior on our platform using cookies and similar technologies."
        },
        {
          subtitle: "Event-Related Information",
          text: "When you book tickets or attend events, we collect information about your event preferences, attendance history, and interactions with event organizers."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to process bookings, send event confirmations and reminders, facilitate communication with event organizers, and provide customer support."
        },
        {
          subtitle: "Platform Improvement",
          text: "We analyze user behavior and feedback to improve our services, develop new features, and personalize your experience on EventHub."
        },
        {
          subtitle: "Marketing Communications",
          text: "With your consent, we may send you promotional emails about events, features, and special offers. You can opt out at any time through your account settings or email preferences."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with legal obligations, enforce our terms of service, protect our rights and property, and prevent fraud or abuse."
        }
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Event Organizers",
          text: "When you book a ticket, we share necessary information (name, email, attendance details) with the event organizer to facilitate your participation."
        },
        {
          subtitle: "Service Providers",
          text: "We work with trusted third-party service providers for payment processing, email delivery, analytics, and hosting services. These providers are contractually obligated to protect your data."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or governmental authority, or to protect the safety and rights of EventHub, our users, or the public."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to the same privacy protections."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including encryption (SSL/TLS), secure servers, regular security audits, and access controls to protect your personal information."
        },
        {
          subtitle: "Payment Security",
          text: "All payment transactions are processed through PCI-DSS compliant payment processors. We do not store complete credit card numbers on our servers."
        },
        {
          subtitle: "Data Breach Protocol",
          text: "In the event of a data breach affecting your personal information, we will notify you and relevant authorities within 72 hours as required by applicable laws."
        }
      ]
    },
    {
      icon: Shield,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You can access and update your personal information at any time through your account settings. Contact us if you need assistance."
        },
        {
          subtitle: "Data Deletion",
          text: "You have the right to request deletion of your account and personal data. Note that we may retain certain information as required by law or for legitimate business purposes."
        },
        {
          subtitle: "Marketing Opt-Out",
          text: "You can unsubscribe from marketing emails by clicking the unsubscribe link in any promotional email or adjusting your preferences in account settings."
        },
        {
          subtitle: "Cookie Management",
          text: "You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality."
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your personal data in a structured, machine-readable format. Contact our support team to make this request."
        }
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        {
          subtitle: "Account Information",
          text: "We retain your account information for as long as your account is active or as needed to provide services. After account deletion, we retain certain data for legal compliance."
        },
        {
          subtitle: "Booking History",
          text: "Booking and transaction records are retained for 7 years to comply with financial regulations and resolve disputes."
        },
        {
          subtitle: "Analytics Data",
          text: "Aggregated and anonymized analytics data may be retained indefinitely for business intelligence and platform improvement purposes."
        }
      ]
    }
  ];

  const regionalCompliance = [
    {
      region: "GDPR (European Union)",
      points: [
        "We are committed to GDPR compliance for our European users",
        "You have rights to access, rectification, erasure, restriction, and data portability",
        "We obtain explicit consent for data processing and marketing communications",
        "You can withdraw consent at any time"
      ]
    },
    {
      region: "CCPA (California)",
      points: [
        "California residents have additional rights under the California Consumer Privacy Act",
        "Right to know what personal information is collected and how it's used",
        "Right to delete personal information",
        "Right to opt-out of the sale of personal information (we do not sell personal data)"
      ]
    },
    {
      region: "International Transfers",
      points: [
        "Your data may be transferred and processed in countries outside your residence",
        "We ensure appropriate safeguards are in place for international data transfers",
        "We comply with Privacy Shield principles and standard contractual clauses"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-600 mb-4">
                EventHub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, share, and safeguard your data when you use our event booking and management platform.
              </p>
              <p className="text-gray-600 mb-4">
                By using EventHub, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{section.title}</h2>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regional Compliance */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Regional Privacy Laws</h2>
            <div className="space-y-6">
              {regionalCompliance.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.region}</h3>
                    <ul className="space-y-2">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Children's Privacy */}
          <Card className="mt-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-600 mb-4">
                EventHub is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
              </p>
              <p className="text-gray-600">
                For users between 13 and 18, we recommend that parents or guardians review this Privacy Policy and supervise the use of our platform.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card className="mt-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Third-Party Links and Services</h2>
              <p className="text-gray-600 mb-4">
                Our platform may contain links to third-party websites, services, or event organizer pages. We are not responsible for the privacy practices or content of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
              <p className="text-gray-600">
                Some event organizers may use their own registration systems or collect additional information. Their data collection and use practices are governed by their own privacy policies, not ours.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-8 bg-blue-600 text-white">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">Questions About Privacy?</h2>
                  <p className="text-blue-100 mb-4">
                    If you have questions about this Privacy Policy, how we handle your data, or wish to exercise your privacy rights, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>Email: privacy@eventhub.com</p>
                    <p>Address: 123 Event Street, San Francisco, CA 94102</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}