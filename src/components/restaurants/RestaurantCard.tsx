
import React from 'react';
import { Link } from 'react-router-dom';
import { Restaurant } from '@/data/restaurants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-3 right-3 bg-restaurant-accent font-medium">
            {restaurant.cuisine}
          </Badge>
        </div>
        <CardContent className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-1">
              {restaurant.name}
            </h3>
            <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm">
              <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
              <span>{restaurant.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-2">{restaurant.priceRange} • {restaurant.address}</p>
          <p className="text-gray-700 line-clamp-2 text-sm mb-3">
            {restaurant.description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-restaurant-primary font-medium text-sm">
              View availability
            </p>
            <Badge variant="outline" className="text-xs">
              {restaurant.reviewCount} reviews
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
