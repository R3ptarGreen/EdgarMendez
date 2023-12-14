import PropTypes from 'prop-types';
const Icon = ({className, icon}) => {
    const pathIcon = `assets/svg/${icon}.svg`;
  return (
    <img className={className} src={pathIcon} alt={icon} />
  )
}
Icon.propTypes = {
	icon: PropTypes.string,
	className: PropTypes.string,
};
export default Icon