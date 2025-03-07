
import React from 'react';
import { CheckCircle, Calendar, Search, Clock } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-restaurant-primary" />,
      title: "Find a Restaurant",
      description: "Browse our curated selection of restaurants by cuisine, location, or availability."
    },
    {
      icon: <Calendar className="h-10 w-10 text-restaurant-secondary" />,
      title: "Make a Reservation",
      description: "Choose your preferred date, time, and party size for your dining experience."
    },
    {
      icon: <Clock className="h-10 w-10 text-restaurant-accent" />,
      title: "Instant Confirmation",
      description: "Receive an immediate confirmation for your booking via email."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      title: "Enjoy Your Meal",
      description: "Arrive at the restaurant and enjoy a hassle-free dining experience."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            TableTaste makes booking restaurant reservations quick and easy. 
            Follow these simple steps to secure your table.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="inline-flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
