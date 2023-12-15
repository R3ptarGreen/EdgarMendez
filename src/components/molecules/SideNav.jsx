import { IconLink, Icon } from '../../components/index';
import socialData from '../../data/SocialData.json';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const SideNav = () => {
	const selectedSocial = socialData.social ? socialData.social : [];
	const selectedInfo = socialData.info ? socialData.info: [];

	return (
		<nav className='grid md:p-4 backdrop-blur-0 gap-4 fixed'>
			<div className='grid md:grid-cols-2'>
				<div className='grid gap-2'>
					<p className='text-primary'>social</p>
					<div className='flex w-fit md:gap-2'>
						{selectedSocial.map((item, index) => (
							<IconLink key={index} icon={item.icon} linkWeb={item.linkWeb} />
						))}
					</div>
				</div>
				<div className='grid gap-2 w-fit'>
					<p className='text-primary'>Info</p>
					{selectedInfo.map((item, index) => (
						<IconLink key={index} icon={item.icon} linkWeb={item.linkWeb}/>
					))}
				</div>
			</div>
			<Link to={'/'}>
				<Button
					color='primary'
					variant='shadow'
					className='h-fit px-2 py-2 flex font-secondary gap-0'
					startContent={<Icon icon={'prev'} />}
				>
					Home
				</Button>
			</Link>
		</nav>
	);
};

export default SideNav;
