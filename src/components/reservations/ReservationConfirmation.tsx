
import React from 'react';
import { Link } from 'react-router-dom';
import { getReservationById } from '@/data/reservations';
import { getRestaurantById } from '@/data/restaurants';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, MapPin, Phone, Mail, Check } from 'lucide-react';

interface ReservationConfirmationProps {
  reservationId: string;
}

export const ReservationConfirmation = ({ reservationId }: ReservationConfirmationProps) => {
  const reservation = getReservationById(reservationId);
  const restaurant = reservation ? getRestaurantById(reservation.restaurantId) : null;

  if (!reservation || !restaurant) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-display font-semibold mb-4">Reservation Not Found</h2>
        <p className="mb-6">We couldn't find the reservation you're looking for.</p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="h-8 w-8 text-green-600" />
        </div>
      </div>

      <h1 className="text-3xl font-display font-bold text-center mb-2">Reservation Confirmed!</h1>
      <p className="text-gray-600 text-center mb-8">
        Your reservation at {restaurant.name} has been confirmed. We've sent a confirmation to your email.
      </p>

      <Card className="mb-8">
        <CardHeader className="bg-restaurant-primary text-white pb-6">
          <CardTitle className="text-xl">Reservation Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-restaurant-primary mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Date</h3>
                <p className="text-gray-700">{reservation.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-restaurant-primary mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Time</h3>
                <p className="text-gray-700">{reservation.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-restaurant-primary mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Party Size</h3>
                <p className="text-gray-700">{reservation.partySize} {reservation.partySize === 1 ? 'person' : 'people'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-restaurant-primary mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-700">{restaurant.address}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h3 className="font-medium text-gray-900 mb-2">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <p className="text-gray-700">{reservation.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <p className="text-gray-700">{reservation.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <p className="text-gray-700">{reservation.phone}</p>
              </div>
            </div>
          </div>

          {reservation.specialRequests && (
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">Special Requests</h3>
              <p className="text-gray-700">{reservation.specialRequests}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <p className="text-sm text-gray-500">
            Reservation ID: {reservation.id}
          </p>
        </CardFooter>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={`/restaurant/${restaurant.id}`}>
          <Button variant="outline">View Restaurant Details</Button>
        </Link>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};
