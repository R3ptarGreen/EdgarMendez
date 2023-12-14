import { HomeCards } from '../index';
const HomeTemplate = () => {
	return (
		<div
			className='bg-cover bg-center h-full'
			style={{ backgroundImage: "url('assets/img/homeBg.png')" }}
		>
			<HomeCards />
		</div>
	);
};

export default HomeTemplate;
