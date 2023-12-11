import { Card } from '@nextui-org/react';
import { Icon, Img } from '../../index';
import { useFetch } from '../../../hooks/index';

const ProjectsCard = () => {
	const { data } = useFetch('src/data/ProjectsData.json');
	const dataCheck = data ? data || [] : [];

	return (
		<>
			{dataCheck.map(item => (
				<Card
                    key={item.id}
					isPressable
					className='bg-background [box-shadow:-2px_-2px_10px_0px_rgba(255,_255,_255,_0.12),_10px_10px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter
            backdrop-blur-[30px] cursosr pointer p-4 rounded-lg grid gap-4'
				>
					<Img className={'max-h-96 w-full rounded-lg'} img={item.img} />
					<footer className='cursor-default'>
						<h2 className='text-primary font-secondary text-xl text-start'>
							{item.title}
						</h2>
						<p className='text-start'>{item.description}</p>
						<div className='grid justify-end'>
							<Icon icon={'github'} className={'w-fit'} linkWeb={item.linkWebRepo} />
						</div>
					</footer>
				</Card>
			))}
		</>
	);
};

export default ProjectsCard;
