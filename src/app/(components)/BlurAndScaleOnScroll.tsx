import React, { useRef, useEffect } from "react";
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Star } from "../_assets/icons";

gsap.registerPlugin(ScrollTrigger);

const BlurAndScaleOnScroll: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    ScrollTrigger.create({
      trigger: container,
      start: "bottom top",
      end: "+=1000",
      toggleActions: 'play none none reverse', 
      // markers: true,
      onEnter: () => {
        gsap.to(container, {
          // duration: 0.5,
          scale: 1,
          // ease: Power0.easeNone,
          onComplete: () => {
            gsap.to(container, {
              // duration: 5.5,
              filter: "blur(5px)",
              // ease: Power0.easeNone,
            });
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(container, {
          // duration: 3.5,
          scale: 0.2,
          filter: "blur(0px)",
          // ease: Power0.easeNone,
        });
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{
        // transition: "filter 0.5s, transform 0.5s",
        display: "inline-block",
        transformOrigin: "center center",
        transform: "scale(0.2)",
      }}
    >
      <Star />
    </div>
  );
};

export default BlurAndScaleOnScroll;
