import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const TypingText = ({ from, to }: { from: string; to: string }) => {
  const textRef = useRef(null);


  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, {
      text: `${to}`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement,
        start: "bottom 45%",
        end: "center top",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="sticky top-1/2 py-[10%] -translate-y-1/2 text-center h-fit">
      <p className="title-lg" ref={textRef}>
        {from}
      </p>
    </div>
  );
};

export default TypingText;
