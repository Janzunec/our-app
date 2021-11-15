import React from 'react';
import Slider from '../../components/Slider';
import LightUpString from '../../components/LightUpString';

interface AboutMarkProps {}

const AboutMark: React.FC<AboutMarkProps> = () => {
	return (
		<div className='min-w-screen min-h-screen pt-20'>
			<Slider site={'about'} />
			<div className='w-screen flex flex-row-reverse'>
				<div className='w-1/2 pl-6'>
					<div className='h-auto text-2xl font-lba italic text-primary'>
						<LightUpString content='<h1>' color='topurple' />
					</div>
					<h1 className='name flex h-auto w-1/4 text-6xl text-secondary font-dc ml-2 p-0 transition-all'>
						<div className='mark hover: duration-500 delay-100'>
							Mark
						</div>
						<div className='vrcko text-mainbg ml-4 hover: duration-500 delay-400'>
							Vrchko
						</div>
					</h1>
					<div className='text-2xl font-lba italic text-primary mb-0'>
						<LightUpString content='</h1>' color='topurple' />
					</div>
					<div className='text-2xl font-lba italic text-primary mt-0 mb-0'>
						<LightUpString content='<p>' color='topurple' />
					</div>
					<div className=' w-5/6  text-lg text-white font-extralight flex flex-col justify-items-start text-left gap-8 pl-10'>
						<p>
							I am a junior Front-End developer currently
							schooling for a computer engineer in Maribor,
							Slovenia. My passion is creating unforgettable
							dynamic user expirience with different UI animations
							and effects.
						</p>
						<p>
							I am a well-organised, problem-solving, hard-working
							person who always insists to be on time and gets the
							job done. I love programming and when I'm not at my
							desk, I am in school or riding Downhill at Bike Park
							Pohorje.
						</p>
						<p>
							Am interested in all Front-end technologies, always
							learning and working on different interesting and
							modern projects.
						</p>
					</div>
					<div className='text-2xl font-lba italic text-primary mt-0 mb-0'>
						<LightUpString content='<p>' color='topurple' />
					</div>
				</div>
				<div className='w-1/2 min-h-full border-0'>icons</div>
			</div>
		</div>
	);
};

export default AboutMark;
