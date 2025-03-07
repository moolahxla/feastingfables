
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export const NotFound = () => {
  return (
    <Layout>
      <div className="container px-4 py-16 mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-display font-bold text-restaurant-primary mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-gray-600 text-center max-w-md mb-8">
          We couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button className="bg-restaurant-primary hover:bg-restaurant-primary/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
