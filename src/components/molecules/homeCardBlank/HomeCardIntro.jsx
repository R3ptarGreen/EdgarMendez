import PropTypes from 'prop-types';
const HomeCardIntro = ({ className }) => {
	return (
		<section className={`grid content-between ${className}`}>
			<div className='cursor-default grid gap-8'>
				<h1 className='text-6xl font-secondary text-primary'>Edgar Mendez</h1>
				<div>
					<h2 className='text-3xl font-secondary text-secondary'>Front-End Developer</h2>
					<p>Specializing in JavaScript environment</p>
				</div>
			</div>
			<div className='cursor-default'>
				<h3 className={'font-secondary text-lg text-primary'}>
					Merida, México
				</h3>
				<span>Vision & dicipline</span>
			</div>
		</section>
	);
};
HomeCardIntro.propTypes = {
	className: PropTypes.string,
};
export default HomeCardIntro;
