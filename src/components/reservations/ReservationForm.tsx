
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Restaurant } from '@/data/restaurants';
import { saveReservation } from '@/data/reservations';
import { CalendarIcon, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "sonner";

interface ReservationFormProps {
  restaurant: Restaurant;
}

export const ReservationForm = ({ restaurant }: ReservationFormProps) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>('');
  const [partySize, setPartySize] = useState<string>('2');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Generate available time slots based on restaurant opening hours
  const getAvailableTimeSlots = () => {
    if (!date) return [];

    const dayOfWeek = format(date, 'EEEE'); // Get the day of the week
    const dayHours = restaurant.openingHours[dayOfWeek];
    
    if (!dayHours) return [];

    const { open, close } = dayHours;
    const openHour = parseInt(open.split(':')[0], 10);
    const closeHour = parseInt(close.split(':')[0], 10);
    
    const slots = [];
    for (let hour = openHour; hour < closeHour; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    
    return slots;
  };

  const timeSlots = getAvailableTimeSlots();

  const partySizes = ['1', '2', '3', '4', '5', '6', '7', '8', '10', '12'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !email || !phone) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    const reservation = {
      restaurantId: restaurant.id,
      name,
      email,
      phone,
      date: format(date, 'yyyy-MM-dd'),
      time,
      partySize: parseInt(partySize, 10),
      specialRequests: specialRequests || undefined
    };
    
    const savedReservation = saveReservation(reservation);
    
    toast.success("Your reservation has been confirmed!");
    navigate(`/reservation-confirmation/${savedReservation.id}`);
  };

  return (
    <Card>
      <CardHeader className="bg-restaurant-primary text-white">
        <CardTitle className="text-xl">Make a Reservation</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  id="date"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger id="time" className="w-full">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select a time" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.length > 0 ? (
                  timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="closed" disabled>
                    Restaurant closed on this day
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="partySize">Party Size</Label>
            <Select value={partySize} onValueChange={setPartySize}>
              <SelectTrigger id="partySize" className="w-full">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select party size" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {partySizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size} {parseInt(size, 10) === 1 ? 'person' : 'people'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Any special requests or dietary requirements?"
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full bg-restaurant-accent hover:bg-restaurant-accent/90">
            Complete Reservation
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By clicking "Complete Reservation", you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
