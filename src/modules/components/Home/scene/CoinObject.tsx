/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';

interface positionCircle {
  x: number
  y: number
  z: number
}
interface Props {
  currentSection: number
  positionCircle?: positionCircle
  positionCircleTwo?: positionCircle
}

// Objeto 3D: Cilindro (Moneda)
export default function CoinObject({ currentSection, positionCircle, positionCircleTwo }: Props) {
  const coinRef: any = useRef();

  // Animación de rotación constante en el eje Y
  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.x += 0.002; // Rotación en el eje Y
      coinRef.current.rotation.y += 0.002; // Rotación en el eje Y
      // coinRef.current.rotation.z += 0.002; // Rotación en el eje Y
    }
  });

  useEffect(() => {
    if (coinRef.current) {
      if (currentSection === 2) {
        gsap.to(coinRef.current.position, {
          x: positionCircle?.x,
          y: positionCircle?.y,
          z: positionCircle?.z,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(coinRef.current.scale, {
          x: 0.3,
          y: 0.3,
          z: 0.3,
          duration: 1,
          ease: 'power3.out',
        });
      } else if (currentSection === 3) {
        gsap.to(coinRef.current.scale, {
          x: 0.2,
          y: 0.2,
          z: 0.2,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(coinRef.current.position, {
          x: positionCircleTwo?.x,
          y: positionCircleTwo?.y,
          z: positionCircleTwo?.z,
          duration: 1,
          ease: 'power3.out',
        });
      } else {
        gsap.to(coinRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }
    }
  }, [currentSection, positionCircle, positionCircleTwo]);

  return (
    <mesh ref={coinRef} position={[0, 0, -2]} scale={[0, 0, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 0.3, 32]} /> {/* Radio 1.5, grosor 0.3 */}
      <meshStandardMaterial color="#c9d3e6" />
    </mesh>
  );
}
