"use client";

import React, { useRef, useEffect, useState } from "react";
import { How, Sharp, Star, Sticker, Example } from "./_assets/icons";
import BlurAndScaleOnScroll from "./(components)/BlurAndScaleOnScroll";
import RevealText from "./(components)/RevealText";
import RedLabel from "./(components)/RedLabel";
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChangeTextColor from "./(components)/ChangeTextColor";
import TypingText from "./(components)/TypingText";
import Cursor from "./(components)/Cursor";
import ExamplePage from "./_assets/example";
import ExampleSection from "./(section)/ExampleSection";
import EventInfoSection from "./(section)/EventInfoSection";
import { useScroll } from "./_hooks/useScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sharp = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const divRef = useRef(null);
  const topBoxRef = useRef(null);
  const bottomBoxRef = useRef(null);

  useEffect(() => {
    const sharpElement = sharp.current;
    const textElement1 = textRef1.current;
    const textElement2 = textRef2.current;
    const textElement3 = textRef3.current;
    const divElement = divRef.current;
    const topBoxElement = topBoxRef.current;
    const bottomBoxElement = bottomBoxRef.current;

    // gsap.set(topBoxRef, { flexBasis: '40%' });
    gsap.set(bottomBoxRef, { flexBasis: "40%" });
    gsap.set(sharpElement, { opacity: 0, x: "-100%" });
    gsap.set(textElement1, { opacity: 0, x: "-100%" });
    gsap.set(textElement2, { opacity: 0, x: "-100%" });
    gsap.set(textElement3, { opacity: 0, x: "-100%" });

    gsap.to(topBoxElement, {
      scrollTrigger: {
        trigger: topBoxElement,
        start: "bottom top",
        end: "+=100 top",
        scrub: true,
        onUpdate: (self) => {
          const value = self.progress * 100 + 60;
          // gsap.to(topBoxElement, { duration: 1, flexBasis: `${100 - value}%`, ease: Power0.easeNone });
          gsap.to(topBoxElement, {
            duration: 1,
            flexBasis: `${100 - value < 10 ? 0 : 100 - value}%`,
          });
        },
        // markers: true,
      },
    });
    gsap.to(bottomBoxElement, {
      scrollTrigger: {
        trigger: bottomBoxElement,
        start: "top 20%",
        end: "bottom 40%",
        scrub: true,
        onUpdate: (self) => {
          const value = self.progress * 100 + 60;
          gsap.to(bottomBoxElement, {
            duration: 1,
            flexBasis: `${100 - value < 10 ? 0 : 100 - value}%`,
          });
        },
        // markers: true,
      },
    });
    gsap.to(sharpElement, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: sharpElement,
        start: `top 50%`,
        end: "bottom 10%",
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
        start: `top 70%`,
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to(textElement2, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: textElement2,
        start: `top 65%r`,
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to(textElement3, {
      opacity: 1,
      x: "0%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: textElement3,
        start: `top 60%`,
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(divElement, {
      scrollTrigger: {
        trigger: divElement,
        start: "top 60%",
        end: "center 55%",
        scrub: true,
        // markers: true,
      },
      rotation: -45,
      duration: 1,
    });
  }, []);

  // const { scrollY } = useScroll();
  // const height = window.innerHeight;

  // console.log(scrollY, height, ((height - scrollY) / height) * 100);
  // console.log(((height - scrollY) / height) * 100 > 0 ? ((height - scrollY) / height) * 100 : 0);

  return (
    <main className="h-full">
      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <BlurAndScaleOnScroll />
      </div>
      <div className="relative h-[150%]">
        {/* <div className="bg-black w-full h-[20%] sticky top-0 z-50"></div> */}
        {/* <div className="bg-black w-full h-[20%] sticky bottom-[50%] z-50"></div> */}
        <div className="flex justify-center h-full sticky top-0">
          {/* <div
            className="w-full bg-black absolute"
            style={{ height: "50%" }}
            ref={boxRef}
          ></div> */}

          <TypingText from="SPREAD YOUR WIDE WING" to="Spread your wide wing" />
        </div>
        <div
          className={`fixed inset-0 flex flex-col justify-between`}
          // ref={bottomBoxRef}
        >
          <div
            className="bg-black w-full"
            style={{
              flexBasis: "40%",
            }}
            ref={topBoxRef}
          ></div>
          <div
            className="bg-black w-full"
            style={{
              flexBasis: "40%",
            }}
            ref={bottomBoxRef}
          ></div>
        </div>
      </div>
      <div className="relative">
        <div className="sticky top-0 h-fit">
          <div className="flex justify-center absolute w-full" ref={sharp}>
            {/* {Array(6).fill(0).map((el,i) => {
                return <div className="ease-linear duration-100 absolute inset-0 translate-x-0 group-hover:translate-y-[00px]" style={{
                  transitionDelay: `${i*100}ms`
                }} key={i} ref={sharp}><Sharp /></div>
              })} */}
            <Sharp />
          </div>
          <div className="flex justify-center pt-[10%]" ref={textRef1}>
            <p className="title-md">Maybe</p>
          </div>
          <div className="flex justify-center pb-[10%]" ref={textRef2}>
            <p className="title-md">something great will come out</p>
          </div>
          <div className="flex justify-center pb-[20%] mt-[60%]" ref={textRef3}>
            <p className="title-md">&lsquo;Cause you&rsquo;re a genius</p>
          </div>
          <RedLabel />
        </div>
      </div>
      {/* <div className="flex justify-center items-center relative h-full"> */}
      <ChangeTextColor text="(Mail) contact@01.works" />
      {/* </div> */}
      <EventInfoSection />
      <ExampleSection />
      <div className="h-full bg-black flex justify-center items-center z-20 relative">
        <div className="flex justify-center w-full" ref={divRef}>
          <Sticker />
        </div>
      </div>
      <Cursor />
    </main>
  );
}
