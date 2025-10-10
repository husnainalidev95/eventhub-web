'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Event } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { EventCard } from '@/components/EventCard';
import { Search, Filter, ChevronDown, MapPin, Calendar, DollarSign, X } from 'lucide-react';
import { categoriesWithAll, citiesWithAll } from '@/lib/mock-data';

interface EventsListPageProps {
  events: Event[];
}

export function EventsListPage({ events }: EventsListPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCity, setSelectedCity] = useState(searchParams.get('location') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedDate, setSelectedDate] = useState(searchParams.get('date') || '');

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('date');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  useEffect(() => {
    let filtered = events;

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // City filter
    if (selectedCity && selectedCity !== 'All Cities') {
      filtered = filtered.filter(event => event.city === selectedCity);
    }

    // Category filter
    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Date filter
    if (selectedDate) {
      filtered = filtered.filter(event => event.date === selectedDate);
    }

    // Price range filter
    filtered = filtered.filter(event =>
      event.price >= priceRange[0] && event.price <= priceRange[1]
    );

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
          return b.soldTickets - a.soldTickets;
        default:
          return 0;
      }
    });

    setFilteredEvents(filtered);
  }, [events, searchQuery, selectedCity, selectedCategory, selectedDate, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCity('');
    setSelectedCategory('');
    setSelectedDate('');
    setPriceRange([0, 1000]);
    setSortBy('date');
  };

  const activeFiltersCount = [
    searchQuery,
    selectedCity && selectedCity !== 'All Cities',
    selectedCategory && selectedCategory !== 'All Categories',
    selectedDate,
    priceRange[0] > 0 || priceRange[1] < 1000
  ].filter(Boolean).length;

  const updateURL = (filters: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== '' && value !== 'All Cities' && value !== 'All Categories') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    
    router.push(`${pathname}?${params.toString()}`);
  };

  // Enhanced filter handlers that update URL
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    updateURL({ location: city, category: selectedCategory, date: selectedDate });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURL({ location: selectedCity, category: category, date: selectedDate });
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    updateURL({ location: selectedCity, category: selectedCategory, date: date });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl mb-2">Discover Events</h1>
          <p className="text-muted-foreground">
            Find the perfect event for you from {events.length} available events
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search events, locations, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-base"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filters */}
          <div className="lg:hidden">
            <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full mb-4">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {activeFiltersCount}
                    </Badge>
                  )}
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 mb-6">
                <FilterSection
                  selectedCity={selectedCity}
                  setSelectedCity={handleCityChange}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={handleCategoryChange}
                  selectedDate={selectedDate}
                  setSelectedDate={handleDateChange}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  onClearFilters={clearFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:w-80 shrink-0">
            <FilterSection
              selectedCity={selectedCity}
              setSelectedCity={handleCityChange}
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCategoryChange}
              selectedDate={selectedDate}
              setSelectedDate={handleDateChange}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              onClearFilters={clearFilters}
              activeFiltersCount={activeFiltersCount}
            />
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort and Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-lg">
                  {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Events Grid */}
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg mb-2">No events found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or clearing some filters
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FilterSectionProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

function FilterSection({
  selectedCity,
  setSelectedCity,
  selectedCategory,
  setSelectedCategory,
  selectedDate,
  setSelectedDate,
  priceRange,
  setPriceRange,
  onClearFilters,
  activeFiltersCount
}: FilterSectionProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg">Filters</h3>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Location */}
        <div>
          <label className="block text-sm mb-3">
            <MapPin className="w-4 h-4 inline mr-2" />
            Location
          </label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              {citiesWithAll.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm mb-3">
            <Calendar className="w-4 h-4 inline mr-2" />
            Date
          </label>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm mb-3">Category</label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categoriesWithAll.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm mb-3">
            <DollarSign className="w-4 h-4 inline mr-2" />
            Price Range
          </label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="flex-1"
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                className="flex-1"
              />
            </div>
            <div className="text-xs text-muted-foreground">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}