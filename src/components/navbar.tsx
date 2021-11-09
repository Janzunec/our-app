import React from 'react';

const Navbar: React.FC = () => {
	return (
		<nav className='justify-end text-3xl bg-navbg flex align-middle text-white p-5 min-w-full'>
			<div className='flex justify-around align-middle w-1/2 text-fontcolor font-anu'>
				<div className='hover:text-strokeColor transition-all'>
					ABOUT
				</div>
				<div className='hover:text-strokeColor transition-all'>
					SKILLS
				</div>
				<div className='hover:text-strokeColor transition-all'>
					PROJECTS
				</div>
				<div className='hover:text-strokeColor transition-all'>
					CONTACTS
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
