
import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RestaurantDetails } from '@/components/restaurants/RestaurantDetails';
import { ReservationForm } from '@/components/reservations/ReservationForm';
import { getRestaurantById } from '@/data/restaurants';
import { NotFound } from './NotFound';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = id ? getRestaurantById(id) : null;

  if (!restaurant) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
        <RestaurantDetails restaurant={restaurant} />
        
        {/* Add reservation form for md screens and below */}
        <div className="md:hidden mt-8">
          <h2 className="text-2xl font-display font-semibold mb-4">Make a Reservation</h2>
          <ReservationForm restaurant={restaurant} />
        </div>
      </div>
    </Layout>
  );
};

export default RestaurantDetail;
