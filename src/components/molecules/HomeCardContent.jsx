import { Card } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { Img } from '../index';
import { useNavigate } from 'react-router-dom';

const HomeCardBiography = ({ className, header, footer, span, img, to }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		setTimeout(() => {
			navigate(to);
		}, 500);
	};

	return (
		<>
			<Card
				shadow='sm'
				className={`${className}`}
				isPressable
				onPress={handleClick}
			>
				<div className='h-full w-full grid content-between p-4'>
					<header className='grid justify-end text-2xl font-secondary text-primary'>
						{header}
					</header>
					<main className='grid justify-center w-full h-full'>
						<Img className={'max-w-80 max-h-80 rounded-2xl'} img={img} />
					</main>
					<footer className='text-start'>
						<p className='text-lg font-secondary text-secondary'>{footer}</p>
						<span className='text-sm'>{span}</span>
					</footer>
				</div>
			</Card>
		</>
	);
};
HomeCardBiography.propTypes = {
	className: PropTypes.string,
	header: PropTypes.string,
	footer: PropTypes.string,
	span: PropTypes.string,
	img: PropTypes.string,
	to: PropTypes.string,
};

export default HomeCardBiography;
