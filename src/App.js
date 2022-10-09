import React from 'react';
import './index.css';
 import {Canvas} from "@react-three/fiber";
 import { OrbitControls } from "@react-three/drei";

function Box ()
{
 return (
    <mesh>
      <dodecahedronGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="lightgreen" />
    </mesh>
  );
}

export default function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
        <OrbitControls />
      </Canvas>
    </>
  );
}

