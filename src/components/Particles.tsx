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
								enable: true,
								value_area: 100,
							},
						},
						color: {
							value: '#444',
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 1,
								color: '#444',
							},
						},
						opacity: {
							value: 2,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 2,
								sync: false,
							},
						},
						size: {
							value: 2,
							random: true,
							anim: {
								enable: true,
								speed: 8,
								size_min: 2,
								sync: false,
							},
						},
						line_linked: {
							enable: true,
							distance: 120,
							color: '#444',
							opacity: 1.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 1.5,
							direction: 'none',
							random: true,
							straight: false,
							out_mode: 'out',
							bounce: false,
						},
					},
					retina_detect: true,
					fps_limit: 30,
				}}
				className=" w-screen h-screen fixed z-0"
			/>
		</div>
	);
};

export default ParticlesComp;
