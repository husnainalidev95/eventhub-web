'use client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Shield, 
  Globe,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in bringing people together through memorable experiences and meaningful connections.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly evolving our platform with cutting-edge technology to serve you better.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your security is our priority. We ensure safe and reliable event experiences for everyone.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making events accessible to everyone, everywhere, with an inclusive approach.'
    }
  ];

  const stats = [
    { value: '1M+', label: 'Events Hosted', icon: Calendar },
    { value: '50M+', label: 'Tickets Sold', icon: Users },
    { value: '500K+', label: 'Event Organizers', icon: Award },
    { value: '195', label: 'Countries', icon: Globe }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop'
    },
    {
      name: 'James Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Emily Chen',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              About EventHub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-blue-600">EventHub</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;re on a mission to make event discovery and booking effortless, connecting millions of people with experiences they&apos;ll never forget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button size="lg">
                  Explore Events
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
                Empowering Connections Through Events
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, EventHub was born from a simple idea: event discovery and booking should be seamless, accessible, and delightful. We saw a fragmented market where finding the right event meant jumping between multiple platforms, dealing with clunky interfaces, and missing out on amazing experiences.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we&apos;re proud to be the trusted platform for millions of event-goers and thousands of organizers worldwide. From intimate workshops to major conferences, from local meetups to global festivals – we&apos;re here to help you discover what matters.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Growing 300% year over year</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A diverse team of passionate individuals dedicated to revolutionizing the event industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Join Us On This Journey</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you&apos;re looking to discover amazing events or organize your own, we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Browse Events
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}