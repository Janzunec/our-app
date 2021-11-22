import React from 'react';
import Slider from '../../components/Slider';

interface ProjectsMarkProps {}

const ProjectsMark: React.FC<ProjectsMarkProps> = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20'>
			<div className='flex justify-center items-center'>
				<Slider site='projects' />
			</div>
		</div>
	);
};

export default ProjectsMark;
