import { Sphere } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Mesh, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeObj = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x212121);

    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load("./maps/normal_map.png");

    const glLoader = new GLTFLoader();
    const car = glLoader.load(
      "Room/scene.gltf",
      (gltf) => {
        scene.add(gltf.scene);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (err) => {
        console.error(err);
      }
    );

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new THREE.PerspectiveCamera(
      60,
      sizes.width / sizes.height,
      0.1,
      1000
    );

    camera.position.set(4, 4, 8);

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    renderer.domElement.classList.add("threeBack");
    document.body.appendChild(renderer.domElement);

    // const geometry = new THREE.SphereGeometry(2, 32, 32);
    // const material = new THREE.MeshStandardMaterial({
    // 	color: 0x00ffff,
    // 	roughness: 0.8,
    // 	metalness: 0.2,
    // 	normalMap: map,
    // 	bumpScale: 0.005
    // });
    // const sphere = new THREE.Mesh(geometry, material);
    // scene.add(sphere);

    // Light
    const ambientLight = new THREE.AmbientLight(0xfff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.1);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 3;
    scene.add(pointLight);

    // const spotLight = new THREE.SpotLight(0xfff);
    // spotLight.position.set(2, 2, 4);
    // spotLight.power = 50;
    // scene.add(spotLight);

    let mouseX = 0;
    let mouseY = 0;

    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    });

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enablePan = false;
    orbitControls.enableZoom = false;
    orbitControls.enableRotate = false;

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      targetX = mouseX * 0.005;
      targetY = mouseY * 0.005;
      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // sphere.rotation.x += 0.1 * (targetY - sphere.rotation.x);

      // sphere.rotation.y = 1 * elapsedTime + targetX;

      // spotLight.target = sphere;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div></div>;
};

export default ThreeObj;
