import * as React from 'react';
import LightUpString from '../../components/LightUpString';
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
import { IconType } from 'react-icons';
import Slider from '../../components/Slider';
import ActivityJan from '../../components/ActivityJan';
import { Link } from 'react-router-dom';

interface AboutJanProps {}

const AboutJan: React.FC<AboutJanProps> = () => {
	return (
		<div className='min-w-screen min-h-screen pt-4 tablet:pt-20 mb-4'>
			<Slider site={'about'} />
			<div className='w-screen min-h-screen flex flex-col laptop:flex-row'>
				<div className='w-screen h-auto laptop:w-1/2 pl-4'>
					<div className='h-auto text-2xl font-lba italic text-secondary pt-2 tablet:pt-0'>
						<LightUpString content='<h2>' color='tocyan' />
					</div>
					<h2 className='h-auto text-5xl tablet:text-6xl text-primary font-jtm ml-2 p-0'>
						<LightUpString
							content={`Hi, I'm Jan`}
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
							job done. I love programming and while I'm not at my
							desk, I am in school or at the gym.
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
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary desktop:mt-2'>
						<LightUpString content='<button>' color='tocyan' />
					</div>
					<Link to='/contact/Jan'>
						<button className='btn btn-md tablet:btn-lg btn-outline btn-accent ml-6'>
							Let's create something!
						</button>
					</Link>
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary mt-2'>
						<LightUpString content='</button>' color='tocyan' />
					</div>
					<div className='flex flex-row justify-center tablet:justify-start items-center tablet:gap-4 text-2xl mt-2 desktop:mt-0 text-secondary'>
						<span className='hidden tablet:inline'>
							<LightUpString
								content='Jan.activity ='
								color='tocyan'
							/>
						</span>
						<ActivityJan />
					</div>
				</div>
				<div className='w-screen min-h-auto laptop:w-1/2 laptop:h-auto border-0 mb-20 tablet:mb-16 mt-14 laptop:mb-0'>
					<div className='h-auto grid grid-cols-3 desktop:grid-cols-4 gap-y-16 laptop:mt-4 laptop:gap-16 desktop:gap-24 desktop:mt-12 laptop:pr-6'>
						<a
							href='https://www.w3schools.com/html/'
							target='blank'
						>
							<IconHover
								icon={SiHtml5}
								text='HTML 5'
								color='html'
							/>
						</a>
						<a href='https://www.w3schools.com/css/' target='blank'>
							<IconHover icon={SiCss3} text='CSS 3' color='css' />
						</a>
						<a href='https://www.javascript.com/' target='blank'>
							<IconHover
								icon={SiJavascript}
								text='JavaScript'
								color='js'
							/>
						</a>
						<a
							href='https://www.typescriptlang.org/'
							target='blank'
						>
							<IconHover
								icon={SiTypescript}
								text='TypeScript'
								color='blue-700'
							/>
						</a>
						<a href='https://reactjs.org/' target='blank'>
							<IconHover
								icon={SiReact}
								text='ReactJS'
								color='primary'
								animation='slow'
							/>
						</a>
						<a href='https://tailwindcss.com/' target='blank'>
							<IconHover
								icon={SiTailwindcss}
								text='Tailwid CSS'
								color='primary'
							/>
						</a>
						<a href='https://threejs.org/' target='blank'>
							<IconHover
								icon={SiThreedotjs}
								text='Three.js'
								color='gray-200'
							/>
						</a>
						<a href='https://code.visualstudio.com/' target='blank'>
							<IconHover
								icon={SiVisualstudiocode}
								text='Visual Studio Code'
								color='blue-500'
							/>
						</a>
						<a href='https://www.mysql.com/' target='blank'>
							<IconHover
								icon={SiMysql}
								text='MySQL'
								color='blue-900'
							/>
						</a>
						<a href='https://www.php.net/' target='blank'>
							<IconHover icon={SiPhp} text='PHP' color='php' />
						</a>
						<a
							href='https://www.w3schools.com/CPP/default.asp'
							target='blank'
						>
							<IconHover
								icon={SiCplusplus}
								text='C++'
								color='blue-800'
							/>
						</a>
						<a href='https://www.python.org/' target='blank'>
							<IconHover
								icon={SiPython}
								text='Python'
								color='yellow-300'
								animation='slow'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

interface IconHoverProps {
	icon: IconType;
	text: string;
	color?: string;
	animation?: string;
}

const IconHover: React.FC<IconHoverProps> = ({
	icon,
	text,
	color,
	animation
}) => (
	<div className='relative w-auto h-auto flex items-center justify-center flex-col transition-all duration-200 ease-linear group'>
		<span className='iconText group-hover:opacity-100 group-hover:translate-y-0'>
			{text}
		</span>
		{icon({
			className: `h-auto w-auto text-${
				color ?? 'secondary'
			} text-6xl laptop:text-8xl animate-spin-${
				animation ?? 'slowY'
			} transition-all  group-hover:animate-none`
		})}
	</div>
);

export default AboutJan;
