import {
	HomeCardIntro,
	HomeCardContent,
	HomeCardInfo,
	HomeCardFooter,
} from '../../index';

const HomeCards = () => {

	const styleItem = `w-full h-unit-8xl [box-shadow:-2px_-2px_10px_0px_rgba(255,_255,_255,_0.12),_10px_10px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter
	backdrop-blur-[30px] cursosr pointer  h-full w-full animate-once animate-fade-down hover:bg-background`;

	return (
		<div className='grid grid-cols-1 grid-rows-6 gap-2 p-8 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2'>
			<HomeCardIntro className={`w-full`} />
			<HomeCardContent
				className={styleItem}
				to={'/biography'}
				img={'Edgar'}
				header={'Biography'}
				footer={'Front-End Developer'}
				span={'Looking For Job Opportunities'}
			/>
			<HomeCardInfo
				className={`w-full animate-fade-down animate-once`}
			/>
			<HomeCardContent
				className={styleItem}
				to={'/projects'}
				header={'Projects'}
				img={'projectsMockup'}
				footer={'Personal Projects'}
			/>
			<HomeCardFooter className={`w-full`} />
		</div>
	);
};
export default HomeCards;
