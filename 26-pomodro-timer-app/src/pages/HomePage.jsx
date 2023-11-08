import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import PomodroTimer from '../components/PomodroTimer';

const HomePage = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-100'>
      <PomodroTimer />
    </section>
  );
};

export default HomePage;
