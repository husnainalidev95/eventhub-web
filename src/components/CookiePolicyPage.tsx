'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, Settings, BarChart, Target, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function CookiePolicyPage() {
  const lastUpdated = "October 12, 2025";
  
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: true,
    analytics: true,
    advertising: false
  });

  const handleSavePreferences = () => {
    // In a real app, this would save to localStorage and update cookie consent
    alert('Cookie preferences saved successfully!');
  };

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      required: true,
      description: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
      examples: [
        "Authentication and login session management",
        "Security and fraud prevention",
        "Load balancing and site performance",
        "Remember your cookie preferences"
      ],
      duration: "Session to 1 year"
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      required: false,
      description: "These cookies enable enhanced functionality and personalization. They may be set by us or third-party providers whose services we use.",
      examples: [
        "Remember your language preference",
        "Save your location for nearby events",
        "Personalize content and event recommendations",
        "Remember your display preferences (theme, layout)"
      ],
      duration: "Up to 2 years"
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      required: false,
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        "Track page views and user navigation patterns",
        "Measure website traffic and performance",
        "Identify most popular events and features",
        "A/B testing and feature optimization"
      ],
      duration: "Up to 2 years",
      providers: ["Google Analytics", "Mixpanel"]
    },
    {
      icon: Target,
      title: "Advertising Cookies",
      required: false,
      description: "These cookies are used to deliver advertisements relevant to you and your interests. They also limit the number of times you see an ad.",
      examples: [
        "Display targeted advertisements",
        "Measure ad campaign effectiveness",
        "Retargeting based on browsing behavior",
        "Share information with advertising partners"
      ],
      duration: "Up to 1 year",
      providers: ["Google Ads", "Facebook Pixel", "LinkedIn Insights"]
    }
  ];

  const thirdPartyCookies = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and user behavior tracking",
      privacy: "https://policies.google.com/privacy"
    },
    {
      name: "Stripe",
      purpose: "Payment processing and fraud prevention",
      privacy: "https://stripe.com/privacy"
    },
    {
      name: "Google Ads",
      purpose: "Advertising and remarketing",
      privacy: "https://policies.google.com/privacy"
    },
    {
      name: "Facebook Pixel",
      purpose: "Social media marketing and analytics",
      privacy: "https://www.facebook.com/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cookie className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Learn about how EventHub uses cookies and similar technologies to enhance your experience.
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
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.
              </p>
              <p className="text-gray-600 mb-4">
                EventHub uses cookies and similar technologies (such as web beacons, pixels, and local storage) to enhance your experience, understand how our platform is used, and deliver personalized content and advertisements.
              </p>
              <p className="text-gray-600">
                This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you can control your cookie preferences.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Preference Manager */}
          <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Manage Your Cookie Preferences</h2>
                  <p className="text-gray-600">
                    Control which cookies you want to allow. Essential cookies cannot be disabled as they are required for the website to function.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Label htmlFor="essential">Essential Cookies</Label>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">Required</span>
                    </div>
                    <p className="text-sm text-gray-600">Necessary for the website to function</p>
                  </div>
                  <Switch id="essential" checked={true} disabled />
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex-1">
                    <Label htmlFor="functional">Functional Cookies</Label>
                    <p className="text-sm text-gray-600">Enable personalization and enhanced features</p>
                  </div>
                  <Switch 
                    id="functional" 
                    checked={cookiePreferences.functional}
                    onCheckedChange={(checked) => setCookiePreferences(prev => ({ ...prev, functional: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex-1">
                    <Label htmlFor="analytics">Analytics Cookies</Label>
                    <p className="text-sm text-gray-600">Help us improve our website</p>
                  </div>
                  <Switch 
                    id="analytics" 
                    checked={cookiePreferences.analytics}
                    onCheckedChange={(checked) => setCookiePreferences(prev => ({ ...prev, analytics: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex-1">
                    <Label htmlFor="advertising">Advertising Cookies</Label>
                    <p className="text-sm text-gray-600">Show relevant ads based on your interests</p>
                  </div>
                  <Switch 
                    id="advertising" 
                    checked={cookiePreferences.advertising}
                    onCheckedChange={(checked) => setCookiePreferences(prev => ({ ...prev, advertising: checked }))}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={handleSavePreferences} className="flex-1 sm:flex-initial">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setCookiePreferences({ essential: true, functional: false, analytics: false, advertising: false })}
                  className="flex-1 sm:flex-initial"
                >
                  Reject All Optional
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setCookiePreferences({ essential: true, functional: true, analytics: true, advertising: true })}
                  className="flex-1 sm:flex-initial"
                >
                  Accept All
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <Card key={index}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                          {type.required && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Required</span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        
                        <div className="mb-3">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {type.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="text-blue-600 mt-1.5">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Duration: </span>
                            <span className="font-medium">{type.duration}</span>
                          </div>
                          {type.providers && (
                            <div>
                              <span className="text-gray-600">Providers: </span>
                              <span className="font-medium">{type.providers.join(', ')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Third-Party Cookies */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-6">
                In addition to our own cookies, we use third-party services that may also set cookies on your device. These third parties have their own privacy policies governing their use of information.
              </p>
              
              <div className="space-y-4">
                {thirdPartyCookies.map((provider, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{provider.name}</h3>
                        <p className="text-sm text-gray-600">{provider.purpose}</p>
                      </div>
                      <a 
                        href={provider.privacy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Privacy Policy →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How to Control Cookies */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">How to Control Cookies</h2>
              <p className="text-gray-600 mb-4">
                You have several options to manage and control cookies:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">1. Cookie Preference Manager</h3>
                  <p className="text-sm text-gray-600">
                    Use the preference manager above to enable or disable specific cookie categories.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">2. Browser Settings</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Most web browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                    <li>• <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                    <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                    <li>• <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">3. Opt-Out Tools</h3>
                  <p className="text-sm text-gray-600">
                    You can opt out of targeted advertising through <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Digital Advertising Alliance</a> or <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Network Advertising Initiative</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">4. Mobile Device Settings</h3>
                  <p className="text-sm text-gray-600">
                    iOS and Android devices have settings to limit ad tracking and manage app permissions.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-900">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and prevent you from using some features.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates to Cookie Policy */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of any significant changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
              <p className="text-gray-600">
                We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Questions About Cookies?</h2>
              <p className="text-blue-100 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>Email: privacy@eventhub.com</p>
                <p>Address: 123 Event Street, San Francisco, CA 94102</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}