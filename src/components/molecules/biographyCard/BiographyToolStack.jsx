import { Card } from '@nextui-org/react';
import { IconLink } from '../../index';
import PropTypes from 'prop-types';
import toolData from '../../../data/ToolStackData.json'
const BiographyToolStack = ({ className }) => {
	
	const IconDataCheck = toolData ? toolData : [];
	return (
		<>
			<Card
				isPressable
				isBlurred
				className={`cursor-default grid w-full xl:max-h-80 h-fit rounded-lg p-2 justify-center col-span-2 md:col-span-1 ${className}`}
			>
				<header>
					<h2 className='font-secondary text-xl text-primary text-left'>
						Tool Stack
					</h2>
				</header>
				<main className='flex flex-wrap gap-4 w-fit'>
					{IconDataCheck.map(item => (
						<IconLink
							className={
								'cursor-pointer hover:animate-wiggle-more hover:animate-infinite hover:animate-duration-200'
							}
							key={item.id}
							icon={item.icon}
							linkWeb={item.linkWeb}
						/>
					))}
				</main>
			</Card>
		</>
	);
};
BiographyToolStack.propTypes = {
	className: PropTypes.string,
};
export default BiographyToolStack;
