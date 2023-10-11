"use client";

import React, { useRef, useEffect, useState } from "react";
import Example, { How, Sharp, Star } from "./_assets/icons";
import BlurAndScaleOnScroll from "./(components)/BlurAndScaleOnScroll";
import RevealText from "./(components)/RevealText";
import RedLabel from "./(components)/RedLabel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    const textElement1 = textRef1.current;
    const textElement2 = textRef2.current;
    const textElement3 = textRef3.current;

    gsap.set(textElement1, { opacity: 0, x: "-100%" });
    gsap.set(textElement2, { opacity: 0, x: "-100%" });
    gsap.set(textElement3, { opacity: 0, x: "-100%" });

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
      <div className="md:max-w-screen-md mx-auto bg-white">
        <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <BlurAndScaleOnScroll />
        </div>
        <div className="relative h-[300vh]">
          <div className="flex justify-center items-center h-screen sticky top-0">
            <p className="sticky top-0 title-lg py-[10%]">
              Spread your wide wing
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-0 h-fit">
            <Sharp />
            <div className="flex justify-center pt-[10%]" ref={textRef1}>
              <p className="title-md">Maybe</p>
            </div>
            <div className="flex justify-center pb-[10%]" ref={textRef2}>
              <p className="title-md">something great will come out</p>
            </div>
            <div className="flex justify-center py-[15%]" ref={textRef3}>
              <p className="title-md">'Cause you're a genius</p>
            </div>
            <RedLabel />
          </div>
        </div>
        <div className="flex justify-center items-center relative h-screen">
          <p className="z-10 title-md text-center mt-10 sticky top-0 py-5">
            (Mail) contact@01.works
          </p>
        </div>
        <div className="h-screen bg-[#FF0000] relative">
          <div className="flex sticky top-0">
            <div className="pt-10 pl-1">
              <How />
            </div>
            <div className="flex-1">
              <p className="p-10 text-[13px] md:text-[20px]">
                Event | 영원(FREE) 이벤트 웹 개발 스튜디오, 영원입니다.
                <br />
                10월의 월간프로젝트로 디자이너와 협업 프로젝트를 진행하려고
                합니다.
                <br />
                <br />
                ❍ 참가 방식
                <br />
                참가비용 및 인원 | 무료 (1명)
                <br />
                선발방식 및 기간 | 추첨, ~2023/10/20 23:59
                <br />
                참여조건 | 영원 인스타그램(@01.works) 팔로우, 해당 게시글
                스토리로 공유
                <br />
                참여방법 | “[이벤트 지원] - ❍❍❍(이름)”를 제목으로
                첨부파일(자유양식)과 함께 contact@01.work로 이메일 발송
                <br />
                첨부파일 필수내용 | 화면설계서 또는 디자인 산출물(figma), 자세한
                내용과 예시는 https://free.yangnawon.com 참고
                <br />
                발표 | 2023/10/21 개인 메일로 전달
                <br />
                <br />
                ❍ 개발 방식
                <br />
                제작기간 | 3주
                <br />
                개발규모 | 1페이지
                <br />
                <br />
                ❍ 주의사항 결과물은 홍보용 목적으로 영원인스타 게시물로 업로드
                될 수 있습니다.(인스타 태그로 출처표기)
                <br />
                첨부한 파일은 영원 이벤트 외의 목적으로 절대 사용되지 않습니다.
                <br />
                웹 사이트 배포를 원할 경우 도메인과 호스팅 비용은 개인
                부담입니다.
                <br />
                (사용 기한, 주인 명시)
                <br />
                <br />
                자세한 문의는 contact@01.works 또는 Instagram DM으로
                부탁드립니다.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen py-10 relative">
          <div className="flex sticky top-0">
            <div className="pt-10 pl-1">
              <Example />
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
