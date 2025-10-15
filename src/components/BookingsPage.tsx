'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Booking } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Download, Search, QrCode } from 'lucide-react';

// Mock data for bookings (in a real app, this would come from an API)
const mockBookings: Booking[] = [
  {
    id: 'BK001',
    eventId: 'evt1',
    eventTitle: 'Tech Conference 2025',
    eventDate: '2025-11-15T09:00:00Z',
    eventLocation: 'San Francisco, CA',
    tickets: [
      { ticketTypeId: 'general', ticketTypeName: 'General Admission', quantity: 2, price: 199 }
    ],
    totalAmount: 398,
    status: 'confirmed',
    bookingDate: '2025-10-01T10:30:00Z',
    qrCode: 'qr_code_data_here'
  },
  {
    id: 'BK002',
    eventId: 'evt2',
    eventTitle: 'Music Festival Summer',
    eventDate: '2025-07-20T16:00:00Z',
    eventLocation: 'Austin, TX',
    tickets: [
      { ticketTypeId: 'vip', ticketTypeName: 'VIP Pass', quantity: 1, price: 299 }
    ],
    totalAmount: 299,
    status: 'confirmed',
    bookingDate: '2025-06-15T14:20:00Z',
    qrCode: 'qr_code_data_here_2'
  },
  {
    id: 'BK003',
    eventId: 'evt3',
    eventTitle: 'Business Workshop',
    eventDate: '2025-09-10T10:00:00Z',
    eventLocation: 'New York, NY',
    tickets: [
      { ticketTypeId: 'early', ticketTypeName: 'Early Bird', quantity: 1, price: 149 }
    ],
    totalAmount: 149,
    status: 'cancelled',
    bookingDate: '2025-08-01T09:15:00Z',
    qrCode: 'qr_code_data_here_3'
  }
];

export default function BookingsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredBookings = mockBookings
    .filter(booking => {
      if (statusFilter !== 'all' && booking.status !== statusFilter) return false;
      if (searchQuery && !booking.eventTitle.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime();
        case 'date-asc':
          return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
        case 'amount-desc':
          return b.totalAmount - a.totalAmount;
        case 'amount-asc':
          return a.totalAmount - b.totalAmount;
        default:
          return 0;
      }
    });

  const upcomingBookings = filteredBookings.filter(booking => 
    new Date(booking.eventDate) > new Date() && booking.status === 'confirmed'
  );
  
  const pastBookings = filteredBookings.filter(booking => 
    new Date(booking.eventDate) <= new Date() || booking.status === 'cancelled'
  );

  const BookingCard = ({ booking }: { booking: Booking }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-24 h-24 rounded-lg overflow-hidden shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium line-clamp-1">{booking.eventTitle}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(booking.eventDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.eventLocation}</span>
                  </div>
                </div>
              </div>
              <Badge className={getStatusColor(booking.status)}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Booking ID:</span>
                <div className="font-mono text-gray-900">{booking.id}</div>
              </div>
              <div>
                <span className="text-gray-600">Total Amount:</span>
                <div className="font-semibold text-gray-900">${booking.totalAmount}</div>
              </div>
            </div>
            
            <div className="text-sm">
              <span className="text-gray-600">Tickets:</span>
              <div className="mt-1">
                {booking.tickets.map((ticket, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{ticket.ticketTypeName} × {ticket.quantity}</span>
                    <span>${ticket.price * ticket.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {booking.status === 'confirmed' && (
                <>
                  <Button size="sm" variant="outline">
                    <QrCode className="w-4 h-4 mr-2" />
                    Show QR Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Ticket
                  </Button>
                </>
              )}
              <Button 
                size="sm" 
                variant="ghost"
                onClick={() => router.push(`/events/${booking.eventId}`)}
              >
                View Event
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">
            Manage your event tickets and bookings
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search bookings..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Date (Newest First)</SelectItem>
                    <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
                    <SelectItem value="amount-desc">Amount (High to Low)</SelectItem>
                    <SelectItem value="amount-asc">Amount (Low to High)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingBookings.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past ({pastBookings.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
                  <p className="text-gray-600 mb-4">
                    You don&apos;t have any upcoming event bookings.
                  </p>
                  <Link href="/events">
                    <Button>
                      Browse Events
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastBookings.length > 0 ? (
              pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Past Events</h3>
                  <p className="text-gray-600">
                    Your past event bookings will appear here.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}