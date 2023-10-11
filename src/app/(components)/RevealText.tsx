import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealText: React.FC<{ text: string, start: number }> = ({ text, start }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.set(textElement, { opacity: 0, x: "-100%" });

    gsap.to(textElement, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: textElement,
        start: `top ${start}%`,
        end: "center center",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="flex justify-center py-[10%]">
      <div ref={textRef} className="title-md">
        {text}
      </div>
    </div>
  );
};

export default RevealText;
