"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const TypingText = ({from, to}: {from: string; to: string;}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, 
      {
      text: `${to}`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement,
        start: "center center",
        end: "center top",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <p className="sticky top-0 title-lg py-[10%] mix-blend-difference" ref={textRef}>
      {from}
    </p>
  );
};

export default TypingText;
