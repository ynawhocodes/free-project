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
        start: "80% center",
        end: "center top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="sticky top-0 pt-[85%] pb-[10%] text-center h-fit">
      <p className="title-lg" ref={textRef}>
        {from}
      </p>
    </div>
  );
};

export default TypingText;
