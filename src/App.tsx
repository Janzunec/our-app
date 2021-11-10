import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import * as THREE from 'three';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname !== '/') {
			document.querySelector('.threeBack')?.remove();
		}
	}, [pathname]);

	return (
		<div className='min-h-screen flex items-center'>
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
