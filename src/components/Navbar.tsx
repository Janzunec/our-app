import React from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { MdPerson, MdPersonOutline } from 'react-icons/md';
import { RiContactsBookFill, RiContactsBookLine } from 'react-icons/ri';
import { VscFolderActive, VscTools } from 'react-icons/vsc';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
	const { pathname } = useLocation();

	const first = Math.floor(Math.random() * 2) === 1 ? 'Jan' : 'Mark';

	return (
		<nav className='w-screen h-auto tablet:h-16 justify-between text-2xl bg-navbg flex align-middle text-white min-w-full fixed left-0 bottom-0 border-t-2 tablet:border-t-0 tablet:top-0  tablet:border-b border-gray-300 z-20'>
			<Link
				to='/'
				className='hidden w-1/6 laptop:w-1/8 tablet:flex items-center justify-center pb-1 font-lob text-3xl text-secondary hover:text-primary transform hover:scale-125 transition-all duration-300'
			>
				JM
			</Link>
			<ul className='align-middle w-screen tablet:w-2/3 laptop:w-1/2 text-primary text-3xl laptop:text-3xl font-main grid grid-cols-5 tablet:grid-cols-4 border-0 py-3'>
				<Link to='/' className='navLink tablet:hidden'>
					<AiOutlineHome
						className={`${
							pathname === '/' ? 'hidden' : 'inline-block'
						} tablet:hidden`}
					/>
					<AiFillHome
						className={`${
							pathname === '/'
								? 'inline-block text-secondary'
								: 'hidden'
						} tablet:hidden`}
					/>
					<span className='hidden'>Home</span>
				</Link>
				<Link to={`/about/${first}`} className='navLink'>
					<MdPersonOutline
						className={`${
							pathname.includes('about')
								? 'hidden'
								: 'inline-block'
						} tablet:hidden`}
					/>
					<MdPerson
						className={`${
							pathname.includes('about')
								? 'inline-block text-secondary'
								: 'hidden'
						} tablet:hidden`}
					/>
					<span className='hidden tablet:inline-block'>about</span>
				</Link>
				<Link to={`/skills/${first}`} className='navLink'>
					<VscTools
						className={`${
							pathname.includes('skills')
								? 'text-secondary'
								: 'text-primary'
						} tablet:hidden`}
					/>
					<span className='hidden tablet:inline-block'>skills</span>
				</Link>
				<Link to='/projects' className='navLink'>
					<VscFolderActive
						className={`${
							pathname.includes('projects')
								? 'text-secondary'
								: 'text-primary'
						} tablet:hidden`}
					/>
					<span className='hidden tablet:inline-block'>projects</span>
				</Link>
				<Link to='/contact' className='navLink'>
					<RiContactsBookLine
						className={`${
							pathname.includes('contact')
								? 'hidden'
								: 'inline-block'
						} tablet:hidden`}
					/>
					<RiContactsBookFill
						className={`${
							pathname.includes('contact')
								? ' inline-block text-secondary'
								: 'hidden'
						} tablet:hidden`}
					/>
					<span className='hidden tablet:inline-block'>contact</span>
				</Link>
				<hr
					className={`h-1 w-full hidden tablet:block bg-primary border-0 transition-all duration-300 transform translate-x-navSm laptop:translate-x-navLg ${
						pathname.includes('about')
							? ' tablet:ml-aboutSm laptop:ml-aboutLg'
							: ''
					} ${
						pathname.includes('skills')
							? ' tablet:ml-skillsSm laptop:ml-skillsLg'
							: ' '
					} ${
						pathname.includes('projects')
							? ' tablet:ml-projectsSm laptop:ml-projectsLg'
							: ''
					} ${
						pathname.includes('contact')
							? ' tablet:ml-contactSm laptop:ml-contactLg'
							: ''
					}`}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
