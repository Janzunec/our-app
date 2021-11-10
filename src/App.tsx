import React from 'react';
import Navbar from './components/navbar';
import Title from './components/title';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Room from './components/Room';
import { OrbitControls } from '@react-three/drei';

function App() {
	return (
		<div className='min-h-screen flex items-center'>
			<Navbar />

			<Title />
			<Canvas>
				<ambientLight />
				<pointLight position={[5, 5, 1]} />
				<Room />
				<OrbitControls />
			</Canvas>
		</div>
	);
}

export default App;
