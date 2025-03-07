
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const mockReservations = [
  {
    id: '1',
    restaurantId: '101',
    restaurantName: 'Bella Italia',
    date: '2023-06-15',
    time: '19:00',
    partySize: 2,
    status: 'confirmed'
  },
  {
    id: '2',
    restaurantId: '102',
    restaurantName: 'Sushi Master',
    date: '2023-06-22',
    time: '20:30',
    partySize: 4,
    status: 'pending'
  }
];

const MyReservations = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-restaurant-primary mb-6">My Reservations</h1>
          
          {mockReservations.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-lg font-medium mb-2">No reservations yet</h3>
              <p className="text-muted-foreground mb-4">You haven't made any reservations.</p>
              <Button 
                onClick={() => navigate('/restaurants')} 
                className="bg-restaurant-primary hover:bg-restaurant-primary/90"
              >
                Browse Restaurants
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {mockReservations.map((reservation) => (
                <Card key={reservation.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{reservation.restaurantName}</CardTitle>
                        <CardDescription>Reservation #{reservation.id}</CardDescription>
                      </div>
                      {getStatusBadge(reservation.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-restaurant-primary" />
                        <span>{new Date(reservation.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-restaurant-primary" />
                        <span>{reservation.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-restaurant-primary" />
                        <span>{reservation.partySize} {reservation.partySize === 1 ? 'Guest' : 'Guests'}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => navigate(`/restaurant/${reservation.restaurantId}`)}>
                      Restaurant Details
                    </Button>
                    {reservation.status !== 'cancelled' && (
                      <Button variant="outline" className="text-red-500 hover:text-red-700">
                        Cancel
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyReservations;
