import React from 'react';
import Slider from '../../components/Slider';
import LightUpString from '../../components/LightUpString';

interface ProjectsJanProps {}

const ProjectsJan: React.FC<ProjectsJanProps> = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20 mb-4'>
			<div className='flex justify-center items-center'>
				<Slider site='projects' />
			</div>
			<div className='w-screen min-h-screen flex flex-col laptop:flex-row'></div>
		</div>
	);
};

export default ProjectsJan;
