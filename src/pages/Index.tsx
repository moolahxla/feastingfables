
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { FeaturedRestaurants } from '@/components/home/FeaturedRestaurants';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedRestaurants />
      <HowItWorks />
      <Testimonials />
    </Layout>
  );
};

export default Index;
