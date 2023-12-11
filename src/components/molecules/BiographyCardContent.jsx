import { BiographyEdgar, BiographyToolStack, BiographyCarrousel } from '../../components/index';

const BiographyCardContent = () => {
	const styleCrystal = `bg-background [box-shadow:-2px_-2px_10px_0px_rgba(255,_255,_255,_0.12),_10px_10px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter
	 backdrop-blur-[30px] cursosr pointer  h-full w-full`
	return (
		<>
			<BiographyEdgar className={styleCrystal}/>
			<BiographyToolStack className={styleCrystal}/>
			<BiographyCarrousel className={styleCrystal}/>
		</>
	);
};

export default BiographyCardContent;
