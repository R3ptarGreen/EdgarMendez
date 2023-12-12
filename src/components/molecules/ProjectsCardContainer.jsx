import { ProjectsCard } from '../index';

const ProjectsCardContainer = () => {
	const handlePress = () => {
		setTimeout(() => {
			
		}, 500)
	}

	return (
		<>
			<ProjectsCard onPress={handlePress}/>
		</>
	);
};

export default ProjectsCardContainer;
