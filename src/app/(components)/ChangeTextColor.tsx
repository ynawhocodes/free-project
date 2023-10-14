import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChangeTextColor: React.FC<{ text: string }> = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      gsap.to(textElement, {
        color: "black",
        ease: "linear",
        scrollTrigger: {
          trigger: textElement,
          start: "top center",
          end: "bottom center",
          scrub: true,
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center relative h-full">
      <a
        className="z-10 title-lg text-center mt-10 sticky top-0 py-5 text-[#ff0000]"
        ref={textRef}
        href={"mailto:01.works"}
      >
        {text}
      </a>
    </div>
  );
};

export default ChangeTextColor;
