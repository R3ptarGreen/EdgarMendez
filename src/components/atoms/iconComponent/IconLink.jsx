import PropTypes from 'prop-types';

const IconLink = ({ icon, linkWeb, className }) => {
	const pathIcon = `assets/svg/${icon}.svg`;

	return (
		<a href={linkWeb} target='_blank' rel='noreferrer' className='hover:animate-jump hover:animate-infinite'>
			<img className={className} src={pathIcon} alt={icon} />
		</a>
	);
};
IconLink.propTypes = {
	icon: PropTypes.string,
	linkWeb: PropTypes.string,
	className: PropTypes.string,
};
export default IconLink;
