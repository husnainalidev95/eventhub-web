'use client';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Scale, AlertCircle, Users, CreditCard, Shield, Ban, Gavel } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function TermsOfServicePage() {
  const lastUpdated = "October 12, 2025";

  const sections = [
    {
      icon: Users,
      title: "Account Registration and Use",
      content: [
        {
          subtitle: "Account Creation",
          text: "You must create an account to book tickets on EventHub. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account."
        },
        {
          subtitle: "User Types",
          text: "Regular users can create their own accounts. Event organizer accounts must be created by platform administrators. Each user type has specific permissions and responsibilities outlined in these terms."
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not use the platform for any illegal purposes, to infringe on others' rights, to transmit harmful content, or to interfere with the platform's operation. Violation may result in account termination."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Booking and Payment Terms",
      content: [
        {
          subtitle: "Ticket Purchases",
          text: "All ticket purchases are subject to availability and acceptance by the event organizer. Prices are displayed in USD and include applicable taxes and service fees. Payment is required at the time of booking."
        },
        {
          subtitle: "Payment Processing",
          text: "We use third-party payment processors to handle transactions. By providing payment information, you authorize us to charge your payment method for the total amount of your purchase, including all fees."
        },
        {
          subtitle: "Service Fees",
          text: "EventHub charges a service fee on each ticket purchase, which is non-refundable except as required by law. This fee covers platform maintenance, customer support, and transaction processing."
        },
        {
          subtitle: "Pricing Errors",
          text: "We reserve the right to correct pricing errors on our platform. If a product or service is listed at an incorrect price, we may cancel orders placed for that product or service and notify you."
        }
      ]
    },
    {
      icon: Ban,
      title: "Cancellations and Refunds",
      content: [
        {
          subtitle: "User Cancellations",
          text: "Refund policies vary by event and are set by event organizers. Generally, refunds are available up to 7 days before the event date. Check the specific event's refund policy before purchasing."
        },
        {
          subtitle: "Event Cancellations",
          text: "If an event is cancelled by the organizer, you will receive a full refund including service fees. Refunds are typically processed within 5-7 business days to your original payment method."
        },
        {
          subtitle: "Event Changes",
          text: "Event organizers may change event details (date, time, venue) with reasonable notice. You may be eligible for a refund if you cannot attend due to significant changes. Contact the organizer or our support team."
        },
        {
          subtitle: "No-Show Policy",
          text: "Tickets are generally non-refundable if you fail to attend the event. Some events may have specific no-show policies. We recommend reviewing event details carefully before purchasing."
        }
      ]
    },
    {
      icon: Gavel,
      title: "Event Organizer Responsibilities",
      content: [
        {
          subtitle: "Event Creation and Management",
          text: "Event organizers must provide accurate event information, honor ticket sales, deliver events as advertised, and comply with all applicable laws and regulations."
        },
        {
          subtitle: "Payout Terms",
          text: "Organizers receive payouts within 5-7 business days after the event concludes. EventHub charges a 5% service fee on ticket sales plus payment processing fees (typically 2.9% + $0.30 per transaction)."
        },
        {
          subtitle: "Organizer Obligations",
          text: "Organizers are responsible for event content, compliance with local regulations, obtaining necessary permits, ensuring participant safety, and managing attendee communications."
        },
        {
          subtitle: "Prohibited Events",
          text: "Organizers may not create events that promote illegal activities, discrimination, hate speech, violence, or violate intellectual property rights. EventHub reserves the right to remove non-compliant events."
        }
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Platform Content",
          text: "All content on EventHub, including text, graphics, logos, software, and design elements, is owned by EventHub or its licensors and is protected by intellectual property laws."
        },
        {
          subtitle: "User Content",
          text: "You retain ownership of content you submit to EventHub but grant us a worldwide, non-exclusive license to use, display, and distribute your content in connection with the platform's operation."
        },
        {
          subtitle: "Event Content",
          text: "Event organizers are responsible for ensuring they have the right to use all content in their event listings, including images, logos, and descriptions. EventHub is not liable for copyright infringement by organizers."
        },
        {
          subtitle: "Trademark",
          text: "EventHub and its logo are trademarks of EventHub Inc. You may not use our trademarks without prior written permission."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Platform Availability",
          text: "We strive for 99.9% uptime but do not guarantee uninterrupted access. The platform is provided \"as is\" without warranties of any kind, express or implied."
        },
        {
          subtitle: "Event Responsibility",
          text: "EventHub is a platform connecting users with event organizers. We are not responsible for the quality, safety, legality, or accuracy of events. Event organizers are solely responsible for their events."
        },
        {
          subtitle: "Maximum Liability",
          text: "Our total liability to you for any claims arising from your use of EventHub is limited to the amount you paid to us in the 12 months preceding the claim, or $100, whichever is greater."
        },
        {
          subtitle: "Exclusions",
          text: "We are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, even if we have been advised of the possibility of such damages."
        }
      ]
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      content: [
        {
          subtitle: "Governing Law",
          text: "These Terms are governed by the laws of the State of California, United States, without regard to its conflict of law provisions."
        },
        {
          subtitle: "Arbitration Agreement",
          text: "Any dispute arising from these Terms or your use of EventHub will be resolved through binding arbitration rather than in court, except that you may assert claims in small claims court."
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree to resolve disputes with us on an individual basis and waive the right to participate in class actions, class arbitrations, or representative proceedings."
        },
        {
          subtitle: "Informal Resolution",
          text: "Before initiating arbitration, you agree to first contact us to attempt to resolve the dispute informally. Contact our support team at legal@eventhub.com."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Please read these terms carefully before using EventHub. By using our platform, you agree to be bound by these terms.
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
                Welcome to EventHub! These Terms of Service (&quot;Terms&quot;) govern your access to and use of the EventHub platform, including our website, mobile applications, and related services (collectively, the &quot;Service&quot;). 
              </p>
              <p className="text-gray-600 mb-4">
                By accessing or using EventHub, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Service.
              </p>
              <p className="text-gray-600">
                EventHub is owned and operated by EventHub Inc. (&quot;EventHub,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We reserve the right to update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </CardContent>
          </Card>

          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertDescription className="text-gray-700">
              <strong className="text-gray-900">Important:</strong> These Terms include a mandatory arbitration agreement and class action waiver that affect your legal rights. Please read Section 7 carefully.
            </AlertDescription>
          </Alert>

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
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                        {index + 1}. {section.title}
                      </h2>
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

          {/* Additional Important Terms */}
          <div className="mt-8 space-y-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms, is harmful to other users, us, or third parties, or for any other reason.
                </p>
                <p className="text-gray-600 mb-4">
                  You may terminate your account at any time through your account settings. Upon termination, your right to use the Service will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive.
                </p>
                <p className="text-gray-600">
                  Termination of your account does not relieve you of any obligations to pay outstanding fees or charges incurred before termination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify, defend, and hold harmless EventHub, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including legal fees, arising out of or in any way connected with: (a) your access to or use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any event you organize through the platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">10. Modifications to Service</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                </p>
                <p className="text-gray-600">
                  We may also impose limits on certain features or restrict your access to parts or all of the Service without notice or liability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">11. General Provisions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Entire Agreement</h3>
                    <p className="text-gray-600">
                      These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and EventHub regarding the use of the Service.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Severability</h3>
                    <p className="text-gray-600">
                      If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Waiver</h3>
                    <p className="text-gray-600">
                      Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Assignment</h3>
                    <p className="text-gray-600">
                      You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-8 bg-blue-600 text-white">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Questions About These Terms?</h2>
              <p className="text-blue-100 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>Email: legal@eventhub.com</p>
                <p>Address: 123 Event Street, San Francisco, CA 94102</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}