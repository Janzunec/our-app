import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import AboutJan from './pages/About/AboutJan';
import AboutMark from './pages/About/AboutMark';
import SkillsJan from './pages/Skills/SkillsJan';
import SkillsMark from './pages/Skills/SkillsMark';

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
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
