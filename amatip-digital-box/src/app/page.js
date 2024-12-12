"use client"

import Hero from './components/Hero';
import LearningPaths from './components/LearningPaths';
import Nav from "./components/Nav";
import UpcomingWebinars from './components/UpcomingWebinars';
import Footer from './components/Footer'

import './globals.css'; // Ensure this imports your global styles
import KeyFeatures from './components/keyFeatures';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlan';



export default function Home() {
  return (
    <div>
       <Nav />
      <Hero />
      <UpcomingWebinars />
      <KeyFeatures />
      <LearningPaths />
      <Testimonials />
      <PricingPlans />
      <Footer />
    </div>
  );
}
