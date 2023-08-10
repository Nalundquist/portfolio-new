import React from "react";

const Strawberry: React.FC = () => {
	return(
		<div className='absolute flex h-[18rem] w-[18rem] justify-center transform rotate-[45deg] ' style={{top: 150, right: 280}}>
			<div className='relative h-[10rem] w-full bg-red-400 rounded-full flex justify-center flex-row'></div>
				<div className="relative h-full w-full transform translate-y-[50%] bg-red-400 rotate-[30deg] skew-y-[30deg] overflow-hidden rounded-[20%] content-['']
					after:absolute after:bg-red-400 after:rounded-br-[50%] after:translate-y-[-30deg] after:skew-y-[-30deg] after:rotate-[-30deg] after:skew-x-[-30deg] after:translate-x-[24%]
					before:absolute before:bg-red-400 before:rounded-bl-[50%] before:translate-y-[-30deg] before:skew-y-[-30deg] before:rotate-[-30deg] before:skew-x-[30deg] before:translate-x-[-24%]"></div>
		</div>
	)
}

export default Strawberry;