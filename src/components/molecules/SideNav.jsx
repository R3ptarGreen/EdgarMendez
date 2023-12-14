import { IconLink, Icon } from '../../components/index';
import socialData from '../../data/SocialData.json';
import { Button } from '@nextui-org/react';
import {Link} from 'react-router-dom'
const SideNav = () => {
	const dataCheck = socialData ? socialData || [] : [];
	return (
		<nav className='grid  md:p-4 backdrop-blur-0 gap-4'>
			<div className='grid grid-cols-2'>
				<div className='grid gap-2'>
					<p className='text-primary'>social</p>
					<div className='grid grid-cols-2 max-w-fit md:gap-2'>
						<IconLink icon={'linkedIn'} linkWeb={dataCheck.linkedIn} />
						<IconLink icon={'github'} linkWeb={dataCheck.gitHub} />
					</div>
				</div>
				<div className='grid gap-2'>
					<p className='text-primary'>Info</p>
					<a href=''>Resume</a>
				</div>
			</div>
			<Link to={'/'}>
				<Button color='primary' variant='shadow' className='h-fit px-2 py-2 flex font-secondary gap-1' startContent={<Icon icon={'prev'} />}>
					Back to Home
				</Button>
			</Link>
		</nav>
	);
};

export default SideNav;
