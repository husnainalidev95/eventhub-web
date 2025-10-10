'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">EventHub</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting event organizers and attendees worldwide. Discover, create, and manage unforgettable events.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/events"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Browse Events
                </Link>
              </li>
              <li>
                <Link 
                  href="/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Event Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => router.push('/events?category=Technology')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/events?category=Business')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Business
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/events?category=Entertainment')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Entertainment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/events?category=Health')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Health & Wellness
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Connected</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@eventhub.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-2">
              <p className="text-sm text-gray-300 mb-3">Subscribe for event updates</p>
              <div className="flex flex-col gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 w-full"
                />
                <Button size="sm" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p>&copy; 2024 EventHub. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button className="hover:text-white transition-colors">Privacy Policy</button>
                <span className="hidden sm:inline">•</span>
                <button className="hover:text-white transition-colors">Terms of Service</button>
                <span className="hidden sm:inline">•</span>
                <button className="hover:text-white transition-colors">Cookie Policy</button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-center">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>for event lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}