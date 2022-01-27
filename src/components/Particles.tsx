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

	let densityState = false;
	let densityValue = 800;
	let fpsLimit = 30;
	window.addEventListener('resize', () => {
		if (window.innerWidth < 800) {
			densityState = true;
			fpsLimit = 60;
		} else {
			densityState = false;
			fpsLimit = 30;
		}
	});
	return (
		<div>
			<Particles
				id="tsparticles"
				options={{
					fullScreen: {
						enable: true,
						zIndex: -1,
					},
					particles: {
						number: {
							value: 120,
							limit: 120,
							density: {
								enable: densityState,
								value_area: densityValue,
							},
						},
						color: {
							value: '#383838',
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 1,
								color: '#383838',
							},
						},
						opacity: {
							value: 1,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 1,
								sync: false,
							},
						},
						size: {
							value: 2,
							random: true,
							anim: {
								enable: true,
								speed: 7,
								size_min: 2,
								sync: false,
							},
						},
						line_linked: {
							enable: true,
							distance: 110,
							color: '#383838',
							opacity: 1.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 1.4,
							direction: 'none',
							random: true,
							straight: false,
							out_mode: 'out',
							bounce: false,
						},
					},
					retina_detect: true,
					fps_limit: fpsLimit,
					pauseOnOutsideViewport: true,
				}}
				className=" w-screen h-screen fixed z-0"
			/>
		</div>
	);
};

export default ParticlesComp;
