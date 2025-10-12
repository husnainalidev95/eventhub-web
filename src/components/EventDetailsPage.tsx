'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Event, TicketType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Clock, Users, Star, Plus, Minus, Share2, Heart, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface EventDetailsPageProps {
  events: Event[];
  eventId: string;
}

export function EventDetailsPage({ events, eventId }: EventDetailsPageProps) {
  const router = useRouter();
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState('description');

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Event not found</h2>
          <Button onClick={() => router.push('/events')}>
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const updateTicketQuantity = (ticketTypeId: string, change: number) => {
    setSelectedTickets(prev => {
      const current = prev[ticketTypeId] || 0;
      const newQuantity = Math.max(0, current + change);
      
      if (newQuantity === 0) {
        const { [ticketTypeId]: removed, ...rest } = prev;
        return rest;
      }
      
      return { ...prev, [ticketTypeId]: newQuantity };
    });
  };

  const getTotalAmount = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketTypeId, quantity]) => {
      const ticketType = event.ticketTypes.find(t => t.id === ticketTypeId);
      return total + (ticketType ? ticketType.price * quantity : 0);
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((total, quantity) => total + quantity, 0);
  };

  const handleCheckout = () => {
    if (getTotalTickets() > 0) {
      // For now, just navigate to checkout page
      // In a real app, you'd pass the booking data via URL params or state management
      router.push(`/checkout/${event.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.push('/events')} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="aspect-video rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="secondary">{event.category}</Badge>
                {event.featured && (
                  <Badge variant="default" className="bg-primary">Featured</Badge>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">{event.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(event.date)} at {formatTime(event.time)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{event.location}, {event.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{event.soldTickets}/{event.totalCapacity} attending</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="venue">Venue</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-4">About This Event</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    
                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="text-lg mb-3">Organizer</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{event.organizerName}</div>
                          <div className="text-sm text-muted-foreground">Event Organizer</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="venue" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-4">Venue Information</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium">{event.location}</div>
                        <div className="text-muted-foreground">{event.venue}</div>
                        <div className="text-muted-foreground">{event.city}</div>
                      </div>
                      
                      <Separator />
                      
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <MapPin className="w-8 h-8 mx-auto mb-2" />
                          <div>Interactive Map</div>
                          <div className="text-sm">Get directions to venue</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">What should I bring to the event?</h4>
                        <p className="text-muted-foreground text-sm">
                          Please bring a valid ID and your ticket confirmation. Specific requirements may vary by event type.
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium mb-2">Can I get a refund?</h4>
                        <p className="text-muted-foreground text-sm">
                          Refunds are available up to 48 hours before the event start time, subject to our refund policy.
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium mb-2">Is there parking available?</h4>
                        <p className="text-muted-foreground text-sm">
                          Yes, parking is available at the venue. We recommend arriving early as spaces are limited.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Ticket Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle>Select Tickets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {event.ticketTypes.map((ticketType) => (
                    <div key={ticketType.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-medium">{ticketType.name}</div>
                          <div className="text-2xl font-semibold">${ticketType.price}</div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div>{ticketType.available} available</div>
                          <div>of {ticketType.total} total</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Quantity</span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateTicketQuantity(ticketType.id, -1)}
                            disabled={!selectedTickets[ticketType.id]}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {selectedTickets[ticketType.id] || 0}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateTicketQuantity(ticketType.id, 1)}
                            disabled={ticketType.available === 0}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {getTotalTickets() > 0 && (
                    <>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Total Tickets:</span>
                          <span>{getTotalTickets()}</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total Amount:</span>
                          <span>${getTotalAmount()}</span>
                        </div>
                      </div>
                    </>
                  )}
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleCheckout}
                    disabled={getTotalTickets() === 0}
                  >
                    {getTotalTickets() > 0 ? 'Proceed to Checkout' : 'Select Tickets'}
                  </Button>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    Free cancellation up to 48 hours before event
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}