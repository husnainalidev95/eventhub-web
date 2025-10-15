'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Event } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Edit, 
  Plus,
  BarChart3,
  PieChart,
  Download
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as PieChartRecharts, Cell, Pie } from 'recharts';

// Mock data for events (in a real app, this would come from an API)
const mockEvents: Event[] = [
  {
    id: 'evt1',
    title: 'Tech Conference 2025',
    description: 'Annual technology conference featuring the latest innovations',
    date: '2025-11-15',
    time: '09:00',
    location: 'Convention Center',
    city: 'San Francisco, CA',
    venue: 'Moscone Center',
    image: '/images/tech-conference.jpg',
    category: 'Technology',
    price: 199,
    organizerId: 'org1',
    organizerName: 'Tech Events Inc',
    ticketTypes: [
      { id: 'general', name: 'General Admission', price: 199, available: 150, total: 500 }
    ],
    totalCapacity: 500,
    soldTickets: 350,
    featured: true
  },
  {
    id: 'evt2',
    title: 'Music Festival Summer',
    description: 'Three days of amazing music and entertainment',
    date: '2025-07-20',
    time: '16:00',
    location: 'Music Park',
    city: 'Austin, TX',
    venue: 'Zilker Park',
    image: '/images/music-festival.jpg',
    category: 'Music',
    price: 299,
    organizerId: 'org1',
    organizerName: 'Music Events LLC',
    ticketTypes: [
      { id: 'vip', name: 'VIP Pass', price: 299, available: 50, total: 100 }
    ],
    totalCapacity: 1000,
    soldTickets: 850,
    featured: false
  },
  {
    id: 'evt3',
    title: 'Business Workshop',
    description: 'Learn the latest business strategies and networking',
    date: '2025-09-10',
    time: '10:00',
    location: 'Business Center',
    city: 'New York, NY',
    venue: 'Manhattan Business Plaza',
    image: '/images/business-workshop.jpg',
    category: 'Business',
    price: 149,
    organizerId: 'org1',
    organizerName: 'Business Training Co',
    ticketTypes: [
      { id: 'early', name: 'Early Bird', price: 149, available: 20, total: 200 }
    ],
    totalCapacity: 200,
    soldTickets: 180,
    featured: true
  }
];

export default function OrganizerDashboard() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  
  // Calculate metrics
  const totalEvents = mockEvents.length;
  const totalRevenue = mockEvents.reduce((sum, event) => sum + (event.soldTickets * event.price), 0);
  const totalAttendees = mockEvents.reduce((sum, event) => sum + event.soldTickets, 0);
  const avgTicketPrice = totalRevenue / totalAttendees || 0;

  // Mock data for charts
  const revenueData = [
    { month: 'Jan', revenue: 12000, tickets: 150 },
    { month: 'Feb', revenue: 15000, tickets: 200 },
    { month: 'Mar', revenue: 18000, tickets: 180 },
    { month: 'Apr', revenue: 22000, tickets: 220 },
    { month: 'May', revenue: 25000, tickets: 300 },
    { month: 'Jun', revenue: 28000, tickets: 350 }
  ];

  const categoryData = [
    { name: 'Technology', value: 35, color: '#0000FF' },
    { name: 'Music', value: 25, color: '#3B82F6' },
    { name: 'Business', value: 20, color: '#8B5CF6' },
    { name: 'Entertainment', value: 12, color: '#10B981' },
    { name: 'Other', value: 8, color: '#F59E0B' }
  ];

  const upcomingEvents = mockEvents.filter(event => new Date(event.date) > new Date());
  const pastEvents = mockEvents.filter(event => new Date(event.date) <= new Date());

  const getEventStatus = (event: Event) => {
    const eventDate = new Date(event.date);
    const now = new Date();
    
    if (eventDate > now) {
      return { status: 'upcoming', color: 'bg-blue-100 text-blue-800 border-blue-200' };
    } else {
      return { status: 'completed', color: 'bg-green-100 text-green-800 border-green-200' };
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Organizer Dashboard</h1>
            <p className="text-gray-600">
              Manage your events and track performance
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => router.push('/organizer/events/create')}>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Events</p>
                  <p className="text-2xl font-semibold text-gray-900">{totalEvents}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">+12%</span>
                <span className="text-gray-600">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-semibold text-gray-900">${totalRevenue.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">+8%</span>
                <span className="text-gray-600">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Attendees</p>
                  <p className="text-2xl font-semibold text-gray-900">{totalAttendees.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">+15%</span>
                <span className="text-gray-600">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Ticket Price</p>
                  <p className="text-2xl font-semibold text-gray-900">${avgTicketPrice.toFixed(0)}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">+5%</span>
                <span className="text-gray-600">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Revenue Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                    <Line type="monotone" dataKey="revenue" stroke="#0000FF" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Events by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChartRecharts>
                    <Pie
                      dataKey="value"
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChartRecharts>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Management */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="upcoming">
              Upcoming Events ({upcomingEvents.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past Events ({pastEvents.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingEvents.length > 0 ? (
                  <>
                    {/* Mobile: Cards */}
                    <div className="lg:hidden space-y-4">
                      {upcomingEvents.map((event) => {
                        const status = getEventStatus(event);
                        return (
                          <Card key={event.id} className="border-l-4 border-l-blue-500">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="font-medium text-gray-900">{event.title}</h3>
                                <Badge className={status.color}>
                                  {status.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                                <div>
                                  <p className="text-gray-500">Date</p>
                                  <p className="text-gray-900">{formatDate(event.date)}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Location</p>
                                  <p className="text-gray-900">{event.city}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Sold/Total</p>
                                  <p className="text-gray-900">{event.soldTickets}/{event.totalCapacity}</p>
                                  <p className="text-xs text-gray-500">
                                    {Math.round((event.soldTickets / event.totalCapacity) * 100)}% sold
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Revenue</p>
                                  <p className="text-gray-900">${(event.soldTickets * event.price).toLocaleString()}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 pt-2 border-t">
                                <Button size="sm" variant="ghost" onClick={() => router.push(`/events/${event.id}`)}>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                                <Button size="sm" variant="ghost" onClick={() => router.push(`/organizer/events/${event.id}/edit`)}>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    {/* Desktop: Table */}
                    <div className="hidden lg:block overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Event</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Sold/Total</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {upcomingEvents.map((event) => {
                            const status = getEventStatus(event);
                            return (
                              <TableRow key={event.id}>
                                <TableCell>
                                  <div>
                                    <p className="font-medium text-gray-900">{event.title}</p>
                                    <p className="text-sm text-gray-600">{event.category}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{formatDate(event.date)}</TableCell>
                                <TableCell>{event.city}</TableCell>
                                <TableCell>
                                  <div>
                                    <p>{event.soldTickets}/{event.totalCapacity}</p>
                                    <p className="text-xs text-gray-600">
                                      {Math.round((event.soldTickets / event.totalCapacity) * 100)}% sold
                                    </p>
                                  </div>
                                </TableCell>
                                <TableCell>${(event.soldTickets * event.price).toLocaleString()}</TableCell>
                                <TableCell>
                                  <Badge className={status.color}>
                                    {status.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Button size="sm" variant="ghost" onClick={() => router.push(`/events/${event.id}`)}>
                                      <Eye className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="ghost" onClick={() => router.push(`/organizer/events/${event.id}/edit`)}>
                                      <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                      <Download className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
                    <p className="text-gray-600 mb-4">
                      Create your first event to get started.
                    </p>
                    <Button onClick={() => router.push('/organizer/events/create')}>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Event
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Past Events</CardTitle>
              </CardHeader>
              <CardContent>
                {pastEvents.length > 0 ? (
                  <>
                    {/* Mobile: Cards */}
                    <div className="lg:hidden space-y-4">
                      {pastEvents.map((event) => {
                        const status = getEventStatus(event);
                        return (
                          <Card key={event.id} className="border-l-4 border-l-green-500">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="font-medium text-gray-900">{event.title}</h3>
                                <Badge className={status.color}>
                                  {status.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                                <div>
                                  <p className="text-gray-500">Date</p>
                                  <p className="text-gray-900">{formatDate(event.date)}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Location</p>
                                  <p className="text-gray-900">{event.city}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Sold/Total</p>
                                  <p className="text-gray-900">{event.soldTickets}/{event.totalCapacity}</p>
                                  <p className="text-xs text-gray-500">
                                    {Math.round((event.soldTickets / event.totalCapacity) * 100)}% sold
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Revenue</p>
                                  <p className="text-gray-900">${(event.soldTickets * event.price).toLocaleString()}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 pt-2 border-t">
                                <Button size="sm" variant="ghost" onClick={() => router.push(`/events/${event.id}`)}>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <Download className="w-4 h-4 mr-2" />
                                  Analytics
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    {/* Desktop: Table */}
                    <div className="hidden lg:block overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Event</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Sold/Total</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {pastEvents.map((event) => {
                            const status = getEventStatus(event);
                            return (
                              <TableRow key={event.id}>
                                <TableCell>
                                  <div>
                                    <p className="font-medium text-gray-900">{event.title}</p>
                                    <p className="text-sm text-gray-600">{event.category}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{formatDate(event.date)}</TableCell>
                                <TableCell>{event.city}</TableCell>
                                <TableCell>
                                  <div>
                                    <p>{event.soldTickets}/{event.totalCapacity}</p>
                                    <p className="text-xs text-gray-600">
                                      {Math.round((event.soldTickets / event.totalCapacity) * 100)}% sold
                                    </p>
                                  </div>
                                </TableCell>
                                <TableCell>${(event.soldTickets * event.price).toLocaleString()}</TableCell>
                                <TableCell>
                                  <Badge className={status.color}>
                                    {status.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Button size="sm" variant="ghost" onClick={() => router.push(`/events/${event.id}`)}>
                                      <Eye className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                      <Download className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Past Events</h3>
                    <p className="text-gray-600">
                      Your completed events will appear here.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}