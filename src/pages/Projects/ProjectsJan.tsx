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
			<div className='w-screen h-auto grid grid-cols-3 justify-items-center items-center align-top gap-10 p-10 animate-fade-in'>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='../../img/revolucijaVodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./src/img/zunecdevml.png'
						alt='zunecdev.ml'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./public/img/revolucija_vodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./public/img/revolucija_vodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./public/img/revolucija_vodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./public/img/revolucija_vodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./public/img/revolucija_vodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./public/img/revolucija_vodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
				<div className=' w-4/5 border-2 h-56'>
					<img
						src='./public/img/revolucija_vodenja.png'
						alt='Revolucija vodenja'
						// className='h-full w-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsJan;
