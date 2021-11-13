import React, { useState } from 'react';
import LightUpString from '../components/LightUpString';
import {
	SiTailwindcss,
	SiMysql,
	SiReact,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiCplusplus,
	SiThreedotjs,
	SiPhp,
	SiVisualstudiocode,
	SiPython
} from 'react-icons/si';

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
								Slovenia. My passion is creating unforgettable
								dynamic user expirience with different UI
								animations and effects.
							</p>
							<p>
								I am a well-organised, problem-solving,
								hard-working person who always insists to be on
								time and get the job done. I love programming
								and when I'm not at my desk, I am in school or
								riding Downhill at Bike Park Pohorje.
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
					<div className='w-1/2 min-h-full border-0'>
						<div className='flex flex-row flex-wrap justify-center items-center mt-8 gap-16'>
							<SiHtml5 className=' text-html text-8xl animate-spin-slowY ' />
							<SiCss3 className=' text-css text-8xl animate-spin-slowY' />
							<SiJavascript className=' text-js text-8xl animate-spin-slowY' />
							<SiTypescript className=' text-blue-700 text-8xl animate-spin-slowY' />
							<SiReact className=' text-primary text-8xl animate-spin-slow' />
							<SiTailwindcss className='text-primary text-8xl animate-spin-slowY' />
							<SiThreedotjs className=' text-gray-100 text-8xl animate-spin-slow' />
							<SiVisualstudiocode className='text-blue-500 text-8xl animate-spin-slowY' />
							<SiMysql className=' text-blue-900 text-8xl animate-spin-slowY' />
							<SiPhp className=' text-php text-8xl animate-spin-slowY' />
							<SiCplusplus className='text-blue-900 text-8xl animate-spin-slowY' />
							<SiPython className='text-8xl text-blue-600  animate-spin-slow' />
						</div>
					</div>
				</div>
			)}
			{isChecked && (
				<div className='text-secondary'>
					Mark. Svojo stran delaj TUKAJ notri! Lahko si malo pogledaš
					moje za kake mere in pa, če želiš da je tema spletne strani
					podobna, lahko pa ustvariš popolnoma svojo, kak ti paše, saj
					je to tut tvoj del portfolia.
				</div>
			)}
		</div>
	);
};

export default About;
