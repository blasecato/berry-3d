/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/modules/core/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = dynamic(() => import('./scene/ThreeScene'), {
  ssr: false, // Disable server-side rendering for Three.js
});

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const sectionsRef: any = useRef([]);
  const [currentSection, setCurrentSection] = useState(1); // Estado de la sección actual

  useGSAP(() => {
    const element: any = containerRef.current;
    // Crear el ScrollTrigger para manejar el scroll y las secciones
    gsap.to(sectionsRef.current, {
      xPercent: -100 * (sectionsRef.current.length - 1), // Mueve horizontalmente las secciones
      ease: 'none',
      scrollTrigger: {
        trigger: element, // Aplica el scroll trigger sobre el contenedor
        pin: true, // Fija el contenedor en su lugar
        scrub: 1, // Hace que el scroll se sincronice con el desplazamiento
        snap: 1 / (sectionsRef.current.length - 1), // Hace que las secciones "salten" al siguiente paso
        end: () => `+=${element.offsetWidth * sectionsRef.current.length}`, // Desplaza según el ancho total de las secciones
        onUpdate: (self) => {
          // Calcula la sección actual basada en el progreso del scroll
          const currentIndex = Math.round(self.progress * (sectionsRef.current.length - 1)) + 1;
          setCurrentSection(currentIndex); // Actualiza la sección actual
        },
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
      className="banner-content"
    >
      <ThreeScene currentSection={currentSection} />
      <div
        style={{
          position: 'relative',
          display: 'flex', // Layout en línea para las secciones
          height: '100%', // Asegura que las secciones ocupen todo el alto de la pantalla
          zIndex: '2000'
        }}
      >
        <section ref={(el) => (sectionsRef.current[0] = el)}>
          <Section1 />
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)}>
          <Section2 />
        </section>
        <section ref={(el) => (sectionsRef.current[2] = el)}>
          <Section3 />
        </section>
        <section ref={(el) => (sectionsRef.current[3] = el)}>
          <Section4 />
        </section>
      </div>

      {/* Mostrar la sección actual */}
      <div className="steps">
        <div className='container'>
          <div className="steps-items">
            <Button onClick={() => setCurrentSection(1)} className={`step step-1 ${currentSection === 1 ? 'active' : ''}`}></Button>
            <Button onClick={() => setCurrentSection(2)} className={`step step-2 ${currentSection === 2 ? 'active' : ''}`}></Button>
            <Button onClick={() => setCurrentSection(3)} className={`step step-3 ${currentSection === 3 ? 'active' : ''}`}></Button>
            <Button onClick={() => setCurrentSection(4)} className={`step step-4 ${currentSection === 4 ? 'active' : ''}`}></Button>
          </div>
          <Link href='./'>
            <Image src="/mause-scroll.svg" width={30} height={40} alt="mause" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;


