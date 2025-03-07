
import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ReservationConfirmation } from '@/components/reservations/ReservationConfirmation';

const ReservationConfirmationPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Layout>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
          <h1 className="text-2xl font-display font-semibold mb-4 text-center">
            Reservation Not Found
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
        <ReservationConfirmation reservationId={id} />
      </div>
    </Layout>
  );
};

export default ReservationConfirmationPage;
