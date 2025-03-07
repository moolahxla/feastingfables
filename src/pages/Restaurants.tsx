
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { RestaurantGrid } from '@/components/restaurants/RestaurantGrid';
import { restaurants } from '@/data/restaurants';

const Restaurants = () => {
  return (
    <Layout>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
          All Restaurants
        </h1>
        <p className="text-gray-600 max-w-3xl mb-10">
          Browse our collection of carefully selected restaurants and find your next dining destination.
          From cozy cafes to fine dining establishments, we have options for every occasion.
        </p>
        
        <RestaurantGrid restaurants={restaurants} />
      </div>
    </Layout>
  );
};

export default Restaurants;
