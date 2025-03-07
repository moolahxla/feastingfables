
import { get, post, put, del } from './fetchUtils';

// Base URL for API requests
const API_BASE_URL = 'https://api.example.com';

// Type definitions for API responses
interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  cuisine: string;
  priceRange: string;
  rating: number;
}

interface Reservation {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

// Restaurant APIs
export const getRestaurants = () => get<Restaurant[]>(`${API_BASE_URL}/restaurants`);
export const getRestaurantById = (id: string) => get<Restaurant>(`${API_BASE_URL}/restaurants/${id}`);

// Reservation APIs
export const createReservation = (reservationData: Omit<Reservation, 'id' | 'status'>) => 
  post<Reservation>(`${API_BASE_URL}/reservations`, reservationData);

export const getReservationsByUser = (userEmail: string) => 
  get<Reservation[]>(`${API_BASE_URL}/reservations`, { params: { email: userEmail } });

export const updateReservation = (id: string, data: Partial<Reservation>) => 
  put<Reservation>(`${API_BASE_URL}/reservations/${id}`, data);

export const cancelReservation = (id: string) => 
  put<Reservation>(`${API_BASE_URL}/reservations/${id}`, { status: 'cancelled' });
