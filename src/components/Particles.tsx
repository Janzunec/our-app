import React from 'react';
import { Container } from 'react-dom';
import Particles from 'react-tsparticles';

interface ParticlesCompProps {}

const ParticlesComp: React.FC<ParticlesCompProps> = () => {
	// const particlesInit = (main) => {
	// 	console.log(main);

	// 	// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	// };

	// const particlesLoaded = (container) => {
	// 	console.log(container);
	// };

	return (
		<Particles
			id='tsparticles'
			url='http://foo.bar/particles.json'
			// init={particlesInit}
			// loaded={particlesLoaded}
		/>
	);
};

export default ParticlesComp;
