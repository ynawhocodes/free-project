"use client";

import React, { useRef, useEffect, useState } from "react";
import { How, Sharp, Star, Sticker, Example } from "./_assets/icons";
import BlurAndScaleOnScroll from "./(components)/BlurAndScaleOnScroll";
import RevealText from "./(components)/RevealText";
import RedLabel from "./(components)/RedLabel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChangeTextColor from "./(components)/ChangeTextColor";
import EventInfo from "./(components)/EventInfo";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sharp = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    const sharpElement = sharp.current;
    const textElement1 = textRef1.current;
    const textElement2 = textRef2.current;
    const textElement3 = textRef3.current;

    gsap.set(sharpElement, { opacity: 0, x: "-100%" });
    gsap.set(textElement1, { opacity: 0, x: "-100%" });
    gsap.set(textElement2, { opacity: 0, x: "-100%" });
    gsap.set(textElement3, { opacity: 0, x: "-100%" });

    gsap.to(sharpElement, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: sharpElement,
        start: `top 75%`,
        end: "bottom 79%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement1, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: textElement1,
        start: `top 80%`,
        end: "bottom 83%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement2, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: textElement2,
        start: `top 83%`,
        end: "bottom 86%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement3, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: textElement3,
        start: `top 87%`,
        end: "bottom 90%",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <main className="h-full bg-black">
      <div className="md:max-w-screen-md mx-auto bg-white cursor-pointer">
        <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <BlurAndScaleOnScroll />
        </div>
        <div className="relative h-[200vh]">
          <div className="flex justify-center items-center h-screen sticky top-0">
            <p className="sticky top-0 title-lg py-[10%]">
              Spread your wide wing
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-0 h-fit">
            <div className="flex justify-center" ref={sharp}>
              <Sharp />
            </div>
            <div className="flex justify-center pt-[10%]" ref={textRef1}>
              <p className="title-md">Maybe</p>
            </div>
            <div className="flex justify-center pb-[10%]" ref={textRef2}>
              <p className="title-md">something great will come out</p>
            </div>
            <div className="flex justify-center py-[15%]" ref={textRef3}>
              <p className="title-md">&lsquo;Cause you&rsquo;re a genius</p>
            </div>
            <RedLabel />
          </div>
        </div>
        <div className="flex justify-center items-center relative h-screen">
          <p className="z-10 title-md text-center mt-10 sticky top-0 py-5">
            (Mail) contact@01.works
          </p>
        </div>
       <EventInfo/>
        <div className="h-screen py-10 relative">
          <div className="flex sticky top-0">
            <div className="pt-10 pl-1">
              <Example />
            </div>
            <div className="flex-1"></div>
          </div>
          <ChangeTextColor text="Example 결과물 보러가기" />
        </div>
        <div className="h-screen  bg-black flex justify-center items-center z-20 relative">
          <Sticker />
        </div>
      </div>
    </main>
  );
}
