import React from 'react';
import Particles, { ParticlesProps } from 'react-tsparticles';

interface ParticlesCompProps {}

const ParticlesComp: React.FC<ParticlesCompProps> = () => {
	const particlesInit = (main: ParticlesProps) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	};

	const particlesLoaded = (container: ParticlesProps) => {
		console.log(container);
	};
	return (
		<Particles
			id='tsparticles'
			options={{
				background: {
					color: {
						value: '#666'
					}
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: 'push'
						},
						onHover: {
							enable: true,
							mode: 'repulse'
						},
						resize: true
					},
					modes: {
						bubble: {
							distance: 300,
							duration: 2,
							opacity: 0.8,
							size: 40
						},
						push: {
							quantity: 6
						},
						repulse: {
							distance: 200,
							duration: 0.4
						}
					}
				},
				particles: {
					color: {
						value: '#666'
					},
					links: {
						color: '#666',
						distance: 50,
						enable: true,
						opacity: 0.1,
						width: 1
					},
					collisions: {
						enable: true
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: 6,
						straight: false
					},
					number: {
						density: {
							enable: true,
							area: 800
						},
						value: 80
					},
					opacity: {
						value: 0.5
					},
					shape: {
						type: 'circle'
					},
					size: {
						random: true,
						value: 5
					}
				},
				detectRetina: true
			}}
		/>
	);
};

export default Particles;
