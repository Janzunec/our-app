import React, { useState } from 'react';

const Navbar: React.FC = () => {
	const [active, setActive] = useState<
		'homepage' | 'about' | 'skills' | 'projects' | 'contact' | null
	>(null);

	return (
		<nav className='justify-end text-2xl bg-navbg flex align-middle text-white min-w-full fixed top-0 left-0 border-b border-gray-300'>
			<ul className='align-middle w-2/3 text-primary font-main grid grid-cols-4 border-0'>
				<li
					onClick={() => setActive('about')}
					className={`h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125 transition-all duration-300 `}
				>
					about
				</li>
				<li
					onClick={() => setActive('skills')}
					className='h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300
					'
				>
					skills
				</li>
				<li
					onClick={() => setActive('projects')}
					className='h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300'
				>
					projects
				</li>
				<li
					onClick={() => setActive('contact')}
					className='h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300'
				>
					contact
				</li>
				<hr
					className={`h-1 w-full bg-primary border-0 transition-all duration-300 transform translate-x-nav ${
						active === 'about' ? ' ml-about' : ''
					} ${active === 'skills' ? ' ml-skills' : ''} ${
						active === 'projects' ? ' ml-projects' : ''
					} ${active === 'contact' ? ' ml-contact' : ''}`}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
