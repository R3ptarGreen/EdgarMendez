import { BiographyCards } from '../index';

const BiographyTemplate = () => {
	return (
		<div
			className='bg-cover bg-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
			style={{ backgroundImage: "url('assets/img/bioBg.png')" }}
		>
			<BiographyCards />
		</div>
	);
};

export default BiographyTemplate;
