"use client"

import React, { useRef, useEffect } from 'react';
import { gsap, Power0 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Star } from '../_assets/icons';

gsap.registerPlugin(ScrollTrigger);

const BlurOnScroll: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    ScrollTrigger.create({
      trigger: container,
      start: 'top 10%',
      end: 'bottom 0%',
      onUpdate: (self) => {
        const blurValue = self.progress * 10;
        gsap.to(container, { duration: 0.5, filter: `blur(${blurValue}px)`, ease: Power0.easeNone });
      },
      // markers: true,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className=""
      style={{ transition: 'filter 0.5s' }}
    >
     <Star/>
    </div>
  );
};

export default BlurOnScroll;
