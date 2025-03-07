
export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  priceRange: string;
  address: string;
  image: string;
  rating: number;
  reviewCount: number;
  openingHours: {
    [key: string]: { open: string; close: string };
  };
  tables: {
    id: string;
    seats: number;
    isAvailable: boolean;
  }[];
}

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Bella Cucina",
    description: "An elegant Italian restaurant offering authentic pasta dishes, wood-fired pizzas, and a curated selection of Italian wines in a romantic atmosphere.",
    cuisine: "Italian",
    priceRange: "$$",
    address: "123 Main St, New York, NY 10001",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.7,
    reviewCount: 324,
    openingHours: {
      Monday: { open: "12:00", close: "22:00" },
      Tuesday: { open: "12:00", close: "22:00" },
      Wednesday: { open: "12:00", close: "22:00" },
      Thursday: { open: "12:00", close: "23:00" },
      Friday: { open: "12:00", close: "23:00" },
      Saturday: { open: "12:00", close: "23:00" },
      Sunday: { open: "12:00", close: "22:00" },
    },
    tables: [
      { id: "t1", seats: 2, isAvailable: true },
      { id: "t2", seats: 2, isAvailable: true },
      { id: "t3", seats: 4, isAvailable: true },
      { id: "t4", seats: 4, isAvailable: true },
      { id: "t5", seats: 6, isAvailable: true },
    ],
  },
  {
    id: "r2",
    name: "Sakura Sushi",
    description: "A contemporary Japanese restaurant specializing in fresh sushi, sashimi, and innovative Japanese-fusion dishes with a sleek, modern ambiance.",
    cuisine: "Japanese",
    priceRange: "$$$",
    address: "456 Park Ave, New York, NY 10022",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.9,
    reviewCount: 516,
    openingHours: {
      Monday: { open: "17:00", close: "23:00" },
      Tuesday: { open: "17:00", close: "23:00" },
      Wednesday: { open: "17:00", close: "23:00" },
      Thursday: { open: "17:00", close: "00:00" },
      Friday: { open: "17:00", close: "00:00" },
      Saturday: { open: "16:00", close: "00:00" },
      Sunday: { open: "16:00", close: "23:00" },
    },
    tables: [
      { id: "t1", seats: 2, isAvailable: true },
      { id: "t2", seats: 2, isAvailable: true },
      { id: "t3", seats: 4, isAvailable: true },
      { id: "t4", seats: 8, isAvailable: true },
    ],
  },
  {
    id: "r3",
    name: "Le Petit Bistro",
    description: "A charming French bistro serving classic French cuisine with a modern twist, complemented by an extensive selection of French wines.",
    cuisine: "French",
    priceRange: "$$$",
    address: "789 Broadway, New York, NY 10003",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.8,
    reviewCount: 429,
    openingHours: {
      Monday: { open: "18:00", close: "22:00" },
      Tuesday: { open: "18:00", close: "22:00" },
      Wednesday: { open: "18:00", close: "22:00" },
      Thursday: { open: "18:00", close: "23:00" },
      Friday: { open: "18:00", close: "23:00" },
      Saturday: { open: "17:00", close: "23:00" },
      Sunday: { open: "17:00", close: "22:00" },
    },
    tables: [
      { id: "t1", seats: 2, isAvailable: true },
      { id: "t2", seats: 2, isAvailable: true },
      { id: "t3", seats: 4, isAvailable: true },
      { id: "t4", seats: 4, isAvailable: true },
      { id: "t5", seats: 6, isAvailable: true },
      { id: "t6", seats: 8, isAvailable: true },
    ],
  },
  {
    id: "r4",
    name: "Spice Garden",
    description: "A vibrant Indian restaurant offering a diverse range of authentic regional dishes, from rich curries to tandoori specialties, in a colorful, inviting setting.",
    cuisine: "Indian",
    priceRange: "$$",
    address: "321 5th Ave, New York, NY 10016",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.6,
    reviewCount: 287,
    openingHours: {
      Monday: { open: "11:30", close: "22:30" },
      Tuesday: { open: "11:30", close: "22:30" },
      Wednesday: { open: "11:30", close: "22:30" },
      Thursday: { open: "11:30", close: "22:30" },
      Friday: { open: "11:30", close: "23:30" },
      Saturday: { open: "11:30", close: "23:30" },
      Sunday: { open: "12:00", close: "22:00" },
    },
    tables: [
      { id: "t1", seats: 2, isAvailable: true },
      { id: "t2", seats: 2, isAvailable: true },
      { id: "t3", seats: 4, isAvailable: true },
      { id: "t4", seats: 6, isAvailable: true },
    ],
  },
  {
    id: "r5",
    name: "El Mariachi",
    description: "A lively Mexican restaurant featuring authentic regional Mexican cuisine, premium tequilas, and handcrafted margaritas in a festive atmosphere.",
    cuisine: "Mexican",
    priceRange: "$$",
    address: "567 Hudson St, New York, NY 10014",
    image: "https://images.unsplash.com/photo-1653840712601-4f23d772fc2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2533&q=80",
    rating: 4.5,
    reviewCount: 356,
    openingHours: {
      Monday: { open: "16:00", close: "23:00" },
      Tuesday: { open: "16:00", close: "23:00" },
      Wednesday: { open: "16:00", close: "23:00" },
      Thursday: { open: "16:00", close: "00:00" },
      Friday: { open: "16:00", close: "02:00" },
      Saturday: { open: "12:00", close: "02:00" },
      Sunday: { open: "12:00", close: "23:00" },
    },
    tables: [
      { id: "t1", seats: 2, isAvailable: true },
      { id: "t2", seats: 2, isAvailable: true },
      { id: "t3", seats: 4, isAvailable: true },
      { id: "t4", seats: 4, isAvailable: true },
      { id: "t5", seats: 6, isAvailable: true },
    ],
  },
  {
    id: "r6",
    name: "The Grill House",
    description: "A sophisticated steakhouse offering prime cuts of beef, fresh seafood, and classic steakhouse sides with an impressive wine list in an upscale, refined environment.",
    cuisine: "Steakhouse",
    priceRange: "$$$$",
    address: "890 Madison Ave, New York, NY 10021",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.9,
    reviewCount: 648,
    openingHours: {
      Monday: { open: "17:00", close: "22:00" },
      Tuesday: { open: "17:00", close: "22:00" },
      Wednesday: { open: "17:00", close: "22:00" },
      Thursday: { open: "17:00", close: "23:00" },
      Friday: { open: "17:00", close: "23:00" },
      Saturday: { open: "17:00", close: "23:00" },
      Sunday: { open: "16:00", close: "21:00" },
    },
    tables: [
      { id: "t1", seats: 2, isAvailable: true },
      { id: "t2", seats: 2, isAvailable: true },
      { id: "t3", seats: 4, isAvailable: true },
      { id: "t4", seats: 4, isAvailable: true },
      { id: "t5", seats: 6, isAvailable: true },
      { id: "t6", seats: 8, isAvailable: true },
    ],
  },
];

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id);
};
