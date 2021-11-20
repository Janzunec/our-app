import { Sphere } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh, Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeObj = () => {
	useEffect(() => {
		const scene = new THREE.Scene();

		scene.background = new THREE.Color(0x212121);
		const glLoader = new GLTFLoader();

		const loadReactLogo = glLoader.load(
			'ReactLogo/ReactLogo.gltf',
			(gltf) => {
				const reactLogo = gltf.scene;
				scene.add(reactLogo);
				reactLogo.position.set(0, 0, 0);
				reactLogo.scale.set(1.2, 1.2, 1.2);
				reactLogo.rotation.set(0, 2, -0.3);

				const sizes = {
					width: window.innerWidth,
					height: window.innerHeight
				};

				const camera = new THREE.PerspectiveCamera(
					50,
					sizes.width / sizes.height,
					0.1,
					1000
				);
				camera.position.set(0, 0, 10);

				window.addEventListener('resize', () => {
					// Update sizes
					sizes.width = window.innerWidth;
					sizes.height = window.innerHeight;

					// Update camera
					camera.aspect = sizes.width / sizes.height;
					camera.updateProjectionMatrix();

					// Update renderer
					renderer.setSize(sizes.width, sizes.height);
					renderer.setPixelRatio(
						Math.min(window.devicePixelRatio, 2)
					);
				});

				const renderer = new THREE.WebGLRenderer();

				renderer.setSize(
					window.innerWidth / 1.3,
					window.innerHeight / 1.3
				);

				renderer.domElement.classList.add('threeBack');
				document.body.appendChild(renderer.domElement);

				/**
				 * LIGHT
				 */
				const ambientLight = new THREE.AmbientLight(0xfff, 0);
				scene.add(ambientLight);

				/**
				 *
				 */

				let mouseX = 0;
				let mouseY = 0;

				let targetX = 0;
				let targetY = 0;

				const windowHalfX = window.innerWidth / 2;
				const windowHalfY = window.innerHeight / 2;

				document.addEventListener('mousemove', (event) => {
					mouseX = event.clientX - windowHalfX;
					mouseY = event.clientY - windowHalfY;
				});

				/**
				 * CONTROLS
				 */
				const orbitControls = new OrbitControls(
					camera,
					renderer.domElement
				);
				orbitControls.enableDamping = true;
				// orbitControls.enablePan = false;
				// orbitControls.enableZoom = false;
				// orbitControls.enableRotate = false;

				/**
				 * ANIMATION
				 */

				const clock = new THREE.Clock();

				const animate = () => {
					requestAnimationFrame(animate);

					targetX = mouseX * 0.005;
					targetY = mouseY * 0.005;

					const elapsedTime = clock.getElapsedTime();
					const delta = clock.getDelta();

					// console.log(sizes.height, sizes.width);
					// console.log(targetX, targetY);

					sizes.width >= 1280
						? (reactLogo.rotation.y +=
								(targetX - reactLogo.rotation.y) * 0.02)
						: (reactLogo.rotation.y = 1.6);
					// Logo rotation
					if (
						reactLogo.rotation.y > 0.5 &&
						reactLogo.rotation.y <= 2.8 &&
						sizes.width >= 1280
					) {
						reactLogo.rotation.y +=
							(targetX - reactLogo.rotation.y) * 0.015;
					} else {
						if (sizes.width >= 1280) {
							reactLogo.rotation.y < 0.5
								? (reactLogo.rotation.y = 0.50001)
								: (reactLogo.rotation.y = 2.8);
						}
					}

					sizes.width >= 1280
						? (reactLogo.rotation.x +=
								(targetY - reactLogo.rotation.x) * 0.08)
						: (reactLogo.rotation.x = 0);

					if (
						reactLogo.rotation.x > -1.3 &&
						reactLogo.rotation.x < 0.9 &&
						sizes.width >= 1280
					) {
						reactLogo.rotation.x +=
							(targetY - reactLogo.rotation.x) * 0.08;
					} else {
						if (sizes.width >= 1500) {
							reactLogo.rotation.x < -1.3
								? (reactLogo.rotation.x = -1.3)
								: (reactLogo.rotation.x = 0.9);
						}
					}
					if (sizes.width >= 1280) {
						reactLogo.scale.x = 1;
						reactLogo.scale.y = 1;
						reactLogo.scale.z = 1;
					} else if (sizes.width < 640) {
						reactLogo.scale.x = sizes.width / 1000 + 0.1;
						reactLogo.scale.y = sizes.width / 1000 + 0.1;
						reactLogo.scale.z = sizes.width / 1000 + 0.1;
					} else {
						reactLogo.scale.x = sizes.width / 1000;
						reactLogo.scale.y = sizes.width / 1000;
						reactLogo.scale.z = sizes.width / 1000;
					}

					orbitControls.update();

					renderer.render(scene, camera);
				};

				animate();
			},
			function (xhr) {
				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			(err) => {
				console.error(err);
			}
		);
	}, []);

	return <div></div>;
};

export default ThreeObj;
