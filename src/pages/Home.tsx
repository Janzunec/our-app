import React from 'react';
import Title from '../components/title';
import * as THREE from 'three';
import { Routes, Route, Link } from 'react-router-dom';
import ThreeObj from '../components/ThreeObj';

export default function Home() {
	return (
		<>
			<Title />
			<ThreeObj />
		</>
	);
}
