import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChangeTextColor: React.FC<{ text: string }> = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      gsap.to(textElement, {
        color: 'black',
        ease: 'linear',
        scrollTrigger: {
          trigger: textElement,
          start: 'top 10%',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play none none reverse', 
          markers: true,
        },
      });
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        ref={textRef}
        className="title-lg"
      >
        {text}
      </div>
    </div>
  );
};

export default ChangeTextColor;
