import { ProjectsCardContainer, SideNav } from '../../index';
const ProjectsCards = () => {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 col-span-2 md:col-span-3 lg:col-span-4 p-2 md:p-8 h-fit gap-4'>
				<ProjectsCardContainer />
			</div>
			<div className='min-h-screen bg-background'>
				<SideNav />
			</div>
		</>
	);
};

export default ProjectsCards;
