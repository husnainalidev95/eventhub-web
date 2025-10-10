'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Event } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Search, TrendingUp, Users, Star } from 'lucide-react';
import { EventCard } from '@/components/EventCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface HomePageProps {
  events: Event[];
}

export function HomePage({ events }: HomePageProps) {
  const router = useRouter();
  const [searchLocation, setSearchLocation] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const featuredEvents = events.filter(event => event.featured);
  
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.set('location', searchLocation);
    if (searchCategory && searchCategory !== 'all') params.set('category', searchCategory);
    if (searchDate) params.set('date', searchDate);
    
    router.push(`/events?${params.toString()}`);
  };

  const stats = [
    { label: 'Events This Month', value: '1,200+', icon: Calendar, color: 'text-blue-600' },
    { label: 'Active Users', value: '50K+', icon: Users, color: 'text-green-600' },
    { label: 'Cities', value: '25+', icon: MapPin, color: 'text-purple-600' },
    { label: 'Satisfaction Rate', value: '4.9★', icon: Star, color: 'text-yellow-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Discover Amazing Events
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find and book the best events in your city. From concerts to conferences, 
              we have something for everyone.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Enter city"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <label className="block text-sm mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
                    <Input
                      type="date"
                      value={searchDate}
                      onChange={(e) => setSearchDate(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <label className="block text-sm mb-2">Category</label>
                  <Select value={searchCategory} onValueChange={setSearchCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Music">Music</SelectItem>
                      <SelectItem value="Food & Drink">Food & Drink</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Entertainment">Entertainment</SelectItem>
                      <SelectItem value="Health & Wellness">Health & Wellness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-1 flex items-end">
                  <Button 
                    onClick={handleSearch} 
                    className="w-full"
                    size="lg"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search Events
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl md:text-3xl mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl mb-2">Featured Events</h2>
              <p className="text-muted-foreground">Don't miss these popular events</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => router.push('/events')}
              className="hidden sm:flex"
            >
              View All Events
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Button 
              variant="outline" 
              onClick={() => router.push('/events')}
              className="w-full"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">Find events that match your interests</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Technology', icon: '💻', count: '45' },
              { name: 'Music', icon: '🎵', count: '128' },
              { name: 'Food & Drink', icon: '🍽️', count: '67' },
              { name: 'Business', icon: '💼', count: '89' },
              { name: 'Entertainment', icon: '🎭', count: '156' },
              { name: 'Health', icon: '🧘', count: '34' }
            ].map((category, index) => (
              <Card 
                key={index} 
                className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => router.push(`/events?category=${category.name}`)}
              >
                <CardContent className="p-0">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} events</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Event Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Join thousands of event organizers and attendees who trust EventHub
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => router.push('/events')}
              className="text-primary"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}