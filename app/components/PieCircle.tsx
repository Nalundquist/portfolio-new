import React from 'react';


const PieCircle: React.FC = () => {
  return (
    <div className=" transition transform ease-in-out delay-100 duration-1000 active:scale-[9.1] active:rotate-[180deg] w-[32rem] h-[32rem] flex absolute justify-center rounded-full overflow-hidden border-green-200 border-[12px]"
			 	 style={{top: -200, left: -200}}>
				<div className="absolute flex items-center justify-center w-full h-full transform rotate-[0deg]">
					<div className="w-full h-full bg-orange-300 clip-path-triangle"></div>
				</div>
				<div className="absolute flex items-center justify-center w-full h-full transform rotate-[60deg]">
					<div className="w-full h-full bg-orange-300 clip-path-triangle"></div>
				</div>
				<div className="absolute flex items-center justify-center w-full h-full transform rotate-[120deg]">
					<div className="w-full h-full bg-orange-300 clip-path-triangle"></div>
				</div>
				<div className="absolute flex items-center justify-center w-full h-full transform rotate-[180deg]">
					<div className="w-full h-full bg-orange-300 clip-path-triangle"></div>
				</div>
				<div className="absolute flex items-center justify-center w-full h-full transform rotate-[240deg]">
					<div className="w-full h-full bg-orange-300 clip-path-triangle"></div>
				</div>
				<div className="absolute flex items-center justify-center w-full h-full transform rotate-[300deg]">
					<div className="w-full h-full bg-orange-300 clip-path-triangle"></div>
				</div>

				<div className='relative flex w-full h-full justify-center'>
					<div className="absolute w-4 h-full bg-green-200 transform rotate-[30deg] origin-center"></div>
					<div className="absolute w-4 h-full bg-green-200 transform rotate-[90deg] origin-center"></div>
					<div className="absolute w-4 h-full bg-green-200 transform rotate-[150deg] origin-center"></div>
					<div className="absolute w-4 h-full bg-green-200 transform rotate-[210deg] origin-center"></div>
					<div className="absolute w-4 h-full bg-green-200 transform rotate-[270deg] origin-center"></div>
					<div className="absolute w-4 h-full bg-green-200 transform rotate-[330deg] origin-center"></div>
				</div>
    </div>
  );
};

export default PieCircle;