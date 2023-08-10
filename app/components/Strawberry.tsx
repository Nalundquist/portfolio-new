import React from "react";

const Strawberry: React.FC = () => {
  const seedPositions = [
    { top: 24, left: -42 },
    { top: 12, left: -10 },
    { top: 15, left: -50 },
		{ top: 20, left: -42 },
    { top: 12, left: -10 },
    { top: 65, left: -50 },
		{ top: 24, left: -42 },
    { top: 52, left: -60 },
    { top: 15, left: -50 },
		{ top: 24, left: -42 },
    { top: 42, left: -10 },
    { top: 45, left: -70 }
  ];

  return (
    <div className='absolute flex h-[18rem] w-[18rem] justify-center transform rotate-[30deg] scale-[1.45] ' style={{ top: 150, right: 280 }}>
      <div className='flex flex-column relative h-[10rem] w-full bg-red-600 flex justify-center flex-row clip-path-strawberry'>
        {seedPositions.map((position, index) => (
          <div
            key={index}
            className="bg-amber-500 w-[20px] h-[30px] relative clip-path-seed"
            style={{
              transform: `translate(${position.left}px, ${position.top}px) scale(.7)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Strawberry;