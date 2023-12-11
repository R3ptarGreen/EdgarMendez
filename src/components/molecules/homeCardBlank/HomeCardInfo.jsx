import { Icon, Img } from '../../index';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import {useFetch} from '../../../hooks/index'
const HomeCardInfo = ({ className, gitHubLink, linkedInLink }) => {

	const {data} = useFetch('src/data/ProjectsData.json')
	const selectedObjects = data ? data.slice(0, 2) : []

	return (
		<div
			className={`grid content-between max-w-[50%] justify-self-end cursor-default  ${className}`}
		>
			<div className='grid gap-2'>
				<p className='text-lg font-secondary text-primary'>Rescent Projects</p>
				<div
					className='
                h-fit w-full grid grid-rows-2 gap-2'
				>
					{selectedObjects.map((item, index) => (
						<Card
							className='bg-background [box-shadow:-2px_-2px_10px_0px_rgba(255,_255,_255,_0.12),_10px_10px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter
							backdrop-blur-[30px] cursor pointer rounded-lg'
							shadow='sm'
							key={index}
							isPressable
							onPress={() => console.log('item pressed')}
						>
							<CardBody className='overflow-visible p-0'>
								<Img
									alt={item.title}
									className='w-full object-cover h-[140px], shadow-sm, rounded-lg'
									img={item.img}
								/>
							</CardBody>
							<CardFooter className='text-small justify-between '>
								<b>{item.title}</b>
								<div>
									<Icon icon={'github'} linkWeb={item.linkWebRepo} />
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
			<div className='grid grid-cols-2'>
				<div className='grid gap-4'>
					<p>Social</p>
					<div className='grid grid-cols-2 max-w-fit gap-2'>
						<Icon icon={'linkedIn'} linkWeb={linkedInLink} />
						<Icon icon={'github'} linkWeb={gitHubLink} />
					</div>
				</div>
				<div className='grid gap-4'>
					<p>Info</p>
					<a href=''>Resume</a>
				</div>
			</div>
		</div>
	);
};
HomeCardInfo.propTypes = {
	className: PropTypes.string,
	gitHubLink: PropTypes.string,
	linkedInLink: PropTypes.string
};

export default HomeCardInfo;
