import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';

const Room = () => {
	const { scene } = useThree();
	const texture = useLoader(THREE.TextureLoader, './maps/normal_map.png');

	return (
		<mesh rotation-y={6}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial
				color={'#A287F4'}
				attach='material'
				map={texture}
				bumpScale={1}
			/>
		</mesh>
	);
};

export default Room;
