
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { AuthForm } from '@/components/auth/AuthForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Layout>
      <div className="container max-w-md py-10 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-restaurant-primary mb-2">Create an Account</h1>
          <p className="text-gray-600">Join TableTaste to make reservations</p>
        </div>
        
        <AuthForm mode="signup" />
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-restaurant-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
