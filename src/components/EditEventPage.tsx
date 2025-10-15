'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TicketType, Event } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, MapPin, Upload, Plus, Trash2, Save, ArrowLeft } from 'lucide-react';

// Mock data for categories and cities
const categories = [
  'Technology',
  'Music',
  'Food & Drink',
  'Business',
  'Entertainment',
  'Health & Wellness',
  'Sports',
  'Education',
  'Arts & Culture'
];

const cities = [
  'San Francisco',
  'New York',
  'Los Angeles',
  'Austin',
  'Portland',
  'Boulder',
  'Seattle',
  'Chicago',
  'Miami'
];

// Mock event data for editing
const mockEventData: Event = {
  id: 'evt1',
  title: 'Tech Conference 2025',
  description: 'Annual technology conference featuring the latest innovations and networking opportunities with industry leaders.',
  date: '2025-11-15',
  time: '09:00',
  location: 'Convention Center, 123 Main Street',
  city: 'San Francisco',
  venue: 'Main Auditorium',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  category: 'Technology',
  price: 199,
  organizerId: 'org1',
  organizerName: 'Tech Events Inc',
  ticketTypes: [
    { id: 'early-bird', name: 'Early Bird', price: 199, available: 50, total: 100 },
    { id: 'regular', name: 'Regular', price: 299, available: 200, total: 300 },
    { id: 'vip', name: 'VIP', price: 499, available: 45, total: 50 }
  ],
  totalCapacity: 450,
  soldTickets: 105,
  featured: true
};

interface EditEventPageProps {
  eventId: string;
}

export default function EditEventPage({ eventId }: EditEventPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    location: '',
    city: '',
    venue: '',
    image: ''
  });

  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load event data when component mounts
  useEffect(() => {
    // Simulate API call to fetch event data
    const loadEventData = async () => {
      setIsLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In a real app, you would fetch the event data based on eventId
      // For now, we'll use the mock data
      const eventToEdit = mockEventData; // This would be: await fetchEvent(eventId)
      
      if (eventToEdit) {
        setEventData({
          title: eventToEdit.title,
          description: eventToEdit.description,
          category: eventToEdit.category,
          date: eventToEdit.date,
          time: eventToEdit.time,
          location: eventToEdit.location,
          city: eventToEdit.city,
          venue: eventToEdit.venue,
          image: eventToEdit.image
        });
        
        setTicketTypes(eventToEdit.ticketTypes || []);
      }
      
      setIsLoading(false);
    };

    loadEventData();
  }, [eventId]); // Only depend on eventId since mockEventData is constant

  const addTicketType = () => {
    const newTicketType: TicketType = {
      id: `ticket-${Date.now()}`,
      name: '',
      price: 0,
      available: 0,
      total: 0
    };
    setTicketTypes([...ticketTypes, newTicketType]);
  };

  const updateTicketType = (index: number, field: keyof TicketType, value: string | number) => {
    const updated = [...ticketTypes];
    updated[index] = { ...updated[index], [field]: value };
    
    // Auto-update available when total changes (but respect existing sold tickets)
    if (field === 'total') {
      const soldTickets = updated[index].total - updated[index].available;
      updated[index].available = Math.max(0, (value as number) - soldTickets);
    }
    
    setTicketTypes(updated);
  };

  const removeTicketType = (index: number) => {
    if (ticketTypes.length > 1) {
      setTicketTypes(ticketTypes.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/organizer');
    }, 1500);
  };

  const isFormValid = () => {
    return (
      eventData.title &&
      eventData.description &&
      eventData.category &&
      eventData.date &&
      eventData.time &&
      eventData.location &&
      eventData.city &&
      eventData.venue &&
      ticketTypes.every(ticket => ticket.name && ticket.price >= 0 && ticket.total > 0)
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading event details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.push('/organizer')} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Edit Event
          </h1>
          <p className="text-gray-600">
            Update your event details and settings
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Form */}
            <div className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Event Title *</Label>
                    <Input
                      id="title"
                      value={eventData.title}
                      onChange={(e) => setEventData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter event title"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={eventData.description}
                      onChange={(e) => setEventData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your event..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={eventData.category} onValueChange={(value) => setEventData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Event Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={eventData.date}
                        onChange={(e) => setEventData(prev => ({ ...prev, date: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Start Time *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={eventData.time}
                        onChange={(e) => setEventData(prev => ({ ...prev, time: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="location">Venue/Address *</Label>
                    <Input
                      id="location"
                      value={eventData.location}
                      onChange={(e) => setEventData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g., Convention Center, 123 Main St"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Select value={eventData.city} onValueChange={(value) => setEventData(prev => ({ ...prev, city: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="venue">Venue Name *</Label>
                      <Input
                        id="venue"
                        value={eventData.venue}
                        onChange={(e) => setEventData(prev => ({ ...prev, venue: e.target.value }))}
                        placeholder="e.g., Main Hall, Room A"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ticket Types */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Ticket Types</CardTitle>
                    <Button type="button" variant="outline" size="sm" onClick={addTicketType}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Ticket Type
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Mobile: Stacked Cards */}
                  <div className="block lg:hidden space-y-4">
                    {ticketTypes.map((ticket, index) => (
                      <Card key={ticket.id} className="border">
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div>
                              <Label>Ticket Name *</Label>
                              <Input
                                value={ticket.name}
                                onChange={(e) => updateTicketType(index, 'name', e.target.value)}
                                placeholder="e.g., General Admission"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Price ($) *</Label>
                                <Input
                                  type="number"
                                  value={ticket.price}
                                  onChange={(e) => updateTicketType(index, 'price', parseFloat(e.target.value) || 0)}
                                  min="0"
                                  step="0.01"
                                />
                              </div>
                              <div>
                                <Label>Total Quantity *</Label>
                                <Input
                                  type="number"
                                  value={ticket.total}
                                  onChange={(e) => updateTicketType(index, 'total', parseInt(e.target.value) || 0)}
                                  min="1"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                  Available: {ticket.available}
                                </p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeTicketType(index)}
                              disabled={ticketTypes.length === 1}
                              className="w-full"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove Ticket Type
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Desktop: Table */}
                  <div className="hidden lg:block">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ticket Name *</TableHead>
                          <TableHead>Price ($) *</TableHead>
                          <TableHead>Total Quantity *</TableHead>
                          <TableHead>Available</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {ticketTypes.map((ticket, index) => (
                          <TableRow key={ticket.id}>
                            <TableCell>
                              <Input
                                value={ticket.name}
                                onChange={(e) => updateTicketType(index, 'name', e.target.value)}
                                placeholder="e.g., General Admission"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                value={ticket.price}
                                onChange={(e) => updateTicketType(index, 'price', parseFloat(e.target.value) || 0)}
                                min="0"
                                step="0.01"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                value={ticket.total}
                                onChange={(e) => updateTicketType(index, 'total', parseInt(e.target.value) || 0)}
                                min="1"
                              />
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">
                                {ticket.available}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeTicketType(index)}
                                disabled={ticketTypes.length === 1}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview/Image Upload */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Image Upload */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      Event Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        {eventData.image ? (
                          <Image
                            src={eventData.image}
                            alt="Event preview"
                            width={400}
                            height={225}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-center">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Upload event image</p>
                          </div>
                        )}
                      </div>
                      <Input
                        type="url"
                        placeholder="Or paste image URL"
                        value={eventData.image}
                        onChange={(e) => setEventData(prev => ({ ...prev, image: e.target.value }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Event Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Event Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-sm text-gray-600">Title</Label>
                      <p className="text-sm text-gray-900">{eventData.title || 'Untitled Event'}</p>
                    </div>
                    
                    {eventData.category && (
                      <div>
                        <Label className="text-sm text-gray-600">Category</Label>
                        <Badge variant="secondary" className="block w-fit mt-1">
                          {eventData.category}
                        </Badge>
                      </div>
                    )}
                    
                    {eventData.date && (
                      <div>
                        <Label className="text-sm text-gray-600">Date & Time</Label>
                        <p className="text-sm text-gray-900">
                          {new Date(eventData.date).toLocaleDateString()} 
                          {eventData.time && ` at ${eventData.time}`}
                        </p>
                      </div>
                    )}
                    
                    {eventData.city && (
                      <div>
                        <Label className="text-sm text-gray-600">Location</Label>
                        <p className="text-sm text-gray-900">{eventData.city}</p>
                      </div>
                    )}
                    
                    <div>
                      <Label className="text-sm text-gray-600">Total Capacity</Label>
                      <p className="text-sm text-gray-900">
                        {ticketTypes.reduce((sum, ticket) => sum + ticket.total, 0)} tickets
                      </p>
                    </div>
                    
                    <div>
                      <Label className="text-sm text-gray-600">Available</Label>
                      <p className="text-sm text-gray-900">
                        {ticketTypes.reduce((sum, ticket) => sum + ticket.available, 0)} tickets
                      </p>
                    </div>
                    
                    <div>
                      <Label className="text-sm text-gray-600">Price Range</Label>
                      <p className="text-sm text-gray-900">
                        ${Math.min(...ticketTypes.map(t => t.price))} - ${Math.max(...ticketTypes.map(t => t.price))}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Desktop Submit Button */}
                <Button 
                  type="submit" 
                  className="hidden lg:flex w-full" 
                  size="lg"
                  disabled={!isFormValid() || isSubmitting}
                >
                  {isSubmitting ? (
                    'Updating Event...'
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Update Event
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Sticky Footer */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={!isFormValid() || isSubmitting}
            >
              {isSubmitting ? (
                'Updating Event...'
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Update Event
                </>
              )}
            </Button>
          </div>
          
          {/* Mobile padding for sticky footer */}
          <div className="lg:hidden h-20"></div>
        </form>
      </div>
    </div>
  );
}