import { Card } from '@nextui-org/react';
import { Icon, Img } from '../../index';
import projectsData from '../../../data/ProjectsData.json';

const ProjectsCard = () => {
	const dataCheck = projectsData ? projectsData || [] : [];

	const handlePress = (item) => {
		setTimeout(() => {
			window.open(item.linkWeb, '_blank')
		}, 500)
	}
	return (
		<>
			{dataCheck.map(item => (
				<Card
					onPress={() => handlePress(item)}
					key={item.id}
					isPressable
					className='bg-background [box-shadow:-2px_-2px_10px_0px_rgba(255,_255,_255,_0.12),_10px_10px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter
            backdrop-blur-[30px] cursosr pointer p-4 rounded-lg grid gap-4'
				>
					<a href={window.open} target='_blank' rel="noreferrer">
						<Img className={'max-h-96 w-full rounded-lg'} img={item.img} />
						<footer className='cursor-default'>
							<h2 className='text-primary font-secondary text-xl text-start'>
								{item.title}
							</h2>
							<p className='text-start'>{item.description}</p>
							<div className='grid justify-end'>
								<Icon
									icon={'github'}
									className={'w-fit'}
									linkWeb={item.linkWebRepo}
								/>
							</div>
						</footer>
					</a>
				</Card>
			))}
		</>
	);
};

export default ProjectsCard;
