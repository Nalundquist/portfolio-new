import React from "react";

const Strawberry: React.FC = () => {
	return(
		<div className='absolute flex h-[32rem] w-[18rem] justify-center transform rotate-[45deg] ' style={{top: 150, right: 280}}>
			<div className='relative h-[10rem] w-full bg-red-400 rounded-full flex justify-center flex-row'></div>
				<div className="relative h-full w-full bg-red-400 transform clip-path-strawtip"></div>
		</div>
	)
}

export default Strawberry;