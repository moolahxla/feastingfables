
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AuthForm } from '@/components/auth/AuthForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <div className="container max-w-md py-10 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-restaurant-primary mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your reservations</p>
        </div>
        
        <AuthForm mode="login" />
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-restaurant-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
