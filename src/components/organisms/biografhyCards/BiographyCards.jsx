import { BiographyCardContent, SideNav } from '../../index';
const BiographyCards = () => {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 col-span-2 md:col-span-3 lg:col-span-4 p-2 md:p-8 h-fit gap-4'>
				<BiographyCardContent />
			</div>
			<div className='h-screen bg-background'>
				<SideNav />
			</div>
		</>
	);
};

export default BiographyCards;
