import React from 'react';
import Slider from '../../components/Slider';

interface ProjectsJanProps {}

const ProjectsJan: React.FC<ProjectsJanProps> = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20'>
			<div className='flex justify-center items-center'>
				<Slider site='projects' />
			</div>
		</div>
	);
};

export default ProjectsJan;
