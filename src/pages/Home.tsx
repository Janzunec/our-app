<<<<<<< HEAD
import React from "react";
import Title from "../components/Title";
import * as THREE from "three";
import ThreeObj from "../components/ThreeObj";
=======
import React from 'react';
import Title from '../components/title';
import * as THREE from 'three';
import { Routes, Route, Link } from 'react-router-dom';
import ThreeObj from '../components/ThreeObj';
>>>>>>> 00ac57d291d036bf8dd355236db2ca0347fc12fd

export default function Home() {
  return (
    <>
      <Title />
      <ThreeObj />
    </>
  );
}
