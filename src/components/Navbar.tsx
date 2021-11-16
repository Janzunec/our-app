import React, { useState, useMemo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { MdPersonOutline } from 'react-icons/md';

const Navbar: React.FC = () => {
	const { pathname } = useLocation();

	const first = Math.floor(Math.random() * 2) === 1 ? 'Jan' : 'Mark';

	return (
		<nav className='w-screen h-auto tablet:h-navbar justify-between text-2xl bg-navbg flex align-middle text-white min-w-full fixed left-0 bottom-0 tablet:bottom-navtop tablet:top-0  border-b border-gray-300 z-20'>
			<Link
				to='/'
				className='hidden tablet:flex w-1/8 items-center justify-center pb-1 font-lob text-3xl text-secondary hover:text-primary transform hover:scale-125 transition-all duration-300'
			>
				JM
			</Link>
			<ul className='align-middle w-screen tablet:w-2/3 laptop:w-1/2 text-primary text-2xl laptop:text-3xl font-main grid grid-cols-5 tablet:grid-cols-4 border-0'>
				<Link
					to='/'
					className='tablet:hidden items-center justify-center pb-1 font-lob text-3xl text-secondary hover:text-primary transform hover:scale-125 transition-all duration-300'
				>
					Halo
				</Link>
				<Link
					to={`/about/${first}`}
					className={`h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125 transition-all duration-300 `}
				>
					<MdPersonOutline className='' />
					<span className=''>about</span>
				</Link>
				<Link
					to={`/skills/${first}`}
					className='h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300
					'
				>
					skills
				</Link>
				<Link
					to='/projects'
					className='h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300'
				>
					projects
				</Link>
				<Link
					to='/contact'
					className='h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300'
				>
					contact
				</Link>
				<hr
					className={`h-1 w-full bg-primary border-0 transition-all duration-300 transform translate-x-nav ${
						pathname === '/about/Jan' || pathname === '/about/Mark'
							? ' tablet:ml-about'
							: ''
					} ${
						pathname === '/skills/Jan' ||
						pathname === '/skills/Mark'
							? ' tablet:ml-skills'
							: ' '
					} ${
						pathname === '/projects' ? ' tablet:ml-projects' : ''
					} ${pathname === '/contact' ? ' tablet:ml-contact' : ''}`}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
