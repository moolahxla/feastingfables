
import React from 'react';
import { Layout } from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 text-center">
            About TableTaste
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p>
              TableTaste was founded with a simple mission: to make dining out easy and enjoyable. 
              We believe that finding and booking the perfect restaurant should be a seamless experience, 
              not a complicated task.
            </p>
            
            <p>
              Our platform connects diners with a curated selection of restaurants, offering real-time 
              availability and instant booking confirmation. Whether you're planning a romantic dinner, 
              a business lunch, or a family celebration, TableTaste helps you find the perfect venue 
              for any occasion.
            </p>
            
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Quality:</strong> We carefully select each restaurant on our platform to ensure 
                exceptional dining experiences.
              </li>
              <li>
                <strong>Simplicity:</strong> We've designed our booking process to be straightforward and 
                user-friendly.
              </li>
              <li>
                <strong>Reliability:</strong> We ensure that all reservations are confirmed instantly and 
                accurately.
              </li>
              <li>
                <strong>Community:</strong> We support local restaurants and help them connect with new 
                customers.
              </li>
            </ul>
            
            <p>
              Since our launch, we've helped thousands of diners discover new restaurants and enjoy 
              hassle-free reservations. Our commitment to excellence has made us a trusted platform 
              for both diners and restaurant partners.
            </p>
            
            <p>
              We're constantly working to improve our service and expand our restaurant network. 
              Join us on this culinary journey and experience dining out in a whole new way.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
