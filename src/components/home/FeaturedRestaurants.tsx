
import React from 'react';
import { restaurants } from '@/data/restaurants';
import { RestaurantGrid } from '@/components/restaurants/RestaurantGrid';

export const FeaturedRestaurants = () => {
  // Get a subset of restaurants to feature
  const featuredRestaurants = restaurants
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Restaurants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our hand-picked selection of top-rated restaurants. 
            From fine dining to casual eateries, find the perfect spot for your next meal.
          </p>
        </div>
        
        <RestaurantGrid restaurants={featuredRestaurants} />
        
        <div className="text-center mt-10">
          <a href="/restaurants" className="text-restaurant-primary hover:text-restaurant-primary/80 font-medium">
            View all restaurants →
          </a>
        </div>
      </div>
    </section>
  );
};
