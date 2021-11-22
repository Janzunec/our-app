import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import AboutJan from './pages/About/AboutJan';
import AboutMark from './pages/About/AboutMark';
import SkillsJan from './pages/Skills/SkillsJan';
import SkillsMark from './pages/Skills/SkillsMark';
import ProjectsJan from './pages/Projects/ProjectsJan';
import ProjectsMark from './pages/Projects/ProjectsMark';
import ContactJan from './pages/Contact/ContantJan';
import ContactMark from './pages/Contact/ContactMark';

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname !== '/') {
			document.querySelector('.threeBack')?.remove();
		}
	}, [pathname]);

	return (
		<div className='h-auto flex'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about/Jan' element={<AboutJan />} />
				<Route path='/about/Mark' element={<AboutMark />} />
				<Route path='/skills/Jan' element={<SkillsJan />} />
				<Route path='/skills/Mark' element={<SkillsMark />} />
				<Route path='/projects/Jan' element={<ProjectsJan />} />
				<Route path='/projects/Mark' element={<ProjectsMark />} />
				<Route path='/contact/Jan' element={<ContactJan />} />
				<Route path='/contact/Mark' element={<ContactMark />} />
			</Routes>
		</div>
	);
}

export default App;
