import React from 'react';
import Particles from 'react-tsparticles';

interface ParticlesCompProps {}

const ParticlesComp: React.FC<ParticlesCompProps> = () => {
	// const particlesInit = (main: Engine) => {
	// 	console.log(main);

	// 	// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	// };

	// const particlesLoaded = (container: Container) => {
	// 	console.log(container);
	// };

	// let densityState = false;
	// let densityValue = 800;

	let particlesNum = 120;

	const checkWindowSize = () => {
		if (window.innerWidth < 800) {
			// densityState = true;
			particlesNum = 30;
		} else {
			// densityState = false;
			particlesNum = 120;
		}
	};

	checkWindowSize();

	window.addEventListener('resize', checkWindowSize);
	return (
		<div>
			<Particles
				id="tsparticles"
				options={{
					// fullScreen: {
					// 	enable: true,
					// },
					// particles: {
					// 	number: {
					// 		value: particlesNum,
					// 		limit: particlesNum,
					// 	},
					// 	color: {
					// 		value: '#383838',
					// 	},
					// 	shape: {
					// 		type: 'circle',
					// 		// stroke: {
					// 		// 	width: 1,
					// 		// 	color: '#383838',
					// 		// },
					// 	},
					// 	// opacity: {
					// 	// 	value: 1,
					// 	// 	random: true,
					// 	// 	anim: {
					// 	// 		enable: true,
					// 	// 		speed: 1,
					// 	// 		opacity_min: 1,
					// 	// 		sync: false,
					// 	// 	},
					// 	// },
					// 	size: {
					// 		value: 1,
					// 		// random: true,
					// 		// anim: {
					// 		// 	enable: true,
					// 		// 	speed: 7,
					// 		// 	size_min: 1,
					// 		// 	sync: false,
					// 		// },
					// 	},
					// 	line_linked: {
					// 		enable: true,
					// 		distance: 120,
					// 		color: '#383838',
					// 		width: 1,
					// 	},
					// 	move: {
					// 		enable: true,
					// 		speed: 1,
					// 		// direction: 'none',
					// 		// random: true,
					// 		// straight: false,
					// 		// out_mode: 'out',
					// 		// bounce: false,
					// 	},
					// },
					fps_limit: 60,
					// pauseOnOutsideViewport: true,
					// autoPlay: true,
					particles: {
						number: {
							limit: 60,
						},
						color: {
							value: '#383838',
						},
						links: {
							enable: true,
							color: '#383838',
							distance: 150,
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
