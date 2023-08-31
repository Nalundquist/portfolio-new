import PieCircle from './PieCircle';
import Strawberry from './Strawberry';

const Container: React.FC = () => {
	return (
		<div className="flex items-center bg-pink-200 justify-center h-screen">
      <PieCircle />
      <Strawberry />
    </div>
	)
}

export default Container;