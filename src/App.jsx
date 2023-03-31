import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
