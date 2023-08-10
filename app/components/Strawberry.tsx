import React from "react";

const Strawberry: React.FC = () => {
  const seedPositions = [
    { top: 4, left: 89 },
    { top: 8, left: 23 },
    { top: 15, left: -30 },
		{ top: 30, left: -12 },
    { top: 12, left: 40 },
    { top: 65, left: -50 },
		{ top: 24, left: -42 },
    { top: 52, left: -60 },
    { top: 75, left: -140 },
		{ top: 87, left: -142 },
    { top: 42, left: -180 },
    { top: 65, left: -120 },
		{ top: 104, left: -182 },
    { top: 42, left: -140 },
    { top: 95, left: -190 }
  ];

  return (
    <div className='absolute flex h-[18rem] w-[18rem] justify-center transform rotate-[30deg] scale-[1.45] ' style={{ top: 200, right: 280 }}>
      <div className='flex flex-column relative h-[10rem] w-full bg-red-600 flex justify-center flex-row clip-path-strawberry'>
        {seedPositions.map((position, index) => (
          <div
            key={index}
            className="bg-lime-200 w-[20px] h-[30px] relative clip-path-seed"
            style={{
              transform: `translate(${position.left}px, ${position.top}px) scale(.6)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Strawberry;