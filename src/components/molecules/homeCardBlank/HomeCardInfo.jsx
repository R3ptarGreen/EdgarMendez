import { IconLink, Img } from '../../index';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import projectsData from '../../../data/ProjectsData.json';
const HomeCardInfo = ({ className, gitHubLink, linkedInLink }) => {
	const selectedObjects = projectsData ? projectsData.slice(0, 2) : [];

	const handlePress = item => {
		setTimeout(() => {
			window.open(item.linkWeb, '_blank');
		}, 500);
	};

	return (
		<div
			className={`grid content-between max-w-[50%] justify-self-end cursor-default gap-4 ${className}`}
		>
			<div className='grid gap-2'>
				<p className='text-lg font-secondary text-primary'>Rescent Projects</p>
				<div
					className='
                h-fit w-full grid grid-rows-2 gap-2'
				>
					{selectedObjects.map((item, index) => (
						<Card
							onPress={() => handlePress(item)}
							isBlurred
							className='[box-shadow:-2px_-2px_10px_0px_rgba(255,_255,_255,_0.12),_10px_10px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter
							backdrop-blur-[30px] cursor pointer rounded-lg hover:animate-shake hover:animate-once'
							key={index}
							isPressable
						>
							<CardBody className='overflow-visible p-0'>
								<Img
									alt={item.title}
									className='w-full object-cover  shadow-sm, rounded-lg'
									img={item.img}
								/>
							</CardBody>
							<CardFooter className='text-small justify-between '>
								<b>{item.title}</b>
									<IconLink icon={'github'} linkWeb={item.linkWebRepo} />
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
			<div className='grid grid-cols-2'>
				<div className='grid gap-4'>
					<p className='text-primary'>Social</p>
					<div className='grid grid-cols-2 max-w-fit gap-2'>
						<IconLink icon={'linkedIn'} linkWeb={linkedInLink} />
						<IconLink icon={'github'} linkWeb={gitHubLink} />
					</div>
				</div>
				<div className='grid gap-4'>
					<p className='text-primary'>Info</p>
					<a href=''>Resume</a>
				</div>
			</div>
		</div>
	);
};
HomeCardInfo.propTypes = {
	className: PropTypes.string,
	gitHubLink: PropTypes.string,
	linkedInLink: PropTypes.string,
};

export default HomeCardInfo;
