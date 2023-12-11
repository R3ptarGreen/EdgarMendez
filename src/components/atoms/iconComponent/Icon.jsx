import PropTypes from 'prop-types';

const Icon = ({ icon, linkWeb, className }) => {
	const pathIcon = `/public/assets/svg/${icon}.svg`;

	return (
		<a href={linkWeb} target='_blank' rel="noreferrer">
			<img className={className} src={pathIcon} alt={icon} />
		</a>
	);
};
Icon.propTypes = {
	icon: PropTypes.string,
    linkWeb: PropTypes.string,
	className: PropTypes.string
};
export default Icon;
