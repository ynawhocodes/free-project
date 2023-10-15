import ExamplePage from "../_assets/example";
import { Example } from "../_assets/icons";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useEffect } from "react";


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const ExampleSection = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);
  const textRef6 = useRef(null);
  const textRef7 = useRef(null);

  useEffect(() => {
    const textElement1 = textRef1.current;
    const textElement2 = textRef2.current;
    const textElement3 = textRef3.current;
    const textElement4 = textRef4.current;
    const textElement5 = textRef5.current;
    const textElement6 = textRef6.current;
    const textElement7= textRef7.current;

    gsap.to(textElement1, {
      text: `1) 시작할 땐 중앙 문구 위 아래로<br/>검은 막이 열리는 효과가 있었으면 좋겠습니다. (스크롤에 반응)`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement1,
        start: "center 45%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement2, {
      text: `2) 그리고 검은 막이 다 열릴 때까지 해당 문구가 대문자에서 소문자로<br/>하나씩 변경됐으면 좋겠어요.`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement2,
        start: "center 45%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement3, {
      text: `3) 앞 효과와 함께 하늘색 별은 작아졌다가 커지며,<br/>커진 후 블러효과가 유지됐으면 좋겠어요.`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement3,
        start: "center 45%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement4, {
      text: `4) PC 버전에서는 마우스에 해당 핑크 별이 커서를 따라다녔으면 좋겠어요.<br/>클릭하면 별이 커지고 difference 효과가 있었으면 좋겠습니다.`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement4,
        start: "center 45%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement5, {
      text: `5) 연두 화살표, 그리고 두 문구는<br/>왼쪽에서 오른쪽으로 fade in 됐으면 좋겠습니다.`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement5,
        start: "center 45%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement6, {
      text: `6) 빨강 띠는 가로로 무한 롤링됐으면 좋겠고,<br/>문구들이 약하게 반짝 반짝거렸으면 좋겠습니다.`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement6,
        start: "center 45%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(textElement7, {
      text: `- 위는 최소한의 예시이므로 정확한 구현을 원하실 경우 더 자세한 설명이 필요합니다.<br/>(ex. 그림, 영상, 프로토타입 등 디테일한 인터렉션 설명이 존재해야 예상과 동일한 구현이 가능합니다.)<br/>- Figma 링크 혹은 파일이 필요하며, 전달이 어려울 경우 모든 소스 파일이 필요합니다.<br/>- 궁금한 사항은 contact@01.works 또는 Instagram DM으로 부탁드립니다.`,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: textElement7,
        start: "top 45%",
        end: "+=1000",
        scrub: true,
        // markers: true,
      },
    });
  }, []);
  return (
    <div className="h-[200vh] pb-10 relative pt-[60%]">
      <div className="flex sticky top-1/2 -translate-y-[60%]">
        <div className="pt-10 pl-1">
          <Example />
        </div>
        <div className="flex-1 flex justify-center pt-10 relative">
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
          <ExamplePage />
          <div className="absolute top-[6%]">
            <p className="text-[#FF0000] caption" ref={textRef1}>1)</p>
          </div>
          <div className="absolute top-[25%] left-[5%]">
            <p className="text-[#FF0000] caption" ref={textRef2}>2)</p>
          </div>
          <div className="absolute top-[40%] left-[50%]">
            <p className="text-[#FF0000] caption" ref={textRef3}>3)</p>
          </div>
          <div className="absolute top-[58%] left-[41%]">
            <p className="text-[#FF0000] caption" ref={textRef4}>4)</p>
          </div>
          <div className="absolute top-[83%] left-[-5%]">
            <p className="text-[#FF0000] caption" ref={textRef5}>5)</p>
          </div>
          <div className="absolute top-[101%] left-[48%]">
            <p className="text-[#FF0000] caption" ref={textRef6}>6)</p>
          </div>
          <div className="absolute top-[120%] left-[-4%]">
            <p className="caption" ref={textRef7}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleSection;
