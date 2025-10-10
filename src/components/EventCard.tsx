'use client'
import { useRouter } from 'next/navigation';
import { Event } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const router = useRouter();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer" onClick={() => router.push(`/events/${event.id}`)}>
      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {event.featured && (
          <Badge className="absolute top-3 left-3 bg-primary" variant="default">
            Featured
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-white text-foreground" variant="secondary">
          {event.category}
        </Badge>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="line-clamp-2 mb-2">{event.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{event.description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(event.date)} at {formatTime(event.time)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{event.city}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-sm text-muted-foreground">From</span>
            <div className="font-semibold">${event.price}</div>
          </div>
          <Button 
            size="sm" 
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/events/${event.id}`);
            }}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}