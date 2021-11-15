import React, { useState, useMemo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Navbar: React.FC = () => {
	const { pathname } = useLocation();

	const first = Math.floor(Math.random() * 2) === 1 ? 'Jan' : 'Mark';

	return (
		<nav className='w-screen justify-between text-2xl bg-navbg flex align-middle text-white min-w-full fixed top-0 left-0 border-b border-gray-300 z-20'>
			<Link
				to='/'
				className='w-1/8 flex items-center justify-center pb-1 font-lob text-3xl text-secondary hover:text-primary transform hover:scale-125 transition-all duration-300'
			>
				JM
			</Link>
			<ul className='align-middle w-1/2 text-primary text-2xl laptop:text-3xl font-main grid grid-cols-4 border-0'>
				<Link
					to={`/about/${first}`}
					className={`h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125 transition-all duration-300 `}
				>
					about
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
							? ' ml-about'
							: ''
					} ${
						pathname === '/skills/Jan' ||
						pathname === '/skills/Mark'
							? ' ml-skills'
							: ' '
					} ${pathname === '/projects' ? ' ml-projects' : ''} ${
						pathname === '/contact' ? ' ml-contact' : ''
					}`}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
