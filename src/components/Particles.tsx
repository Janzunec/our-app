import React from 'react';
import Particles from 'react-tsparticles';

interface ParticlesCompProps {}

const ParticlesComp: React.FC<ParticlesCompProps> = () => {
	let particlesLimit;

	const checkWindowSize = () => {
		if (window.innerWidth < 800) {
			particlesLimit = 20;
		} else {
			particlesLimit = 50;
		}
	};

	checkWindowSize();

	window.addEventListener('resize', checkWindowSize);
	return (
		<div>
			<Particles
				id="tsparticles"
				options={{
					fps_limit: 50,
					particles: {
						number: {
							limit: particlesLimit,
						},
						color: {
							value: '#383838',
						},
						links: {
							enable: true,
							color: '#383838',
							distance: 160,
						},
						move: {
							enable: true,
						},
					},
				}}
				className=" w-screen h-screen fixed z-0"
			/>
		</div>
	);
};

export default ParticlesComp;
