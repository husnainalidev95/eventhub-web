export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  city: string;
  venue: string;
  image: string;
  category: string;
  price: number;
  organizerId: string;
  organizerName: string;
  ticketTypes: TicketType[];
  totalCapacity: number;
  soldTickets: number;
  featured: boolean;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  available: number;
  total: number;
}

export interface Booking {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  tickets: BookingTicket[];
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  bookingDate: string;
  qrCode: string;
}

export interface BookingTicket {
  ticketTypeId: string;
  ticketTypeName: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'organizer' | 'admin';
  avatar?: string;
}

export type ViewType = 'home' | 'events' | 'event-details' | 'checkout' | 'bookings' | 'organizer-dashboard' | 'create-event' | 'admin' | 'login';