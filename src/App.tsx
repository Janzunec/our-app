import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

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
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
