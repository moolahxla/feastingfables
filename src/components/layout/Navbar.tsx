
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-display font-bold text-restaurant-primary">
                TableTaste
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-600 hover:text-restaurant-primary px-3 py-2">
              Home
            </Link>
            <Link to="/restaurants" className="text-gray-600 hover:text-restaurant-primary px-3 py-2">
              Restaurants
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-restaurant-primary px-3 py-2">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-restaurant-primary px-3 py-2">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-lg font-medium text-gray-600 hover:text-restaurant-primary">
                    Home
                  </Link>
                  <Link to="/restaurants" className="text-lg font-medium text-gray-600 hover:text-restaurant-primary">
                    Restaurants
                  </Link>
                  <Link to="/about" className="text-lg font-medium text-gray-600 hover:text-restaurant-primary">
                    About
                  </Link>
                  <Link to="/contact" className="text-lg font-medium text-gray-600 hover:text-restaurant-primary">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
