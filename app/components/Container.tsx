"use client"; 

import PieCircle from './PieCircle';
import Strawberry from './Strawberry'
import CapyBoard from '../pages/CapyBoard';
import { useState, useEffect } from 'react'

const Container: React.FC = () => {

	interface Props {
		strawOnClick: Function;
	}

	const [visiblePage, setVisiblePage] = useState(1); 

	let display: JSX.Element = 
	<div>
		<PieCircle />
		<Strawberry setVisiblePage = {setVisiblePage} />
	</div>;

	useEffect(() => {
		if (visiblePage === 2){
			display = <CapyBoard />
			console.log("in visible")
			console.log("display is " + display.type)
		} else if (visiblePage === 1){
			display = 
				<div>
					<PieCircle />
					<Strawberry setVisiblePage = {setVisiblePage} />
				</div>;
			console.log(display)
		}
		console.log(visiblePage);
	}, [visiblePage])


	


	
	return (
		<div className="flex items-center bg-pink-200 justify-center h-screen">
      {display}
    </div>
	)
}

export default Container;