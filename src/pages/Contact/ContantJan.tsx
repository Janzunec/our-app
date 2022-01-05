import React from 'react';
import Slider from '../../components/Slider';
import LightUpString from '../../components/LightUpString';
import { IoLogoInstagram } from 'react-icons/io';

interface ContactJanProps {}

const ContactJan: React.FC<ContactJanProps> = () => {
	const validateForm = () => {
		const name = document.querySelector('.form-name')?.textContent;
		console.log(name);
	};
	return (
		<div className=' w-screen pt-4 tablet:pt-20 '>
			<div className='flex justify-center items-center'>
				<Slider site='contact' />
			</div>
			<div className='w-screen min-h-screen flex flex-col laptop:flex-row pb-16 animate-fade-in'>
				<div className='w-screen h-auto laptop:w-1/2 pl-4'>
					<div className='font-lba text-2xl'>
						<LightUpString content='<h2>' color='tocyan' />
					</div>
					<h2 className='text-5xl laptop:text-6xl font-jtm group'>
						<LightUpString
							content="Let's create"
							color='topurple'
						/>
						<div className=' inline-block'>
							<LightUpString
								content='something'
								color='topurple'
							/>
						</div>
						<div className=' hidden laptop:inline-block'>
							&nbsp;
						</div>
						<div className=' hidden w-auto transform opacity-0 translate-x-12 group-hover:translate-x-0 group-hover:opacity-100  duration-500 laptop:inline-block'>
							<LightUpString content=' special' color='tocyan' />
						</div>
					</h2>
					<div className='font-lba text-2xl'>
						<LightUpString content='</h2>' color='tocyan' />
					</div>
					<div className='font-lba text-2xl'>
						<LightUpString content='<ul>' color='tocyan' />
					</div>
					<ul className=' text-3xl'>
						<li>
							<IoLogoInstagram className=' inline-block text-4xl' />
							&nbsp;janzunec
						</li>
						<li>Linkedin: Jan Zunec</li>
						<li>Github: Janzunec</li>
						<li>Twitter: Janzunec</li>
					</ul>
					<div className='font-lba text-2xl'>
						<LightUpString content='</ul>' color='tocyan' />
					</div>
				</div>

				<div className='w-screen h-auto items-center laptop:w-1/2 laptop:pr-6 pt-12 flex flex-col align-top laptop:place-items-end '>
					<h3 className=' text-3xl laptop:text-5xl font-jtm pb-6'>
						<LightUpString
							content='Send me an Email!'
							color='topurple'
						/>
					</h3>
					<div className='form-control w-full px-5 laptop:px-0 laptop:pl-6 flex justify-items-center align-top gap-8'>
						<div className='w-full flex flex-col laptop:flex-row justify-evenly gap-8 latpop:gap-4 '>
							<div className=' indicator w-full text-white'>
								<div className=' indicator-item indicator-top indicator-center badge badge-accent '>
									Your Name
								</div>
								<input
									type='text'
									placeholder='Name'
									className='input input-accent input-bordered w-full text-xl form-name'
								/>
							</div>
							<div className=' indicator w-full text-white'>
								<div className=' indicator-item indicator-top indicator-center badge badge-accent '>
									Your Email
								</div>
								<input
									type='text'
									placeholder='Email'
									className='input input-accent input-bordered w-full text-xl form-email'
								/>
							</div>
						</div>
						<div className=' indicator w-full text-white'>
							<div className=' indicator-item indicator-top indicator-center badge badge-accent'>
								Subject
							</div>
							<input
								type='text'
								placeholder='Subject'
								className='input input-accent input-bordered w-full text-xl form-subject'
							/>
						</div>
						<div className=' indicator w-full text-white'>
							<div className=' indicator-item indicator-top indicator-center badge badge-accent '>
								Your Message
							</div>
							<textarea
								placeholder='Message'
								className='textarea textarea-bordered textarea-accent w-full text-xl h-52 form-message'
							/>
						</div>
					</div>
					<button
						className='btn btn-outline btn-accent mt-8 text-xl form-btn'
						onClick={validateForm}
					>
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactJan;
