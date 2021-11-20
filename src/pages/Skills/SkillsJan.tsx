import React from 'react';
import Slider from '../../components/Slider';
import LightUpString from '../../components/LightUpString';

interface SkillsJanProps {}

const SkillsJan: React.FC<SkillsJanProps> = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20'>
			<div className='flex justify-center items-center'>
				<Slider site='skills' />
			</div>
			<div className='w-screen min-h-screen flex flex-col laptop:flex-row'>
				<div className='w-screen h-auto laptop:w-1/2 pl-4'>
					<div className='h-auto text-2xl font-lba italic text-secondary pt-2 tablet:pt-0'>
						<LightUpString content='<h2>' color='tocyan' />
					</div>
					<h2 className='h-auto text-5xl tablet:text-6xl text-primary font-jtm ml-2 p-0'>
						<LightUpString
							content={`Skillset`}
							color={'topurple'}
						/>
					</h2>
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary mb-0'>
						<LightUpString content='</h2>' color='tocyan' />
					</div>
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary mb-0'>
						<LightUpString content='<p>' color='tocyan' />
					</div>

					<div className='w-full laptop:w-5/6 text-lg text-white font-extralight flex flex-col justify-items-start text-left gap-5 px-6'>
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
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary desktop:mt-2'>
						<LightUpString content='</p>' color='tocyan' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsJan;
