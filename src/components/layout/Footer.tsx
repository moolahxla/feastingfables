
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-gray-900">
              TableTaste
            </h3>
            <p className="text-gray-600">
              Discover and book the perfect dining experience at your favorite restaurants.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-restaurant-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-600 hover:text-restaurant-primary">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-restaurant-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-restaurant-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-restaurant-primary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-restaurant-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-restaurant-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                123 Restaurant Ave
              </li>
              <li className="text-gray-600">
                New York, NY 10001
              </li>
              <li className="text-gray-600">
                info@tabletaste.com
              </li>
              <li className="text-gray-600">
                (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            &copy; {new Date().getFullYear()} TableTaste. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
