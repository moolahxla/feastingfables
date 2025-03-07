
export interface Reservation {
  id: string;
  restaurantId: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  tableId?: string;
}

// We'll use localStorage to store reservations
// This is a simple client-side implementation
export const saveReservation = (reservation: Omit<Reservation, 'id' | 'status'>) => {
  const reservations = getReservations();
  const newReservation: Reservation = {
    ...reservation,
    id: Math.random().toString(36).substring(2, 11),
    status: 'confirmed'
  };
  
  reservations.push(newReservation);
  localStorage.setItem('reservations', JSON.stringify(reservations));
  return newReservation;
};

export const getReservations = (): Reservation[] => {
  const savedReservations = localStorage.getItem('reservations');
  return savedReservations ? JSON.parse(savedReservations) : [];
};

export const getReservationsByRestaurantId = (restaurantId: string): Reservation[] => {
  return getReservations().filter(r => r.restaurantId === restaurantId);
};

export const getReservationById = (id: string): Reservation | undefined => {
  return getReservations().find(r => r.id === id);
};
