
import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import { Restaurant } from '@/data/restaurants';

interface RestaurantGridProps {
  restaurants: Restaurant[];
  title?: string;
}

export const RestaurantGrid = ({ restaurants, title }: RestaurantGridProps) => {
  return (
    <section className="py-10">
      {title && (
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};
