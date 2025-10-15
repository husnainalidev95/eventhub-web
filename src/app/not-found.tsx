'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  Calendar, 
  Search, 
  ArrowLeft, 
  MapPin,
  ExternalLink 
} from 'lucide-react';

export default function NotFound() {
  const popularLinks = [
    { 
      href: '/events', 
      label: 'Browse Events', 
      icon: Calendar,
      description: 'Discover amazing events happening near you'
    },
    { 
      href: '/about', 
      label: 'About EventHub', 
      icon: MapPin,
      description: 'Learn more about our mission and team'
    },
    { 
      href: '/contact', 
      label: 'Contact Support', 
      icon: ExternalLink,
      description: 'Get help from our support team'
    },
    { 
      href: '/help', 
      label: 'Help Center', 
      icon: Search,
      description: 'Find answers to common questions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main 404 Content */}
        <div className="mb-8">
          <div className="relative mb-6">
            <h1 className="text-8xl md:text-9xl font-bold text-blue-200 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 md:w-20 md:h-20 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for seems to have wandered off to another event. 
            Let&apos;s get you back on track!
          </p>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Popular Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Maybe you&apos;re looking for:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {popularLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-200">
                  <CardContent className="p-6 text-left">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <link.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {link.label}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
          <p className="text-gray-600 mb-4">
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
            <Link href="/help">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Visit Help Center
              </Button>
            </Link>
          </div>
        </div>

        {/* Error Reference */}
        <div className="mt-8 text-xs text-gray-400">
          Error Code: 404 - Page Not Found
        </div>
      </div>
    </div>
  );
}