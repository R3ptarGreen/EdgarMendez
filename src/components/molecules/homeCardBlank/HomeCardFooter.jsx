import PropTypes from 'prop-types';
const HomeCardFooter = ({ className }) => {
	return (
		<footer className={`grid content-end cursor-default  ${className}`}>
			<div className='text-end'>
                <p>
                    Coded By Edgar Mendez
                </p>
			</div>
		</footer>
	);
};
HomeCardFooter.propTypes = {
	className: PropTypes.string,
};
export default HomeCardFooter;
