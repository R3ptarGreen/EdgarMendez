import PropTypes from 'prop-types';
import {Icon} from '../../index'
const HomeCardFooter = ({ className }) => {
	return (
		<footer className={`grid content-end cursor-default  ${className}`}>
			<div className='text-end flex justify-end'>
				<Icon icon={'copyright'} className={''}/>
				<p className=''>Coded By Edgar Mendez</p>
			</div>
		</footer>
	);
};
HomeCardFooter.propTypes = {
	className: PropTypes.string,
};
export default HomeCardFooter;
