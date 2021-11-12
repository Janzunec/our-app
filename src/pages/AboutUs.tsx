import React, { useState } from 'react';
import LightUpString from '../components/LightUpString';

const About: React.FC = () => {
	const first = Math.floor(Math.random() * 2) === 1 ? true : false;

	const [isChecked, setIsChecked] = useState(first);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
		console.log(isChecked);
	};

	return (
		<div className='w-screen h-screen pt-20'>
			<div className='form-control flex align-middle items-center justify-center flex-row'>
				{/* <label className='cursor-pointer label'> */}
				<span className='label-text text-3xl mr-6'>Jan</span>
				<input
					type='checkbox'
					className='toggle toggle-primary toggle-lg bg-opacity-100 border-opacity-100'
					checked={isChecked}
					onChange={handleOnChange}
				></input>
				<span className='label-text text-3xl ml-6 text-secondary'>
					Mark
				</span>
				{/* </label> */}
			</div>
			{!isChecked && (
				<div className='w-screen flex flex-row'>
					<div className='w-1/2 pl-6'>
						<div className='h-auto text-2xl font-lba italic text-secondary'>
							<LightUpString content='<h1>' color='tocyan' />
						</div>
						<h1 className='h-auto text-6xl text-primary font-jtm ml-2 p-0'>
							<LightUpString
								content={`Hi, I'm Jan`}
								color={'topurple'}
							/>
						</h1>
						<div className='text-2xl font-lba italic text-secondary mb-0'>
							<LightUpString content='</h1>' color='tocyan' />
						</div>
						<div className='text-2xl font-lba italic text-secondary mt-0 mb-0'>
							<LightUpString content='<p>' color='tocyan' />
						</div>
						<div className=' w-5/6  text-lg text-white font-extralight flex flex-col justify-items-start text-left gap-8 pl-10'>
							<p>
								I am a junior Front-End developer currently
								schooling for a computer engineer in Maribor,
								Slovenia. I have a lot of passion for creating
								unforgettable dynamic user expirience with
								different UI animations and effects.
							</p>
							<p>
								I am a well-organised, problem-solving,
								hard-working person who always insists to be on
								time. I love programming, but when I'm not at my
								desk working, I am in school or riding Downhill
								at Bike Park Pohorje.
							</p>
							<p>
								Am interested in all Front-end technologies and
								always working on different interesting and
								modern projects.
							</p>
						</div>
						<div className='text-2xl font-lba italic text-secondary mt-0 mb-0'>
							<LightUpString content='<p>' color='tocyan' />
						</div>
					</div>
					<div className='w-1/2 h-auto'>
						<div className='flex flex-row flex-wrap justify-center items-center mt-8 gap-32'>
							<div className=' text-html text-9xl animate-spin-slowY'>
								<i className='fab fa-html5'></i>
							</div>
							<div className=' text-css text-9xl animate-spin-slowY'>
								<i className='fab fa-css3-alt'></i>
							</div>
							<div className=' text-js text-9xl animate-spin-slowY'>
								<i className='fab fa-js-square'></i>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default About;
