"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { How } from "../_assets/icons";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const EventInfoSection = () => {
  return (
    <div className="bg-[#FF0000] relative">
      <div className="flex sticky top-0">
        <div className="pt-10 pl-1">
          <How />
        </div>
        <div className="flex-1">
          <p className="p-10 text-[13px] md:text-[20px]">
            <span className="font-bold">Event | 영원(FREE) 이벤트 </span>
            <br/>
            <br/>
            웹 개발 스튜디오&apos; 영원입니다.
            <br />
            10월의 월간프로젝트로 디자이너와 협업 프로젝트를 진행하려고 합니다.
            <br />
            <br />
            <span className="font-bold">❍ 참가 방식</span>
            <br />
            참가비용 및 인원 | 무료 (1명)
            <br />
            선발방식 및 기간 | 추첨&apos; ~2023/10/20 23:59
            <br />
            참여조건 | <a className="underline underline-offset-[4px] decoration-1 hover:text-white" href="https://www.instagram.com/01.works">영원 인스타그램(@01.works) 팔로우</a>&apos; 해당 게시글
            스토리로 공유
            <br />
            참여방법 | “[이벤트 지원] - ❍❍❍(이름)”를 제목으로
            첨부파일(자유양식)과 함께 <a className="underline underline-offset-[4px] decoration-1 hover:text-white" href={"mailto:01.works"}>contact@01.work</a>로 이메일 발송
            <br />
            첨부파일 필수내용 | 화면설계서 또는 디자인 산출물(figma)&apos;
            자세한 내용과 예시는 <a className="underline underline-offset-[4px] decoration-1 hover:text-white" href="https://free.01.works">https://free.01.works</a> 참고
            <br />
            발표 | 2023/10/21 개인 메일로 전달
            <br /> 
            <br />
            <span className="font-bold">❍ 개발 방식</span>
            <br />
            제작기간 | 3주
            <br />
            개발규모 | 1페이지
            <br />
            <br />
            <span className="font-bold">❍ 유의사항</span>
            <br/>
            결과물은 홍보용 목적으로 영원인스타 게시물로 업로드 될 수
            있습니다.(인스타 태그로 출처표기)
            <br />
            첨부한 파일은 영원 이벤트 외의 목적으로 절대 사용되지 않습니다.
            <br />
            웹 사이트 배포를 원할 경우 도메인과 호스팅 비용은 개인 부담입니다.
            <br />
            (사용 기한&apos; 주인 명시)
            <br/>
            디자인에 따라 일정이 변경될 수도 있습니다.
            <br />
            <br />
            자세한 문의는 contact@01.works 또는 Instagram DM으로 부탁드립니다.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventInfoSection;
