// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useRef, useEffect } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Importamos el loader para GLTF
// import * as THREE from 'three'; // Importamos THREE para usar materiales
// import { gsap } from 'gsap';

// interface positionCircle {
//   x: number;
//   y: number;
//   z: number;
// }

// interface Props {
//   currentSection: number;
//   gltfPath: string; // Prop para la ruta GLTF
//   positionCircle?: positionCircle;
//   positionCircleTwo?: positionCircle;
// }

// export default function CoinObject({ currentSection, gltfPath, positionCircle, positionCircleTwo }: Props) {
//   const coinRef: any = useRef();

//   // Cargar el modelo GLTF usando useLoader
//   const gltf = useLoader(GLTFLoader, gltfPath);

//   // Establecer el color del objeto y la transparencia
//   useEffect(() => {
//     if (gltf && gltf.scene) {
//       gltf.scene.traverse((child: any) => {
//         if (child.isMesh) {
//           // Asignamos un material con transparencia
//           child.material = new THREE.MeshStandardMaterial({
//             color: '#ffffff',  // Color del objeto
//             transparent: true, // Habilitar transparencia
//             opacity: 0.5,      // Nivel de transparencia (0 es completamente transparente, 1 es opaco)
//             side: THREE.DoubleSide, // Renderiza ambos lados del objeto para mejor visualización
//           });
//         }
//       });
//     }
//   }, [gltf]);

//   useEffect(() => {
//     if (coinRef.current) {
//       if (currentSection === 2) {
//         // Animación en sección 2
//         gsap.to(coinRef.current.position, {
//           x: positionCircle?.x,
//           y: positionCircle?.y,
//           z: positionCircle?.z,
//           duration: 1,
//           ease: 'power3.out',
//         });
//         gsap.to(coinRef.current.scale, {
//           x: 1.7,
//           y: 1.7,
//           z: 1.7,
//           duration: 1,
//           ease: 'power3.out',
//         });
//       } else if (currentSection === 3) {
//         // Animación en sección 3
//         gsap.to(coinRef.current.position, {
//           x: positionCircleTwo?.x,
//           y: positionCircleTwo?.y,
//           z: positionCircleTwo?.z,
//           duration: 1,
//           ease: 'power3.out',
//         });
//         gsap.to(coinRef.current.scale, {
//           x: 1.5,
//           y: 1.5,
//           z: 1.5,
//           duration: 1,
//           ease: 'power3.out',
//         });
//       } else {
//         // Ocultar objeto en otras secciones
//         gsap.to(coinRef.current.scale, {
//           x: 0,
//           y: 0,
//           z: 0,
//           duration: 1,
//           ease: 'power3.out',
//         });
//       }
//     }
//   }, [currentSection, positionCircle, positionCircleTwo]);

//   return (
//     <primitive ref={coinRef} object={gltf.scene} position={[0, 0, -2]} scale={[1.7, 1.7, 1.7]} />
//   );
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Importamos el loader para GLTF
import * as THREE from 'three'; // Importamos THREE para usar materiales
import { gsap } from 'gsap';

interface positionCircle {
  x: number;
  y: number;
  z: number;
}

interface Props {
  currentSection: number;
  gltfPath: string; // Prop para la ruta GLTF
  positionCircle?: positionCircle;
  positionCircleTwo?: positionCircle;
}

export default function CoinObject({ currentSection, gltfPath, positionCircle, positionCircleTwo }: Props) {
  const coinRef: any = useRef();

  // Cargar el modelo GLTF usando useLoader
  const gltf = useLoader(GLTFLoader, gltfPath);

  // Establecer el color del objeto y la transparencia
  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          // Asignamos un material con transparencia
          child.material = new THREE.MeshStandardMaterial({
            color: '#ffffff',  // Color del objeto
            transparent: true, // Habilitar transparencia
            opacity: 0.4,      // Nivel de transparencia (0 es completamente transparente, 1 es opaco)
            side: THREE.DoubleSide, // Renderiza ambos lados del objeto para mejor visualización
          });
        }
        if (currentSection === 3) {
          if (child.isMesh) {
            // Asignamos un material con transparencia
            child.material = new THREE.MeshStandardMaterial({
              color: '#ffffff',  // Color del objeto
              transparent: true, // Habilitar transparencia
              opacity: 0.5,      // Nivel de transparencia (0 es completamente transparente, 1 es opaco)
              side: THREE.DoubleSide, // Renderiza ambos lados del objeto para mejor visualización
            });
          }
        }
      });
    }
  }, [gltf, currentSection]);

  // Rotación sutil en el eje X sin afectar la posición
  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.0002;
      coinRef.current.scale.x += Math.sin(Date.now() * 0.001) * 0.0002;
      coinRef.current.scale.y += Math.sin(Date.now() * 0.001) * 0.0002;
      coinRef.current.scale.z += Math.sin(Date.now() * 0.001) * 0.0002;

    }
  });

  useEffect(() => {
    if (coinRef.current) {
      if (currentSection === 2) {
        // Animación en sección 2
        gsap.to(coinRef.current.position, {
          x: positionCircle?.x,
          y: positionCircle?.y,
          z: positionCircle?.z,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(coinRef.current.scale, {
          x: 1.7,
          y: 1.7,
          z: 1.7,
          duration: 1,
          ease: 'power3.out',
        });
      } else if (currentSection === 3) {
        // Animación en sección 3
        gsap.to(coinRef.current.position, {
          x: positionCircleTwo?.x,
          y: positionCircleTwo?.y,
          z: positionCircleTwo?.z,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(coinRef.current.scale, {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          duration: 1,
          ease: 'power3.out',
        });
      } else {
        // Ocultar objeto en otras secciones
        gsap.to(coinRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0,
          ease: 'power3.out',
        });
      }
    }
  }, [currentSection, positionCircle, positionCircleTwo]);

  return (
    <primitive ref={coinRef} object={gltf.scene} position={[0, 0, -2]} scale={[1.7, 1.7, 1.7]} />
  );
}
