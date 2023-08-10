import React from 'react';
import PieCircle from './components/PieCircle';
import Strawberry from './components/Strawberry';

const Home: React.FC = () => {
  return (
    <div className="flex items-center bg-pink-200 justify-center h-screen">
      <PieCircle />
      <Strawberry />
    </div>
  );
};

export default Home;
