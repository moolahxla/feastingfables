
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative bg-restaurant-primary text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Restaurant dining experience" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-restaurant-primary to-restaurant-secondary opacity-60" />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Find Your Perfect 
            <span className="text-restaurant-accent"> Dining Experience</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Discover the best restaurants in your area and book your table instantly. 
            No more waiting on hold or hassle - just seamless reservations at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/restaurants">
              <Button size="lg" className="bg-restaurant-accent hover:bg-restaurant-accent/90 text-white">
                Browse Restaurants
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
