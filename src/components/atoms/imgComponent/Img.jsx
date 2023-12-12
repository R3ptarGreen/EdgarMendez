import PropTypes from 'prop-types';
const Img = ({ img, className, onClick }) => {
	const pathImg = `assets/img/${img}.png`;

	return (
		<img className={className} src={pathImg} alt={img} onClick={onClick} />
	);
};
Img.propTypes = {
	img: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};
export default Img;
