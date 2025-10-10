import { Event, Booking, User, TicketType } from './types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2024',
    description: 'Join leading tech innovators and entrepreneurs for a day of cutting-edge presentations, networking, and product launches. Discover the latest trends in AI, blockchain, and sustainable technology.',
    date: '2024-03-15',
    time: '09:00',
    location: 'San Francisco Convention Center',
    city: 'San Francisco',
    venue: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Technology',
    price: 299,
    organizerId: 'org-1',
    organizerName: 'TechEvents Inc.',
    ticketTypes: [
      { id: 'early-bird', name: 'Early Bird', price: 199, available: 50, total: 100 },
      { id: 'regular', name: 'Regular', price: 299, available: 200, total: 300 },
      { id: 'vip', name: 'VIP', price: 499, available: 45, total: 50 }
    ],
    totalCapacity: 450,
    soldTickets: 105,
    featured: true
  },
  {
    id: '2',
    title: 'Jazz Under the Stars',
    description: 'An enchanting evening of smooth jazz performed by world-class musicians in a magical outdoor setting. Bring your friends and enjoy an unforgettable musical experience.',
    date: '2024-03-22',
    time: '19:30',
    location: 'Central Park Amphitheater',
    city: 'New York',
    venue: 'Outdoor Stage',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Music',
    price: 75,
    organizerId: 'org-2',
    organizerName: 'NYC Jazz Collective',
    ticketTypes: [
      { id: 'general', name: 'General Admission', price: 75, available: 300, total: 500 },
      { id: 'premium', name: 'Premium Seating', price: 125, available: 80, total: 100 }
    ],
    totalCapacity: 600,
    soldTickets: 220,
    featured: true
  },
  {
    id: '3',
    title: 'Culinary Arts Workshop',
    description: 'Learn from Michelin-starred chefs in this hands-on cooking workshop. Master the art of French cuisine and take home recipes that will impress your family and friends.',
    date: '2024-03-28',
    time: '14:00',
    location: 'The Culinary Institute',
    city: 'Los Angeles',
    venue: 'Chef\'s Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Food & Drink',
    price: 150,
    organizerId: 'org-3',
    organizerName: 'Culinary Masters',
    ticketTypes: [
      { id: 'standard', name: 'Standard Workshop', price: 150, available: 20, total: 25 }
    ],
    totalCapacity: 25,
    soldTickets: 5,
    featured: false
  },
  {
    id: '4',
    title: 'Digital Marketing Conference',
    description: 'Stay ahead of the curve with the latest digital marketing strategies. Network with industry leaders and discover tools that will transform your marketing efforts.',
    date: '2024-04-05',
    time: '10:00',
    location: 'Austin Convention Center',
    city: 'Austin',
    venue: 'Conference Hall A',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Business',
    price: 199,
    organizerId: 'org-1',
    organizerName: 'TechEvents Inc.',
    ticketTypes: [
      { id: 'student', name: 'Student', price: 99, available: 50, total: 75 },
      { id: 'professional', name: 'Professional', price: 199, available: 150, total: 200 },
      { id: 'enterprise', name: 'Enterprise', price: 399, available: 40, total: 50 }
    ],
    totalCapacity: 325,
    soldTickets: 135,
    featured: true
  },
  {
    id: '5',
    title: 'Indie Film Festival',
    description: 'Celebrate independent cinema with a curated selection of groundbreaking films from emerging directors worldwide. Join Q&A sessions with filmmakers after each screening.',
    date: '2024-04-12',
    time: '18:00',
    location: 'Downtown Theater',
    city: 'Portland',
    venue: 'Main Screen',
    image: 'https://images.unsplash.com/photo-1489599328020-619b75e17d74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Entertainment',
    price: 25,
    organizerId: 'org-4',
    organizerName: 'Portland Film Society',
    ticketTypes: [
      { id: 'single', name: 'Single Screening', price: 25, available: 80, total: 120 },
      { id: 'day-pass', name: 'Day Pass', price: 60, available: 30, total: 40 }
    ],
    totalCapacity: 160,
    soldTickets: 50,
    featured: false
  },
  {
    id: '6',
    title: 'Yoga & Wellness Retreat',
    description: 'Reconnect with yourself in this transformative weekend retreat. Includes yoga sessions, meditation workshops, healthy meals, and wellness talks from certified instructors.',
    date: '2024-04-20',
    time: '08:00',
    location: 'Mountain View Resort',
    city: 'Boulder',
    venue: 'Wellness Center',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Health & Wellness',
    price: 350,
    organizerId: 'org-5',
    organizerName: 'Mindful Living Co.',
    ticketTypes: [
      { id: 'shared', name: 'Shared Accommodation', price: 350, available: 15, total: 20 },
      { id: 'private', name: 'Private Room', price: 500, available: 8, total: 10 }
    ],
    totalCapacity: 30,
    soldTickets: 7,
    featured: true
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'booking-1',
    eventId: '1',
    eventTitle: 'Tech Innovation Summit 2024',
    eventDate: '2024-03-15',
    eventLocation: 'San Francisco Convention Center',
    tickets: [
      { ticketTypeId: 'regular', ticketTypeName: 'Regular', quantity: 2, price: 299 }
    ],
    totalAmount: 598,
    status: 'confirmed',
    bookingDate: '2024-02-10',
    qrCode: 'QR123456789'
  },
  {
    id: 'booking-2',
    eventId: '2',
    eventTitle: 'Jazz Under the Stars',
    eventDate: '2024-03-22',
    eventLocation: 'Central Park Amphitheater',
    tickets: [
      { ticketTypeId: 'premium', ticketTypeName: 'Premium Seating', quantity: 1, price: 125 }
    ],
    totalAmount: 125,
    status: 'confirmed',
    bookingDate: '2024-02-15',
    qrCode: 'QR987654321'
  }
];

export const mockUser: User = {
  id: 'user-1',
  name: 'John Smith',
  email: 'john.smith@example.com',
  role: 'user',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
};

export const categories = [
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

export const cities = [
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

export const categoriesWithAll = ['All Categories', ...categories];
export const citiesWithAll = ['All Cities', ...cities];