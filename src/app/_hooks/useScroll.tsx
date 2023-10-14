import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0); // 스크롤 속도를 저장하는 상태

  useEffect(() => {
    let prevScrollY = window.scrollY; // 이전 스크롤 위치

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - prevScrollY;

      setScrollY(currentScrollY);
      setScrollSpeed(scrollDelta);

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY, scrollSpeed };
};

export { useScroll };
