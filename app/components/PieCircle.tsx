import React from 'react';

const PieCircle: React.FC = () => {
  return (
    <div className="w-[64rem] h-[64rem] relative rounded-full overflow-hidden">
        <div className="absolute w-full h-full bg-yellow-500 transform rotate-0 origin-center clip-path-triangle"></div>
        <div className="absolute w-full h-full bg-red-500 transform rotate-[60deg] origin-center clip-path-triangle" ></div>
        <div className="absolute w-full h-full bg-blue-500 transform rotate-[120deg] origin-center clip-path-triangle" ></div>
				<div className="absolute w-full h-full bg-green-500 transform rotate-[180deg] origin-center clip-path-triangle" ></div>
				<div className="absolute w-full h-full bg-purple-500 transform rotate-[240deg] origin-center clip-path-triangle" ></div>
				<div className="absolute w-full h-full bg-teal-500 transform rotate-[300deg] origin-center clip-path-triangle" ></div>
    </div>
  );
};

export default PieCircle;