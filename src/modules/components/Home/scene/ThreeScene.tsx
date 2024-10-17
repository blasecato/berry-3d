/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeObject from './ThreeObject';
import CoinObject from './CoinObject';

interface positionCircle {
  x: number
  y: number
  z: number
}

interface Props {
  currentSection: number
  positionCircle?: positionCircle
  positionCircleTwo?: positionCircle
  isCheck?: boolean
  setCheck?: Function
}

export default function ThreeScene({ currentSection }: Props) {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, height: '100vh', width: '100vw', pointerEvents: 'none', zIndex: 200 }}>
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 10, 5]} // Ajusta la posición para obtener la sombra deseada
          intensity={4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 20, 1]}>
          <planeGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" color="#5EFFF7" opacity={0.5} />
        </mesh>
        <ThreeObject currentSection={currentSection} />
        {/* user */}
        <CoinObject gltfPath='/textures/iconos-3d-site-agentes.gltf' currentSection={currentSection} positionCircle={{ x: -1.2, y: -1, z: 0 }} positionCircleTwo={{ x: -3, y: -1.5, z: 0 }} />
        {/* car */}
        <CoinObject gltfPath='/textures/iconos-3d-site-auto.gltf' currentSection={currentSection} positionCircle={{ x: -.5, y: -1.7, z: 0 }} positionCircleTwo={{ x: -3, y: -1, z: 0 }} />
        {/* coin */}
        <CoinObject gltfPath='/textures/iconos-3d-site-ingresos.gltf' currentSection={currentSection} positionCircle={{ x: -0.3, y: -1.8, z: 0 }} positionCircleTwo={{ x: -3, y: -1.4, z: 0 }} />
        {/* book */}
        <CoinObject gltfPath='/textures/iconos-3d-site-libro.gltf' currentSection={currentSection} positionCircle={{ x: -1, y: -1.9, z: 0 }} positionCircleTwo={{ x: -3, y: -1.3, z: 0 }} />
        {/* piaa */}
        <CoinObject gltfPath='/textures/iconos-3d-site-piaa.gltf' currentSection={currentSection} positionCircle={{ x: -0.3, y: -2, z: 0 }} positionCircleTwo={{ x: -3, y: -1.5, z: 0 }} />
      </Canvas>
    </div>
  );
}
