
import React from 'react';
import { Restaurant } from '@/data/restaurants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, Users } from 'lucide-react';

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

export const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayHours = restaurant.openingHours[today];

  return (
    <div className="space-y-6">
      <div className="relative h-72 md:h-96 overflow-hidden rounded-lg">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 text-white">
            <Badge className="mb-3 bg-restaurant-accent font-medium">
              {restaurant.cuisine}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              {restaurant.name}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                <span>{restaurant.rating}</span>
                <span className="text-sm ml-1">({restaurant.reviewCount} reviews)</span>
              </div>
              <span className="text-white/80">•</span>
              <span>{restaurant.priceRange}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-display font-semibold mb-4">About</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {restaurant.description}
          </p>

          <h2 className="text-2xl font-display font-semibold mb-4">Location & Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-restaurant-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">{restaurant.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-restaurant-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Today's Hours</h3>
                    <p className="text-gray-700">
                      {todayHours ? `${todayHours.open} - ${todayHours.close}` : 'Closed'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-lg font-medium text-gray-900 mb-3">All Hours</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {Object.entries(restaurant.openingHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between">
                <span className={`${day === today ? 'font-medium text-restaurant-primary' : 'text-gray-700'}`}>
                  {day}
                </span>
                <span className="text-gray-600">
                  {hours.open} - {hours.close}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-semibold mb-4">Seating Options</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            {restaurant.tables.map(table => (
              <Card key={table.id} className="border-2 border-gray-200">
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-restaurant-primary" />
                  <p className="text-gray-900 font-medium">{table.seats} Seats</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          {/* Reservation form will be added here */}
        </div>
      </div>
    </div>
  );
};
